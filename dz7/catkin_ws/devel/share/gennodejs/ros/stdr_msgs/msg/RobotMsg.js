// Auto-generated. Do not edit!

// (in-package stdr_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let FootprintMsg = require('./FootprintMsg.js');
let LaserSensorMsg = require('./LaserSensorMsg.js');
let SonarSensorMsg = require('./SonarSensorMsg.js');
let RfidSensorMsg = require('./RfidSensorMsg.js');
let CO2SensorMsg = require('./CO2SensorMsg.js');
let SoundSensorMsg = require('./SoundSensorMsg.js');
let ThermalSensorMsg = require('./ThermalSensorMsg.js');
let KinematicMsg = require('./KinematicMsg.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class RobotMsg {
  constructor() {
    this.initialPose = new geometry_msgs.msg.Pose2D();
    this.footprint = new FootprintMsg();
    this.laserSensors = [];
    this.sonarSensors = [];
    this.rfidSensors = [];
    this.co2Sensors = [];
    this.soundSensors = [];
    this.thermalSensors = [];
    this.kinematicModel = new KinematicMsg();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RobotMsg
    // Serialize message field [initialPose]
    bufferInfo = geometry_msgs.msg.Pose2D.serialize(obj.initialPose, bufferInfo);
    // Serialize message field [footprint]
    bufferInfo = FootprintMsg.serialize(obj.footprint, bufferInfo);
    // Serialize the length for message field [laserSensors]
    bufferInfo = _serializer.uint32(obj.laserSensors.length, bufferInfo);
    // Serialize message field [laserSensors]
    obj.laserSensors.forEach((val) => {
      bufferInfo = LaserSensorMsg.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [sonarSensors]
    bufferInfo = _serializer.uint32(obj.sonarSensors.length, bufferInfo);
    // Serialize message field [sonarSensors]
    obj.sonarSensors.forEach((val) => {
      bufferInfo = SonarSensorMsg.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [rfidSensors]
    bufferInfo = _serializer.uint32(obj.rfidSensors.length, bufferInfo);
    // Serialize message field [rfidSensors]
    obj.rfidSensors.forEach((val) => {
      bufferInfo = RfidSensorMsg.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [co2Sensors]
    bufferInfo = _serializer.uint32(obj.co2Sensors.length, bufferInfo);
    // Serialize message field [co2Sensors]
    obj.co2Sensors.forEach((val) => {
      bufferInfo = CO2SensorMsg.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [soundSensors]
    bufferInfo = _serializer.uint32(obj.soundSensors.length, bufferInfo);
    // Serialize message field [soundSensors]
    obj.soundSensors.forEach((val) => {
      bufferInfo = SoundSensorMsg.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [thermalSensors]
    bufferInfo = _serializer.uint32(obj.thermalSensors.length, bufferInfo);
    // Serialize message field [thermalSensors]
    obj.thermalSensors.forEach((val) => {
      bufferInfo = ThermalSensorMsg.serialize(val, bufferInfo);
    });
    // Serialize message field [kinematicModel]
    bufferInfo = KinematicMsg.serialize(obj.kinematicModel, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RobotMsg
    let tmp;
    let len;
    let data = new RobotMsg();
    // Deserialize message field [initialPose]
    tmp = geometry_msgs.msg.Pose2D.deserialize(buffer);
    data.initialPose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [footprint]
    tmp = FootprintMsg.deserialize(buffer);
    data.footprint = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [laserSensors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [laserSensors]
    data.laserSensors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = LaserSensorMsg.deserialize(buffer);
      data.laserSensors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [sonarSensors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sonarSensors]
    data.sonarSensors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = SonarSensorMsg.deserialize(buffer);
      data.sonarSensors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [rfidSensors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rfidSensors]
    data.rfidSensors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RfidSensorMsg.deserialize(buffer);
      data.rfidSensors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [co2Sensors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [co2Sensors]
    data.co2Sensors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = CO2SensorMsg.deserialize(buffer);
      data.co2Sensors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [soundSensors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [soundSensors]
    data.soundSensors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = SoundSensorMsg.deserialize(buffer);
      data.soundSensors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [thermalSensors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [thermalSensors]
    data.thermalSensors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ThermalSensorMsg.deserialize(buffer);
      data.thermalSensors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [kinematicModel]
    tmp = KinematicMsg.deserialize(buffer);
    data.kinematicModel = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stdr_msgs/RobotMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ffa138f7f6a9c979acfb84d2c8e73a39';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Pose2D initialPose
    
    stdr_msgs/FootprintMsg footprint
    
    stdr_msgs/LaserSensorMsg[] laserSensors
    stdr_msgs/SonarSensorMsg[] sonarSensors
    stdr_msgs/RfidSensorMsg[] rfidSensors
    stdr_msgs/CO2SensorMsg[] co2Sensors
    stdr_msgs/SoundSensorMsg[] soundSensors
    stdr_msgs/ThermalSensorMsg[] thermalSensors
    
    stdr_msgs/KinematicMsg kinematicModel
    
    ================================================================================
    MSG: geometry_msgs/Pose2D
    # This expresses a position and orientation on a 2D manifold.
    
    float64 x
    float64 y
    float64 theta
    ================================================================================
    MSG: stdr_msgs/FootprintMsg
    geometry_msgs/Point[] points
    float32 radius # for circular footprints
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: stdr_msgs/LaserSensorMsg
    # Laser Sensor description
    float32 maxAngle
    float32 minAngle
    float32 maxRange
    float32 minRange
    int32 numRays
    
    stdr_msgs/Noise noise
    
    float32 frequency
    
    string frame_id
    geometry_msgs/Pose2D pose # sensor pose, relative to robot center
    
    ================================================================================
    MSG: stdr_msgs/Noise
    bool noise
    float32 noiseMean
    float32 noiseStd
    
    ================================================================================
    MSG: stdr_msgs/SonarSensorMsg
    # Rfid sensor description
    float32 maxRange
    float32 minRange
    float32 coneAngle
    
    float32 frequency
    stdr_msgs/Noise noise
    
    string frame_id
    geometry_msgs/Pose2D pose # sensor pose, relative to robot center
    
    ================================================================================
    MSG: stdr_msgs/RfidSensorMsg
    # Rfid sensor description
    float32 maxRange
    float32 angleSpan
    float32 signalCutoff
    
    float32 frequency
    
    string frame_id
    geometry_msgs/Pose2D pose # sensor pose, relative to robot center
    
    ================================================================================
    MSG: stdr_msgs/CO2SensorMsg
    # Sensor description
    
    float32 maxRange
    float32 frequency
    string frame_id
    
    # sensor pose, relative to robot center
    geometry_msgs/Pose2D pose 
    
    ================================================================================
    MSG: stdr_msgs/SoundSensorMsg
    # Sensor description
    
    float32 maxRange
    float32 frequency
    float32 angleSpan
    string frame_id
    
    # sensor pose, relative to robot center
    geometry_msgs/Pose2D pose 
    
    ================================================================================
    MSG: stdr_msgs/ThermalSensorMsg
    # Sensor description
    
    float32 maxRange
    float32 frequency
    float32 angleSpan
    string frame_id
    
    # sensor pose, relative to robot center
    geometry_msgs/Pose2D pose 
    
    ================================================================================
    MSG: stdr_msgs/KinematicMsg
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

module.exports = RobotMsg;
