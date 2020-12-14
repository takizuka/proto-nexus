import {
  FileDescriptorProto,
  FieldDescriptorProto,
} from "google-protobuf/google/protobuf/descriptor_pb";
import ts from "typescript";
import { ProtoFile, ProtoField, ProtoEnum, ProtoMessage } from "./protoTypes";

export function printSource(
  fd: FileDescriptorProto,
  msgs: ProtoMessage[],
  enums: ProtoEnum[],
  params: { importPrefix?: string }
): string {
  let ast: ts.Statement[] = [
    ts.factory.createImportDeclaration(
      undefined,
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports(
          compact([
            msgs.length === 0
              ? null
              : ts.factory.createImportSpecifier(
                  undefined,
                  ts.factory.createIdentifier("objectType")
                ),
            enums.length === 0
              ? null
              : ts.factory.createImportSpecifier(
                  undefined,
                  ts.factory.createIdentifier("enumType")
                ),
          ])
        )
      ),
      ts.factory.createStringLiteral("@nexus/schema")
    ),
  ];

  const msgASTs = msgs.map((m) => new MessageAST(m, params));
  const enumASTs = enums.map((e) => new EnumAST(e, params));

  const unwrapFuncs = uniq(
    compact(msgASTs.flatMap((m) => m.fields.map((f) => f.unwrapFunc))),
    (f) => f.name
  );

  const imports = uniq([...unwrapFuncs.flatMap((f) => f.imports)]);
  for (const imp of imports) {
    ast.push(createImportAllWithAliastDecl(imp));
  }

  ast.push(...compact(uniq(msgASTs, (m) => m.import).map((m) => m.importDecl)));
  ast.push(...compact(msgASTs.map((m) => m.exportDecl)));

  ast = [
    ...ast,
    ...msgASTs.map((m) => m.build()),
    ...enumASTs.map((e) => e.build()),
  ];

  const file = ts.factory.updateSourceFile(
    ts.createSourceFile(
      "generated.ts",
      "",
      ts.ScriptTarget.Latest,
      false,
      ts.ScriptKind.TS
    ),
    ast,
    false
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const result = printer.printFile(file);

  return [
    "// Code generated by protoc-gen-nexus. DO NOT EDIT.",
    `// source: ${fd.getName()}`,
    "",
    result,
  ].join("\n");
}

class MessageAST {
  constructor(
    private readonly msg: ProtoMessage,
    private readonly params: { importPrefix?: string }
  ) {}

  get name(): string {
    return nameWithParent(this.msg);
  }

  get aliasName(): string {
    return uniqueImportAlias(`${this.import}/${this.name}`);
  }

  get qualifiedName(): ts.QualifiedName {
    return ts.factory.createQualifiedName(
      this.msg.parent instanceof ProtoFile
        ? ts.factory.createIdentifier(uniqueImportAlias(this.import))
        : new MessageAST(this.msg.parent, this.params).qualifiedName,
      this.msg.name
    );
  }

  get fields(): FieldAST[] {
    return this.msg.fields.map((f) => new FieldAST(f));
  }

  get sourceTypeExpression(): ts.Expression {
    return ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment(
        "module",
        ts.factory.createIdentifier("__filename")
      ),
      ts.factory.createPropertyAssignment(
        "export",
        ts.factory.createStringLiteral(this.aliasName)
      ),
    ]);
  }

  get import(): string {
    const { importPrefix } = this.params;
    return `${importPrefix ? `${importPrefix}/` : "./"}${this.msg.importPath}`;
  }

  get importDecl(): ts.ImportDeclaration | null {
    if (!(this.msg.parent instanceof ProtoFile)) return null;

    return createImportAllWithAliastDecl(this.import);
  }

  get exportDecl(): ts.Statement | null {
    return ts.factory.createTypeAliasDeclaration(
      undefined,
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      this.aliasName,
      undefined,
      ts.factory.createTypeReferenceNode(this.qualifiedName)
    );
  }

  public build(): ts.Statement {
    return ts.factory.createVariableStatement(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            this.name,
            undefined,
            undefined,
            this.buildObjectType()
          ),
        ],
        ts.NodeFlags.Const
      )
    );
  }

  private buildObjectType(): ts.Expression {
    const { name, description } = this.msg;

    return ts.factory.createCallExpression(
      ts.factory.createIdentifier("objectType"),
      undefined,
      [
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              "name",
              ts.factory.createStringLiteral(name)
            ),
            ts.factory.createPropertyAssignment(
              "description",
              ts.factory.createStringLiteral(description)
            ),
            // TODO: "description" property
            ts.factory.createMethodDeclaration(
              undefined,
              undefined,
              undefined,
              "definition",
              undefined,
              undefined,
              [
                ts.factory.createParameterDeclaration(
                  undefined,
                  undefined,
                  undefined,
                  "t",
                  undefined,
                  undefined,
                  undefined
                ),
              ],
              undefined,
              ts.factory.createBlock(
                this.fields.map((f) => f.build()),
                true
              )
            ),
            ts.factory.createPropertyAssignment(
              "sourceType",
              this.sourceTypeExpression
            ),
          ],
          true
        ),
      ]
    );
  }
}

