// source: graphql/schema.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.graphql.GraphqlEnumOptions', null, global);
goog.exportSymbol('proto.graphql.GraphqlEnumValueOptions', null, global);
goog.exportSymbol('proto.graphql.GraphqlFieldOptions', null, global);
goog.exportSymbol('proto.graphql.GraphqlObjectTypeOptions', null, global);
goog.exportSymbol('proto.graphql.GraphqlOneofOptions', null, global);
goog.exportSymbol('proto.graphql.GraphqlSchemaOptions', null, global);
goog.exportSymbol('proto.graphql.enumType', null, global);
goog.exportSymbol('proto.graphql.enumValue', null, global);
goog.exportSymbol('proto.graphql.field', null, global);
goog.exportSymbol('proto.graphql.objectType', null, global);
goog.exportSymbol('proto.graphql.oneof', null, global);
goog.exportSymbol('proto.graphql.schema', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphql.GraphqlSchemaOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphql.GraphqlSchemaOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphql.GraphqlSchemaOptions.displayName = 'proto.graphql.GraphqlSchemaOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphql.GraphqlObjectTypeOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphql.GraphqlObjectTypeOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphql.GraphqlObjectTypeOptions.displayName = 'proto.graphql.GraphqlObjectTypeOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphql.GraphqlFieldOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphql.GraphqlFieldOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphql.GraphqlFieldOptions.displayName = 'proto.graphql.GraphqlFieldOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphql.GraphqlOneofOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphql.GraphqlOneofOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphql.GraphqlOneofOptions.displayName = 'proto.graphql.GraphqlOneofOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphql.GraphqlEnumOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphql.GraphqlEnumOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphql.GraphqlEnumOptions.displayName = 'proto.graphql.GraphqlEnumOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.graphql.GraphqlEnumValueOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.graphql.GraphqlEnumValueOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.graphql.GraphqlEnumValueOptions.displayName = 'proto.graphql.GraphqlEnumValueOptions';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphql.GraphqlSchemaOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.graphql.GraphqlSchemaOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphql.GraphqlSchemaOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlSchemaOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    typePrefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ignoreRequests: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    ignoreResponses: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphql.GraphqlSchemaOptions}
 */
proto.graphql.GraphqlSchemaOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphql.GraphqlSchemaOptions;
  return proto.graphql.GraphqlSchemaOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphql.GraphqlSchemaOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphql.GraphqlSchemaOptions}
 */
proto.graphql.GraphqlSchemaOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypePrefix(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreRequests(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphql.GraphqlSchemaOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphql.GraphqlSchemaOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphql.GraphqlSchemaOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlSchemaOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypePrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIgnoreRequests();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIgnoreResponses();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string type_prefix = 1;
 * @return {string}
 */
proto.graphql.GraphqlSchemaOptions.prototype.getTypePrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphql.GraphqlSchemaOptions} returns this
 */
proto.graphql.GraphqlSchemaOptions.prototype.setTypePrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool ignore_requests = 2;
 * @return {boolean}
 */
proto.graphql.GraphqlSchemaOptions.prototype.getIgnoreRequests = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlSchemaOptions} returns this
 */
proto.graphql.GraphqlSchemaOptions.prototype.setIgnoreRequests = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool ignore_responses = 3;
 * @return {boolean}
 */
proto.graphql.GraphqlSchemaOptions.prototype.getIgnoreResponses = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlSchemaOptions} returns this
 */
proto.graphql.GraphqlSchemaOptions.prototype.setIgnoreResponses = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.graphql.GraphqlObjectTypeOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphql.GraphqlObjectTypeOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlObjectTypeOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignore: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    squashUnion: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pb_interface: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphql.GraphqlObjectTypeOptions}
 */
proto.graphql.GraphqlObjectTypeOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphql.GraphqlObjectTypeOptions;
  return proto.graphql.GraphqlObjectTypeOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphql.GraphqlObjectTypeOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphql.GraphqlObjectTypeOptions}
 */
