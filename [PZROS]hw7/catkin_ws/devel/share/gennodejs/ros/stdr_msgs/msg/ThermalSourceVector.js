// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ThermalSource = require('./ThermalSource.js');

//-----------------------------------------------------------

class ThermalSourceVector {
  constructor() {
    this.thermal_sources = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ThermalSourceVector
    // Serialize the length for message field [thermal_sources]
    bufferInfo = _serializer.uint32(obj.thermal_sources.length, bufferInfo);
    // Serialize message field [thermal_sources]
    obj.thermal_sources.forEach((val) => {
      bufferInfo = ThermalSource.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ThermalSourceVector
    let tmp;
    let len;
    let data = new ThermalSourceVector();
    // Deserialize array length for message field [thermal_sources]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [thermal_sources]
    data.thermal_sources = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ThermalSource.deserialize(buffer);
      data.thermal_sources[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/ThermalSourceVector';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dddbbf1cf2eb1ad9e8f6f398fb8b44ac';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Thermal sources list
    stdr_msgs/ThermalSource[] thermal_sources
    
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

module.exports = ThermalSourceVector;
