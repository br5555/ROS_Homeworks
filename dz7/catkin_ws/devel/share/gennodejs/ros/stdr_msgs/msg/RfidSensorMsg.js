// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class RfidSensorMsg {
  constructor() {
    this.maxRange = 0.0;
    this.angleSpan = 0.0;
    this.signalCutoff = 0.0;
    this.frequency = 0.0;
    this.frame_id = '';
    this.pose = new geometry_msgs.msg.Pose2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RfidSensorMsg
    // Serialize message field [maxRange]
    bufferInfo = _serializer.float32(obj.maxRange, bufferInfo);
    // Serialize message field [angleSpan]
    bufferInfo = _serializer.float32(obj.angleSpan, bufferInfo);
    // Serialize message field [signalCutoff]
    bufferInfo = _serializer.float32(obj.signalCutoff, bufferInfo);
    // Serialize message field [frequency]
    bufferInfo = _serializer.float32(obj.frequency, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.string(obj.frame_id, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RfidSensorMsg
    let tmp;
    let len;
    let data = new RfidSensorMsg();
    // Deserialize message field [maxRange]
    tmp = _deserializer.float32(buffer);
    data.maxRange = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angleSpan]
    tmp = _deserializer.float32(buffer);
    data.angleSpan = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [signalCutoff]
    tmp = _deserializer.float32(buffer);
    data.signalCutoff = tmp.data;
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
    return 'stdr_msgs/RfidSensorMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a210bd881966e92d87b9dcab3e305128';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Rfid sensor description
    float32 maxRange
    float32 angleSpan
    float32 signalCutoff
    
    float32 frequency
    
    string frame_id
    geometry_msgs/Pose2D pose # sensor pose, relative to robot center
    
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    `;
  }

};

module.exports = RfidSensorMsg;
