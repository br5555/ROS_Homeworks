// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class RfidSensorMeasurementMsg {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.rfid_tags_ids = [];
    this.rfid_tags_msgs = [];
    this.rfid_tags_dbs = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RfidSensorMeasurementMsg
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [rfid_tags_ids]
    bufferInfo = _serializer.uint32(obj.rfid_tags_ids.length, bufferInfo);
    // Serialize message field [rfid_tags_ids]
    obj.rfid_tags_ids.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [rfid_tags_msgs]
    bufferInfo = _serializer.uint32(obj.rfid_tags_msgs.length, bufferInfo);
    // Serialize message field [rfid_tags_msgs]
    obj.rfid_tags_msgs.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [rfid_tags_dbs]
    bufferInfo = _serializer.uint32(obj.rfid_tags_dbs.length, bufferInfo);
    // Serialize message field [rfid_tags_dbs]
    obj.rfid_tags_dbs.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RfidSensorMeasurementMsg
    let tmp;
    let len;
    let data = new RfidSensorMeasurementMsg();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [rfid_tags_ids]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rfid_tags_ids]
    data.rfid_tags_ids = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.rfid_tags_ids[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [rfid_tags_msgs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rfid_tags_msgs]
    data.rfid_tags_msgs = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.rfid_tags_msgs[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [rfid_tags_dbs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rfid_tags_dbs]
    data.rfid_tags_dbs = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.rfid_tags_dbs[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/RfidSensorMeasurementMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '274b41808759cfa6e05b69149e9ea1ed';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Rfid sensor measurement description - all vectors must have the same size
    Header header
    
    string[] rfid_tags_ids
    string[] rfid_tags_msgs
    float32[] rfid_tags_dbs
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

module.exports = RfidSensorMeasurementMsg;
