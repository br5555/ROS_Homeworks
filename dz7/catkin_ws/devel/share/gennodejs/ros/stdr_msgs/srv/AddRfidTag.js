// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RfidTag = require('../msg/RfidTag.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class AddRfidTagRequest {
  constructor() {
    this.newTag = new RfidTag();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddRfidTagRequest
    // Serialize message field [newTag]
    bufferInfo = RfidTag.serialize(obj.newTag, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddRfidTagRequest
    let tmp;
    let len;
    let data = new AddRfidTagRequest();
    // Deserialize message field [newTag]
    tmp = RfidTag.deserialize(buffer);
    data.newTag = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/AddRfidTagRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e6bb1380792d35db5a38d02485c68a1d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    stdr_msgs/RfidTag newTag
    
    ================================================================================
    MSG: stdr_msgs/RfidTag
    # Rfid tag description
    
    string tag_id
    string message
    geometry_msgs/Pose2D pose # sensor pose, relative to the map origin
    
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    `;
  }

};

class AddRfidTagResponse {
  constructor() {
    this.success = false;
    this.message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddRfidTagResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddRfidTagResponse
    let tmp;
    let len;
    let data = new AddRfidTagResponse();
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
    return 'stdr_msgs/AddRfidTagResponse';
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
  Request: AddRfidTagRequest,
  Response: AddRfidTagResponse
};
