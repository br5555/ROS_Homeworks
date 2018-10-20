// Auto-generated. Do not edit!

// (in-package stdr_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class MoveRobotRequest {
  constructor() {
    this.newPose = new geometry_msgs.msg.Pose2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MoveRobotRequest
    // Serialize message field [newPose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.newPose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MoveRobotRequest
    let tmp;
    let len;
    let data = new MoveRobotRequest();
    // Deserialize message field [newPose]
    tmp = geometry_msgs.msg.Pose2D.deserialize(buffer);
    data.newPose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/MoveRobotRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3f8cb1536a8bfe7e956ece9331b2cd07';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Pose2D newPose
    
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    `;
  }

};

class MoveRobotResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MoveRobotResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MoveRobotResponse
    let tmp;
    let len;
    let data = new MoveRobotResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'stdr_msgs/MoveRobotResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    `;
  }

};

module.exports = {
  Request: MoveRobotRequest,
  Response: MoveRobotResponse
};
