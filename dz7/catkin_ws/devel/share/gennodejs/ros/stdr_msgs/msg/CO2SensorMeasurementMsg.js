// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class CO2SensorMeasurementMsg {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.co2_ppm = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CO2SensorMeasurementMsg
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [co2_ppm]
    bufferInfo = _serializer.float32(obj.co2_ppm, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CO2SensorMeasurementMsg
    let tmp;
    let len;
    let data = new CO2SensorMeasurementMsg();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [co2_ppm]
    tmp = _deserializer.float32(buffer);
    data.co2_ppm = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/CO2SensorMeasurementMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ea3141a4e89d798f2735cb324ffcd870';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Sensor measurement description
    # All vectors must have the same size
    
    Header header
    
    float32 co2_ppm
    
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

module.exports = CO2SensorMeasurementMsg;
