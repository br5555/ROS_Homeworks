// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ThermalSource {
  constructor() {
    this.id = '';
    this.degrees = 0.0;
    this.pose = new geometry_msgs.msg.Pose2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ThermalSource
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [degrees]
    bufferInfo = _serializer.float32(obj.degrees, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ThermalSource
    let tmp;
    let len;
    let data = new ThermalSource();
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [degrees]
    tmp = _deserializer.float32(buffer);
    data.degrees = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose2D.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/ThermalSource';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b732f325d4ba0a2977192d50dca59310';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = ThermalSource;
