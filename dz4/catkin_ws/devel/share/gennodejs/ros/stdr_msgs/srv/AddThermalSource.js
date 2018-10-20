// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ThermalSource = require('../msg/ThermalSource.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class AddThermalSourceRequest {
  constructor() {
    this.newSource = new ThermalSource();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddThermalSourceRequest
    // Serialize message field [newSource]
    bufferInfo = ThermalSource.serialize(obj.newSource, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddThermalSourceRequest
    let tmp;
    let len;
    let data = new AddThermalSourceRequest();
    // Deserialize message field [newSource]
    tmp = ThermalSource.deserialize(buffer);
    data.newSource = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/AddThermalSourceRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4c174e42cb7f2369736da76a09bfbaae';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    stdr_msgs/ThermalSource newSource
    
    ================================================================================
    MSG: stdr_msgs/ThermalSource
    # Source description
    
    string id
    float32 degrees
    
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

class AddThermalSourceResponse {
  constructor() {
    this.success = false;
    this.message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddThermalSourceResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddThermalSourceResponse
    let tmp;
    let len;
    let data = new AddThermalSourceResponse();
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
    return 'stdr_msgs/AddThermalSourceResponse';
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
  Request: AddThermalSourceRequest,
  Response: AddThermalSourceResponse
};
