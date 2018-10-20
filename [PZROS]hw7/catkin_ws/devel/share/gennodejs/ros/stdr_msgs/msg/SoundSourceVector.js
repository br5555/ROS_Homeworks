// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let SoundSource = require('./SoundSource.js');

//-----------------------------------------------------------

class SoundSourceVector {
  constructor() {
    this.sound_sources = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SoundSourceVector
    // Serialize the length for message field [sound_sources]
    bufferInfo = _serializer.uint32(obj.sound_sources.length, bufferInfo);
    // Serialize message field [sound_sources]
    obj.sound_sources.forEach((val) => {
      bufferInfo = SoundSource.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SoundSourceVector
    let tmp;
    let len;
    let data = new SoundSourceVector();
    // Deserialize array length for message field [sound_sources]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sound_sources]
    data.sound_sources = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = SoundSource.deserialize(buffer);
      data.sound_sources[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/SoundSourceVector';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b0990ed9e7eeb58876a06c8b484951b4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Sound sources list
    stdr_msgs/SoundSource[] sound_sources
    
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

module.exports = SoundSourceVector;
