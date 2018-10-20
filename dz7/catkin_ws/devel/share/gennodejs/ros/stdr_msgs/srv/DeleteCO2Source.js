// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class DeleteCO2SourceRequest {
  constructor() {
    this.name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DeleteCO2SourceRequest
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DeleteCO2SourceRequest
    let tmp;
    let len;
    let data = new DeleteCO2SourceRequest();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/DeleteCO2SourceRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c1f3d28f1b044c871e6eff2e9fc3c667';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    
    `;
  }

};

class DeleteCO2SourceResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DeleteCO2SourceResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DeleteCO2SourceResponse
    let tmp;
    let len;
    let data = new DeleteCO2SourceResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/DeleteCO2SourceResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    `;
  }

};

module.exports = {
  Request: DeleteCO2SourceRequest,
  Response: DeleteCO2SourceResponse
};
