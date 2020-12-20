import ts from "typescript";
import {
  createEnumTypeDslStmts,
  createImportNexusDecl,
  createImportProtoDecls,
  createImportUnwrapFuncDecls,
  createInputObjectTypeDslStmts,
  createObjectTypeDslStmts,
  createOneofUnionTypeDslStmts,
  createReExportProtoStmts,
} from "./dslgen";
import { ProtoFile, ProtoRegistry } from "./protoTypes";

export function printSource(
  registry: ProtoRegistry,
  file: ProtoFile,
  params: { importPrefix?: string }
): string {
  const [msgs, enums] = registry.collectTypes(file);

  const ast: ts.Statement[] = [
    // `import { objectType, enumTpye } from "nexus";`
    createImportNexusDecl(msgs, enums),
    // `import * as proto_nexus from "proto-nexus";`
    ...createImportUnwrapFuncDecls(msgs),
    // `import * as _$hello$hello_pb from "./hello/hello_pb";`
    ...createImportProtoDecls(msgs, params),
    // `export _$hello$hello_pb$Hello = _$hello$hello_pb.Hello;`
    ...createReExportProtoStmts(msgs, params),
    // `export cosnt Oneof = unionType({ ... });`
    ...createOneofUnionTypeDslStmts(msgs, registry, params),
    // `export cosnt Hello = objectType({ ... });`
    ...createObjectTypeDslStmts(msgs, registry, params),
    // `export cosnt HelloInput = inputObjectType({ ... });`
    ...createInputObjectTypeDslStmts(msgs, registry),
    // `export const Role = enumType({ ... });`
    ...createEnumTypeDslStmts(enums),
  ];

  const nexusFile = ts.factory.updateSourceFile(
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
  const result = printer.printFile(nexusFile);

  return [
    "// Code generated by protoc-gen-nexus. DO NOT EDIT.",
    `// source: ${file.descriptor.getName()}`,
    "",
    result,
  ].join("\n");
}