class FieldAST {
  private readonly field: ProtoField;
  private readonly type: Type;

  constructor(field: ProtoField) {
    this.field = field;
    this.type = convertType(field);
  }

  public build(): ts.Statement {
    const { name } = this.field;

    return ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(this.fieldFunction, undefined, [
        ts.factory.createStringLiteral(name),
        this.options,
      ])
    );
  }

  get unwrapFunc(): UnwrapFunc | null {
    return unwrapFuncs[this.field.protoTypeName] || null;
  }

  private get fieldFunction(): ts.Expression {
    let left: ts.Expression = ts.factory.createIdentifier("t");

    left = ts.factory.createPropertyAccessExpression(
      left,
      ts.factory.createIdentifier(
        this.field.isNullable() ? "nullable" : "nonNull"
      )
    );

    if (this.type.kind === "list") {
      left = ts.factory.createPropertyAccessExpression(
        left,
        ts.factory.createIdentifier("list")
      );
    }

    return ts.factory.createPropertyAccessExpression(
      left,
      ts.factory.createIdentifier(this.nexusTypeName)
    );
  }

  private get nexusTypeName(): string {
    const { type } = this;

    switch (type.kind) {
      case "list":
        return "field";
      case "scalar":
        switch (type.type) {
          case "Int":
            return "int";
          case "Float":
            return "float";
          case "String":
            return "string";
          case "Boolean":
            return "boolean";
          case "ID":
            return "id";
          case "DateTime":
            return "dateTime";
          default:
            const _exhaustiveCheck: never = type; // eslint-disable-line
            throw "unreachable";
        }
      case "object":
      case "enum":
        return "field";
      default:
        const _exhaustiveCheck: never = type; // eslint-disable-line
        throw "unreachable";
    }
  }

  private get options(): ts.ObjectLiteralExpression {
    const { type } = this;
    const { getterName, description } = this.field;
    const props: ts.ObjectLiteralElementLike[] = [
      ts.factory.createPropertyAssignment(
        "description",
        ts.factory.createStringLiteral(description)
      ),
    ];

    if (type.kind === "list") {
      props.push(
        ts.factory.createPropertyAssignment(
          "type",
          ts.factory.createStringLiteral(type.type.type)
        )
      );
    }

    if (type.kind === "object" || type.kind === "enum") {
      props.push(
        ts.factory.createPropertyAssignment(
          "type",
          ts.factory.createStringLiteral(type.type)
        )
      );
    }

    let resolverRet: ts.Expression = ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier("root"),
        ts.factory.createIdentifier(getterName)
      ),
      undefined,
      undefined
    );
    if (this.unwrapFunc !== null) {
      resolverRet = ts.factory.createCallExpression(
        ts.factory.createIdentifier(this.unwrapFunc.name),
        undefined,
        [resolverRet]
      );
    }

    props.push(
      ts.factory.createMethodDeclaration(
        undefined,
        undefined,
        undefined,
        "resolve",
        undefined,
        undefined,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "root",
            undefined,
            undefined,
            undefined
          ),
        ],
        undefined,
        ts.factory.createBlock([ts.factory.createReturnStatement(resolverRet)])
      )
    );

    return ts.factory.createObjectLiteralExpression(props, true);
  }
}

