// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class LoadMapRequest {
  constructor() {
    this.mapFile = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LoadMapRequest
    // Serialize message field [mapFile]
    bufferInfo = _serializer.string(obj.mapFile, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LoadMapRequest
    let tmp;
    let len;
    let data = new LoadMapRequest();
    // Deserialize message field [mapFile]
    tmp = _deserializer.string(buffer);
    data.mapFile = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/LoadMapRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '656f50b5e78328d62ac1c4a5c19fefd5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string mapFile
    
    `;
  }

};

class LoadMapResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LoadMapResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LoadMapResponse
    let tmp;
    let len;
    let data = new LoadMapResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/LoadMapResponse';
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
  Request: LoadMapRequest,
  Response: LoadMapResponse
};
