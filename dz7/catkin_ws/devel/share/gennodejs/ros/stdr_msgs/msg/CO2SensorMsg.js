// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class CO2SensorMsg {
  constructor() {
    this.maxRange = 0.0;
    this.frequency = 0.0;
    this.frame_id = '';
    this.pose = new geometry_msgs.msg.Pose2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CO2SensorMsg
    // Serialize message field [maxRange]
    bufferInfo = _serializer.float32(obj.maxRange, bufferInfo);
    // Serialize message field [frequency]
    bufferInfo = _serializer.float32(obj.frequency, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.string(obj.frame_id, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CO2SensorMsg
    let tmp;
    let len;
    let data = new CO2SensorMsg();
    // Deserialize message field [maxRange]
    tmp = _deserializer.float32(buffer);
    data.maxRange = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frequency]
    tmp = _deserializer.float32(buffer);
    data.frequency = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frame_id]
    tmp = _deserializer.string(buffer);
    data.frame_id = tmp.data;
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
    return 'stdr_msgs/CO2SensorMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a2ce066e5e102e00628fbb7d1ee5e32b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Sensor description
    
    float32 maxRange
    float32 frequency
    string frame_id
    
    # sensor pose, relative to robot center
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

module.exports = CO2SensorMsg;