class EnumAST {
  constructor(
    private readonly proto: ProtoEnum,
    private readonly params: { importPrefix?: string }
  ) {}

  get name(): string {
    return nameWithParent(this.proto);
  }

  get aliasName(): string {
    return uniqueImportAlias(`${this.import}/${this.name}`);
  }

  get qualifiedName(): ts.QualifiedName {
    return ts.factory.createQualifiedName(
      this.proto.parent instanceof ProtoFile
        ? ts.factory.createIdentifier(uniqueImportAlias(this.import))
        : new MessageAST(this.proto.parent, this.params).qualifiedName,
      this.proto.name
    );
  }

  get import(): string {
    const { importPrefix } = this.params;
    return `${importPrefix ? `${importPrefix}/` : "./"}${
      this.proto.importPath
    }`;
  }

  get importDecl(): ts.ImportDeclaration | null {
    if (!(this.proto.parent instanceof ProtoFile)) return null;

    return createImportAllWithAliastDecl(this.import);
  }

  get exportDecl(): ts.Statement | null {
    return ts.factory.createTypeAliasDeclaration(
      undefined,
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      this.aliasName,
      undefined,
      ts.factory.createTypeReferenceNode(this.qualifiedName)
    );
  }

  public build(): ts.Statement {
    return ts.factory.createVariableStatement(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            this.name,
            undefined,
            undefined,
            this.buildEnumType()
          ),
        ],
        ts.NodeFlags.Const
      )
    );
  }

  private buildEnumType(): ts.Expression {
    const { name, description } = this.proto;

    return ts.factory.createCallExpression(
      ts.factory.createIdentifier("enumType"),
      undefined,
      [
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              "name",
              ts.factory.createStringLiteral(name)
            ),
            ts.factory.createPropertyAssignment(
              "description",
              ts.factory.createStringLiteral(description)
            ),
            ts.factory.createPropertyAssignment(
              "members",
              ts.factory.createObjectLiteralExpression(
                this.proto.values.map((ev) =>
                  ts.factory.createPropertyAssignment(
                    ev.name,
                    ts.factory.createNumericLiteral(ev.tagNumber)
                  )
                )
              )
            ),
            // ts.factory.createPropertyAssignment(
            //   "sourceType",
            //   this.sourceTypeExpression,
            // ),
          ],
          true
        ),
      ]
    );
  }
}

function compact<T>(input: T[]): NonNullable<T>[] {
  return input.filter((v): v is NonNullable<T> => v != null);
}

function uniq<T, V>(input: T[], f?: (t: T) => V) {
  const out = [] as T[];
  const set = new Set<T | V>();

  for (const v of input) {
    const key = f ? f(v) : v;
    if (!set.has(key)) {
      set.add(key);
      out.push(v);
    }
  }

  return out;
}

function uniqueImportAlias(path: string) {
  return path
    .replace(/@/g, "$$$$")
    .replace(/\.\.\//g, "__$$")
    .replace(/\.\//g, "_$$")
    .replace(/\//g, "$$")
    .replace(/-/g, "_");
}

type UnwrapFunc = {
  imports: string[];
  name: string;
};

const unwrapFuncs: Record<string, UnwrapFunc> = {
  ".google.protobuf.Int32Value": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapInt32Value`,
  },
  ".google.protobuf.UInt32Value": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapUInt32Value`,
  },
  ".google.protobuf.Int64Value": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapInt64Value`,
  },
  ".google.protobuf.UInt64Value": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapUInt64Value`,
  },
  ".google.protobuf.FloatValue": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapFloatValue`,
  },
  ".google.protobuf.DoubleValue": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapDoubleValue`,
  },
  ".google.protobuf.StringValue": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapStringValue`,
  },
  ".google.protobuf.BoolValue": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.unwrapBoolValue`,
  },
  ".google.protobuf.Timestamp": {
    imports: ["proto-nexus"],
    name: `${uniqueImportAlias("proto-nexus")}.timestampToDate`,
  },
};

