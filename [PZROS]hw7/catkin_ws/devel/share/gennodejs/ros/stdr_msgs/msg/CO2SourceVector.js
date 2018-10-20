// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let CO2Source = require('./CO2Source.js');

//-----------------------------------------------------------

class CO2SourceVector {
  constructor() {
    this.co2_sources = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CO2SourceVector
    // Serialize the length for message field [co2_sources]
    bufferInfo = _serializer.uint32(obj.co2_sources.length, bufferInfo);
    // Serialize message field [co2_sources]
    obj.co2_sources.forEach((val) => {
      bufferInfo = CO2Source.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CO2SourceVector
    let tmp;
    let len;
    let data = new CO2SourceVector();
    // Deserialize array length for message field [co2_sources]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [co2_sources]
    data.co2_sources = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = CO2Source.deserialize(buffer);
      data.co2_sources[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/CO2SourceVector';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5ded45505bc7155e81a2d6033817c7f3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # CO2 sources list
    
    stdr_msgs/CO2Source[] co2_sources
    
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

module.exports = CO2SourceVector;