proto.graphql.GraphqlObjectTypeOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSquashUnion(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInterface(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphql.GraphqlObjectTypeOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphql.GraphqlObjectTypeOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlObjectTypeOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIgnore();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSquashUnion();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getInterface();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool ignore = 1;
 * @return {boolean}
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlObjectTypeOptions} returns this
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.setIgnore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool squash_union = 2;
 * @return {boolean}
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.getSquashUnion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlObjectTypeOptions} returns this
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.setSquashUnion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool interface = 3;
 * @return {boolean}
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.getInterface = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlObjectTypeOptions} returns this
 */
proto.graphql.GraphqlObjectTypeOptions.prototype.setInterface = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphql.GraphqlFieldOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.graphql.GraphqlFieldOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphql.GraphqlFieldOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlFieldOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignore: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphql.GraphqlFieldOptions}
 */
proto.graphql.GraphqlFieldOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphql.GraphqlFieldOptions;
  return proto.graphql.GraphqlFieldOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphql.GraphqlFieldOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphql.GraphqlFieldOptions}
 */
proto.graphql.GraphqlFieldOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphql.GraphqlFieldOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphql.GraphqlFieldOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphql.GraphqlFieldOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlFieldOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIgnore();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool ignore = 1;
 * @return {boolean}
 */
proto.graphql.GraphqlFieldOptions.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlFieldOptions} returns this
 */
proto.graphql.GraphqlFieldOptions.prototype.setIgnore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.graphql.GraphqlFieldOptions.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.graphql.GraphqlFieldOptions} returns this
 */
proto.graphql.GraphqlFieldOptions.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphql.GraphqlOneofOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.graphql.GraphqlOneofOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphql.GraphqlOneofOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlOneofOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignore: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphql.GraphqlOneofOptions}
 */
proto.graphql.GraphqlOneofOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphql.GraphqlOneofOptions;
  return proto.graphql.GraphqlOneofOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphql.GraphqlOneofOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphql.GraphqlOneofOptions}
 */
proto.graphql.GraphqlOneofOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphql.GraphqlOneofOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphql.GraphqlOneofOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphql.GraphqlOneofOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlOneofOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIgnore();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ignore = 1;
 * @return {boolean}
 */
proto.graphql.GraphqlOneofOptions.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlOneofOptions} returns this
 */
proto.graphql.GraphqlOneofOptions.prototype.setIgnore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphql.GraphqlEnumOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.graphql.GraphqlEnumOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphql.GraphqlEnumOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlEnumOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignore: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphql.GraphqlEnumOptions}
 */
proto.graphql.GraphqlEnumOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphql.GraphqlEnumOptions;
  return proto.graphql.GraphqlEnumOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphql.GraphqlEnumOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphql.GraphqlEnumOptions}
 */
proto.graphql.GraphqlEnumOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphql.GraphqlEnumOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphql.GraphqlEnumOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphql.GraphqlEnumOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlEnumOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIgnore();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ignore = 1;
 * @return {boolean}
 */
proto.graphql.GraphqlEnumOptions.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlEnumOptions} returns this
 */
proto.graphql.GraphqlEnumOptions.prototype.setIgnore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.graphql.GraphqlEnumValueOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.graphql.GraphqlEnumValueOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.graphql.GraphqlEnumValueOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlEnumValueOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignore: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.graphql.GraphqlEnumValueOptions}
 */
proto.graphql.GraphqlEnumValueOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.graphql.GraphqlEnumValueOptions;
  return proto.graphql.GraphqlEnumValueOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.graphql.GraphqlEnumValueOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.graphql.GraphqlEnumValueOptions}
 */
proto.graphql.GraphqlEnumValueOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.graphql.GraphqlEnumValueOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.graphql.GraphqlEnumValueOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.graphql.GraphqlEnumValueOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.graphql.GraphqlEnumValueOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIgnore();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ignore = 1;
 * @return {boolean}
 */
proto.graphql.GraphqlEnumValueOptions.prototype.getIgnore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.graphql.GraphqlEnumValueOptions} returns this
 */
