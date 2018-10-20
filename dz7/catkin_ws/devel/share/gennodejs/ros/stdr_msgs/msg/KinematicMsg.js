// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class KinematicMsg {
  constructor() {
    this.type = '';
    this.a_ux_ux = 0.0;
    this.a_ux_uy = 0.0;
    this.a_ux_w = 0.0;
    this.a_uy_ux = 0.0;
    this.a_uy_uy = 0.0;
    this.a_uy_w = 0.0;
    this.a_w_ux = 0.0;
    this.a_w_uy = 0.0;
    this.a_w_w = 0.0;
    this.a_g_ux = 0.0;
    this.a_g_uy = 0.0;
    this.a_g_w = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type KinematicMsg
    // Serialize message field [type]
    bufferInfo = _serializer.string(obj.type, bufferInfo);
    // Serialize message field [a_ux_ux]
    bufferInfo = _serializer.float32(obj.a_ux_ux, bufferInfo);
    // Serialize message field [a_ux_uy]
    bufferInfo = _serializer.float32(obj.a_ux_uy, bufferInfo);
    // Serialize message field [a_ux_w]
    bufferInfo = _serializer.float32(obj.a_ux_w, bufferInfo);
    // Serialize message field [a_uy_ux]
    bufferInfo = _serializer.float32(obj.a_uy_ux, bufferInfo);
    // Serialize message field [a_uy_uy]
    bufferInfo = _serializer.float32(obj.a_uy_uy, bufferInfo);
    // Serialize message field [a_uy_w]
    bufferInfo = _serializer.float32(obj.a_uy_w, bufferInfo);
    // Serialize message field [a_w_ux]
    bufferInfo = _serializer.float32(obj.a_w_ux, bufferInfo);
    // Serialize message field [a_w_uy]
    bufferInfo = _serializer.float32(obj.a_w_uy, bufferInfo);
    // Serialize message field [a_w_w]
    bufferInfo = _serializer.float32(obj.a_w_w, bufferInfo);
    // Serialize message field [a_g_ux]
    bufferInfo = _serializer.float32(obj.a_g_ux, bufferInfo);
    // Serialize message field [a_g_uy]
    bufferInfo = _serializer.float32(obj.a_g_uy, bufferInfo);
    // Serialize message field [a_g_w]
    bufferInfo = _serializer.float32(obj.a_g_w, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type KinematicMsg
    let tmp;
    let len;
    let data = new KinematicMsg();
    // Deserialize message field [type]
    tmp = _deserializer.string(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_ux_ux]
    tmp = _deserializer.float32(buffer);
    data.a_ux_ux = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_ux_uy]
    tmp = _deserializer.float32(buffer);
    data.a_ux_uy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_ux_w]
    tmp = _deserializer.float32(buffer);
    data.a_ux_w = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_uy_ux]
    tmp = _deserializer.float32(buffer);
    data.a_uy_ux = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_uy_uy]
    tmp = _deserializer.float32(buffer);
    data.a_uy_uy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_uy_w]
    tmp = _deserializer.float32(buffer);
    data.a_uy_w = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_w_ux]
    tmp = _deserializer.float32(buffer);
    data.a_w_ux = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_w_uy]
    tmp = _deserializer.float32(buffer);
    data.a_w_uy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_w_w]
    tmp = _deserializer.float32(buffer);
    data.a_w_w = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_g_ux]
    tmp = _deserializer.float32(buffer);
    data.a_g_ux = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_g_uy]
    tmp = _deserializer.float32(buffer);
    data.a_g_uy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a_g_w]
    tmp = _deserializer.float32(buffer);
    data.a_g_w = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/KinematicMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '75d30a9f55f18dd9353f0abaabfaf261';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Container for the kinematic model parameters. The parameters selected/
    # are quite general. For a more accurate motion model a per-kinematic model
    # approach should be followed.
    # Parameters are in the form a_C_D, where C is affected by D.
    # ux is the linear speed
    # uy is the lateral speed (for omni vehicles)
    # w is the angular speed
    # g is a cofficient that directly affects the angular speed
    # For more information check the MotionController::sampleVelocities function.
    
    string type
    float32 a_ux_ux
    float32 a_ux_uy
    float32 a_ux_w
    float32 a_uy_ux
    float32 a_uy_uy
    float32 a_uy_w
    float32 a_w_ux
    float32 a_w_uy
    float32 a_w_w
    float32 a_g_ux
    float32 a_g_uy
    float32 a_g_w
    
    `;
  }

};

module.exports = KinematicMsg;
