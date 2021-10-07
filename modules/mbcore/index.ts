////////////////////////////
// MBCore GameTest Module
// V 1.0.0
//
// By: MajestikButter
////////////////////////////

import CommandHandler from "./classes/commandhandler.js";
import DataSave from "./classes/datasave.js";
import DimensionIds from "./types/dimensionids.js";
import EventEmitter from "./classes/eventemitter.js";
import Events from "./classes/events.js";
import Gamemode from "./types/gamemode.js";
import JSONRequest from "./classes/jsonrequest.js";
import Player from "./classes/player.js";
import Registry from "./classes/registry.js";
import Scoreboard from "./classes/scoreboard.js";
import Selector from "./classes/selector.js";
import Vector2 from "./classes/vector2.js";
import Vector3 from "./classes/vector3.js";

import {
  clearTickInterval,
  setTickInterval,
} from "./functions/tickinterval.js";
import { clearTickTimeout, setTickTimeout } from "./functions/ticktimeout.js";

import "./ticked/index.js";

export {
  CommandHandler,
  DataSave,
  DimensionIds,
  EventEmitter,
  Events,
  Gamemode,
  JSONRequest,
  Player,
  Registry,
  Scoreboard,
  Selector,
  Vector2,
  Vector3,
  clearTickInterval,
  setTickInterval,
  clearTickTimeout,
  setTickTimeout,
};

console.warn("§l§aLoading §bMBCore Module v0.0.1");