function createImportAllWithAliastDecl(path: string): ts.ImportDeclaration {
  return ts.factory.createImportDeclaration(
    undefined,
    undefined,
    ts.factory.createImportClause(
      false,
      undefined,
      ts.factory.createNamespaceImport(
        ts.factory.createIdentifier(uniqueImportAlias(path))
      )
    ),
    ts.factory.createStringLiteral(path)
  );
}

function nameWithParent(typ: ProtoMessage | ProtoEnum): string {
  let name = "";
  let t: ProtoMessage | ProtoEnum | ProtoFile = typ;
  for (;;) {
    if (t instanceof ProtoMessage || t instanceof ProtoEnum) {
      name = `${t.name}${name}`;
      t = t.parent;
    } else {
      break;
    }
  }
  return name;
}

type ScalarType = "Int" | "Float" | "String" | "Boolean" | "ID" | "DateTime";

export type ItemType =
  | {
      kind: "scalar";
      type: ScalarType;
    }
  | {
      kind: "object";
      type: string;
    }
  | {
      kind: "enum";
      type: string;
    };

export type Type =
  | ItemType
  | {
      kind: "list";
      type: ItemType;
    };

function convertType(f: ProtoField): Type {
  if (f.isList()) {
    return {
      kind: "list",
      type: convertItemType(f),
    };
  }

  return convertItemType(f);
}

function convertItemType(f: ProtoField): ItemType {
  const pbtype = f.descriptor.getType()!;
  switch (pbtype) {
    case FieldDescriptorProto.Type.TYPE_STRING:
      return { kind: "scalar", type: "String" };
    case FieldDescriptorProto.Type.TYPE_DOUBLE:
    case FieldDescriptorProto.Type.TYPE_FLOAT:
      return { kind: "scalar", type: "Float" };
    case FieldDescriptorProto.Type.TYPE_INT64:
    case FieldDescriptorProto.Type.TYPE_UINT64:
    case FieldDescriptorProto.Type.TYPE_INT32:
    case FieldDescriptorProto.Type.TYPE_FIXED64:
    case FieldDescriptorProto.Type.TYPE_FIXED32:
    case FieldDescriptorProto.Type.TYPE_UINT32:
    case FieldDescriptorProto.Type.TYPE_SFIXED32:
    case FieldDescriptorProto.Type.TYPE_SFIXED64:
    case FieldDescriptorProto.Type.TYPE_SINT32:
    case FieldDescriptorProto.Type.TYPE_SINT64:
      return { kind: "scalar", type: "Int" };
    case FieldDescriptorProto.Type.TYPE_BOOL:
      return { kind: "scalar", type: "Boolean" };
    case FieldDescriptorProto.Type.TYPE_GROUP:
      throw "not supported";
    case FieldDescriptorProto.Type.TYPE_BYTES:
      throw "not supported";
    case FieldDescriptorProto.Type.TYPE_ENUM:
      return {
        kind: "enum",
        // FIXME
        type: f.descriptor.getTypeName()!.split(".").slice(-1)[0]!,
      };
    case FieldDescriptorProto.Type.TYPE_MESSAGE:
      switch (f.descriptor.getTypeName()) {
        case ".google.protobuf.Any":
          throw "not supported";
        case ".google.protobuf.BoolValue":
          return {
            kind: "scalar",
            type: "Boolean",
          };
        case ".google.protobuf.BytesValue":
          throw "not supported";
        case ".google.protobuf.DoubleValue":
        case ".google.protobuf.FloatValue":
          return {
            kind: "scalar",
            type: "Float",
          };
        case ".google.protobuf.Duration":
          throw "not implemented";
        case ".google.protobuf.Int32Value":
        case ".google.protobuf.Int64Value":
        case ".google.protobuf.UInt32Value":
        case ".google.protobuf.UInt64Value":
          return {
            kind: "scalar",
            type: "Int",
          };
        case ".google.protobuf.StringValue":
          return {
            kind: "scalar",
            type: "String",
          };
        case ".google.protobuf.Timestamp":
          return {
            kind: "scalar",
            type: "DateTime",
          };
        default:
          return {
            kind: "object",
            // FIXME
            type: f.descriptor.getTypeName()!.split(".").slice(-1)[0]!,
          };
      }
    default:
      const _exhaustiveCheck: never = pbtype; // eslint-disable-line
      throw "unreachable";
  }
}
