// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class RfidTag {
  constructor() {
    this.tag_id = '';
    this.message = '';
    this.pose = new geometry_msgs.msg.Pose2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RfidTag
    // Serialize message field [tag_id]
    bufferInfo = _serializer.string(obj.tag_id, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RfidTag
    let tmp;
    let len;
    let data = new RfidTag();
    // Deserialize message field [tag_id]
    tmp = _deserializer.string(buffer);
    data.tag_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [message]
    tmp = _deserializer.string(buffer);
    data.message = tmp.data;
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
    return 'stdr_msgs/RfidTag';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e37433c890cfe140ccbef22419fae16c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = RfidTag;
