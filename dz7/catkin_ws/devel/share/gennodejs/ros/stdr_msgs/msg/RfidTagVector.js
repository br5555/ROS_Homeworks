// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RfidTag = require('./RfidTag.js');

//-----------------------------------------------------------

class RfidTagVector {
  constructor() {
    this.rfid_tags = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RfidTagVector
    // Serialize the length for message field [rfid_tags]
    bufferInfo = _serializer.uint32(obj.rfid_tags.length, bufferInfo);
    // Serialize message field [rfid_tags]
    obj.rfid_tags.forEach((val) => {
      bufferInfo = RfidTag.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RfidTagVector
    let tmp;
    let len;
    let data = new RfidTagVector();
    // Deserialize array length for message field [rfid_tags]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rfid_tags]
    data.rfid_tags = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RfidTag.deserialize(buffer);
      data.rfid_tags[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/RfidTagVector';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd1ccd79235f17c9d8c9665681cfa66f7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Rfid tag list
    stdr_msgs/RfidTag[] rfid_tags
    
    ================================================================================
    MSG: stdr_msgs/RfidTag
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

module.exports = RfidTagVector;
