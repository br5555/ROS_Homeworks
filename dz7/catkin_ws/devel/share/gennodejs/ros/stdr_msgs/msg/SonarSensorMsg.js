// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Noise = require('./Noise.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class SonarSensorMsg {
  constructor() {
    this.maxRange = 0.0;
    this.minRange = 0.0;
    this.coneAngle = 0.0;
    this.frequency = 0.0;
    this.noise = new Noise();
    this.frame_id = '';
    this.pose = new geometry_msgs.msg.Pose2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SonarSensorMsg
    // Serialize message field [maxRange]
    bufferInfo = _serializer.float32(obj.maxRange, bufferInfo);
    // Serialize message field [minRange]
    bufferInfo = _serializer.float32(obj.minRange, bufferInfo);
    // Serialize message field [coneAngle]
    bufferInfo = _serializer.float32(obj.coneAngle, bufferInfo);
    // Serialize message field [frequency]
    bufferInfo = _serializer.float32(obj.frequency, bufferInfo);
    // Serialize message field [noise]
    bufferInfo = Noise.serialize(obj.noise, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.string(obj.frame_id, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SonarSensorMsg
    let tmp;
    let len;
    let data = new SonarSensorMsg();
    // Deserialize message field [maxRange]
    tmp = _deserializer.float32(buffer);
    data.maxRange = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [minRange]
    tmp = _deserializer.float32(buffer);
    data.minRange = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [coneAngle]
    tmp = _deserializer.float32(buffer);
    data.coneAngle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frequency]
    tmp = _deserializer.float32(buffer);
    data.frequency = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [noise]
    tmp = Noise.deserialize(buffer);
    data.noise = tmp.data;
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
    return 'stdr_msgs/SonarSensorMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e8b8bd75b2e357572ea0c9ee72ed58c1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Rfid sensor description
    float32 maxRange
    float32 minRange
    float32 coneAngle
    
    float32 frequency
    stdr_msgs/Noise noise
    
    string frame_id
    geometry_msgs/Pose2D pose # sensor pose, relative to robot center
    
    ================================================================================
    MSG: stdr_msgs/Noise
    bool noise
    float32 noiseMean
    float32 noiseStd
    
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    `;
  }

};

module.exports = SonarSensorMsg;
