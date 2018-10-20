// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Noise {
  constructor() {
    this.noise = false;
    this.noiseMean = 0.0;
    this.noiseStd = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Noise
    // Serialize message field [noise]
    bufferInfo = _serializer.bool(obj.noise, bufferInfo);
    // Serialize message field [noiseMean]
    bufferInfo = _serializer.float32(obj.noiseMean, bufferInfo);
    // Serialize message field [noiseStd]
    bufferInfo = _serializer.float32(obj.noiseStd, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Noise
    let tmp;
    let len;
    let data = new Noise();
    // Deserialize message field [noise]
    tmp = _deserializer.bool(buffer);
    data.noise = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [noiseMean]
    tmp = _deserializer.float32(buffer);
    data.noiseMean = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [noiseStd]
    tmp = _deserializer.float32(buffer);
    data.noiseStd = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/Noise';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a882ac96256e87f019f2655e9d7f0f81';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool noise
    float32 noiseMean
    float32 noiseStd
    
    `;
  }

};

module.exports = Noise;
