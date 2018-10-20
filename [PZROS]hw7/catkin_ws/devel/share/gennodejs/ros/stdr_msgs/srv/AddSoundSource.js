// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SoundSource = require('../msg/SoundSource.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class AddSoundSourceRequest {
  constructor() {
    this.newSource = new SoundSource();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddSoundSourceRequest
    // Serialize message field [newSource]
    bufferInfo = SoundSource.serialize(obj.newSource, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddSoundSourceRequest
    let tmp;
    let len;
    let data = new AddSoundSourceRequest();
    // Deserialize message field [newSource]
    tmp = SoundSource.deserialize(buffer);
    data.newSource = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/AddSoundSourceRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c29faee1e29b2a8ababeae8f802069e9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    stdr_msgs/SoundSource newSource
    
    ================================================================================
    MSG: stdr_msgs/SoundSource
    # Source description
    
    string id
    float32 dbs
    
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

class AddSoundSourceResponse {
  constructor() {
    this.success = false;
    this.message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddSoundSourceResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddSoundSourceResponse
    let tmp;
    let len;
    let data = new AddSoundSourceResponse();
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
    return 'stdr_msgs/AddSoundSourceResponse';
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
  Request: AddSoundSourceRequest,
  Response: AddSoundSourceResponse
};
