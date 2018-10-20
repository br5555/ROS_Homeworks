// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let CO2Source = require('../msg/CO2Source.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class AddCO2SourceRequest {
  constructor() {
    this.newSource = new CO2Source();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddCO2SourceRequest
    // Serialize message field [newSource]
    bufferInfo = CO2Source.serialize(obj.newSource, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddCO2SourceRequest
    let tmp;
    let len;
    let data = new AddCO2SourceRequest();
    // Deserialize message field [newSource]
    tmp = CO2Source.deserialize(buffer);
    data.newSource = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/AddCO2SourceRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7199b309078089de32dcffa91f18ebd0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    stdr_msgs/CO2Source newSource
    
    ================================================================================
    MSG: stdr_msgs/CO2Source
    # Source description
    
    string id
    float32 ppm
    
    # sensor pose, relative to the map origin
    geometry_msgs/Pose2D pose 
    
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    `;
  }

};

class AddCO2SourceResponse {
  constructor() {
    this.success = false;
    this.message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddCO2SourceResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddCO2SourceResponse
    let tmp;
    let len;
    let data = new AddCO2SourceResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [message]
    tmp = _deserializer.string(buffer);
    data.message = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/AddCO2SourceResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '937c9679a518e3a18d831e57125ea522';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    string message
    
    
    `;
  }

};

module.exports = {
  Request: AddCO2SourceRequest,
  Response: AddCO2SourceResponse
};
