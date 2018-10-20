
"use strict";

let MoveRobot = require('./MoveRobot.js')
let DeleteThermalSource = require('./DeleteThermalSource.js')
let DeleteCO2Source = require('./DeleteCO2Source.js')
let AddThermalSource = require('./AddThermalSource.js')
let RegisterGui = require('./RegisterGui.js')
let AddSoundSource = require('./AddSoundSource.js')
let AddRfidTag = require('./AddRfidTag.js')
let DeleteRfidTag = require('./DeleteRfidTag.js')
let AddCO2Source = require('./AddCO2Source.js')
let DeleteSoundSource = require('./DeleteSoundSource.js')
let LoadExternalMap = require('./LoadExternalMap.js')
let LoadMap = require('./LoadMap.js')

module.exports = {
  MoveRobot: MoveRobot,
  DeleteThermalSource: DeleteThermalSource,
  DeleteCO2Source: DeleteCO2Source,
  AddThermalSource: AddThermalSource,
  RegisterGui: RegisterGui,
  AddSoundSource: AddSoundSource,
  AddRfidTag: AddRfidTag,
  DeleteRfidTag: DeleteRfidTag,
  AddCO2Source: AddCO2Source,
  DeleteSoundSource: DeleteSoundSource,
  LoadExternalMap: LoadExternalMap,
  LoadMap: LoadMap,
};