proto.graphql.GraphqlEnumValueOptions.prototype.setIgnore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `schema`.
 * @type {!jspb.ExtensionFieldInfo<!proto.graphql.GraphqlSchemaOptions>}
 */
proto.graphql.schema = new jspb.ExtensionFieldInfo(
    2056,
    {schema: 0},
    proto.graphql.GraphqlSchemaOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.graphql.GraphqlSchemaOptions.toObject),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[2056] = new jspb.ExtensionFieldBinaryInfo(
    proto.graphql.schema,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.graphql.GraphqlSchemaOptions.serializeBinaryToWriter,
    proto.graphql.GraphqlSchemaOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[2056] = proto.graphql.schema;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `objectType`.
 * @type {!jspb.ExtensionFieldInfo<!proto.graphql.GraphqlObjectTypeOptions>}
 */
proto.graphql.objectType = new jspb.ExtensionFieldInfo(
    2056,
    {objectType: 0},
    proto.graphql.GraphqlObjectTypeOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.graphql.GraphqlObjectTypeOptions.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[2056] = new jspb.ExtensionFieldBinaryInfo(
    proto.graphql.objectType,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.graphql.GraphqlObjectTypeOptions.serializeBinaryToWriter,
    proto.graphql.GraphqlObjectTypeOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[2056] = proto.graphql.objectType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `field`.
 * @type {!jspb.ExtensionFieldInfo<!proto.graphql.GraphqlFieldOptions>}
 */
proto.graphql.field = new jspb.ExtensionFieldInfo(
    2056,
    {field: 0},
    proto.graphql.GraphqlFieldOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.graphql.GraphqlFieldOptions.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[2056] = new jspb.ExtensionFieldBinaryInfo(
    proto.graphql.field,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.graphql.GraphqlFieldOptions.serializeBinaryToWriter,
    proto.graphql.GraphqlFieldOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[2056] = proto.graphql.field;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `oneof`.
 * @type {!jspb.ExtensionFieldInfo<!proto.graphql.GraphqlOneofOptions>}
 */
proto.graphql.oneof = new jspb.ExtensionFieldInfo(
    2056,
    {oneof: 0},
    proto.graphql.GraphqlOneofOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.graphql.GraphqlOneofOptions.toObject),
    0);

google_protobuf_descriptor_pb.OneofOptions.extensionsBinary[2056] = new jspb.ExtensionFieldBinaryInfo(
    proto.graphql.oneof,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.graphql.GraphqlOneofOptions.serializeBinaryToWriter,
    proto.graphql.GraphqlOneofOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.OneofOptions.extensions[2056] = proto.graphql.oneof;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumType`.
 * @type {!jspb.ExtensionFieldInfo<!proto.graphql.GraphqlEnumOptions>}
 */
proto.graphql.enumType = new jspb.ExtensionFieldInfo(
    2056,
    {enumType: 0},
    proto.graphql.GraphqlEnumOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.graphql.GraphqlEnumOptions.toObject),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[2056] = new jspb.ExtensionFieldBinaryInfo(
    proto.graphql.enumType,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.graphql.GraphqlEnumOptions.serializeBinaryToWriter,
    proto.graphql.GraphqlEnumOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[2056] = proto.graphql.enumType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValue`.
 * @type {!jspb.ExtensionFieldInfo<!proto.graphql.GraphqlEnumValueOptions>}
 */
proto.graphql.enumValue = new jspb.ExtensionFieldInfo(
    2056,
    {enumValue: 0},
    proto.graphql.GraphqlEnumValueOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.graphql.GraphqlEnumValueOptions.toObject),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[2056] = new jspb.ExtensionFieldBinaryInfo(
    proto.graphql.enumValue,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.graphql.GraphqlEnumValueOptions.serializeBinaryToWriter,
    proto.graphql.GraphqlEnumValueOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[2056] = proto.graphql.enumValue;

goog.object.extend(exports, proto.graphql);
