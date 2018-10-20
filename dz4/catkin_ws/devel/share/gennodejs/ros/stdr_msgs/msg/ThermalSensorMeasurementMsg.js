// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ThermalSensorMeasurementMsg {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.thermal_source_degrees = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ThermalSensorMeasurementMsg
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [thermal_source_degrees]
    bufferInfo = _serializer.uint32(obj.thermal_source_degrees.length, bufferInfo);
    // Serialize message field [thermal_source_degrees]
    obj.thermal_source_degrees.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ThermalSensorMeasurementMsg
    let tmp;
    let len;
    let data = new ThermalSensorMeasurementMsg();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [thermal_source_degrees]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [thermal_source_degrees]
    data.thermal_source_degrees = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.thermal_source_degrees[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/ThermalSensorMeasurementMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e4b704fefcd6eb849f164e31d5084251';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Sensor measurement description
    
    Header header
    
    float32[] thermal_source_degrees
    
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

module.exports = ThermalSensorMeasurementMsg;
