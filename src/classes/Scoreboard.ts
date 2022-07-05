import { CommandHandler } from "./CommandHandler.js";
import { Selector } from "./Selector.js";
import { Target } from "../types/Target.js";
import { Entity, Player, world } from "mojang-minecraft";

function targetToSelectorStr(target: string | Selector) {
  return typeof target === "string"
    ? target
    : target.toString()
}

export class Scoreboard {
  /**
   * Checks if a Scoreboard has already been created
   * @param id An id used as the name of the objective
   * @returns A boolean representing whether the Scoreboard is created or not
   */
  static exists(id: string) {
    let result = CommandHandler.run(`scoreboard objectives add ${id} dummy`);
    if (!result.error) {
      CommandHandler.run(`scoreboard objectives remove ${id}`);
      return false;
    }
    return true;
  }

  /////////////////
  //
  //
  /////////////////
  //
  //
  /////////////////

  private _id: string;
  /**
   * A string representing the objective's name
   * @readonly
   */
  get id() {
    return this._id;
  }

  get objective() {
    return world.scoreboard.getObjective(this.id);
  }

  /**
   * Adds the specified amount to the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @param val The amount to add
   */
  add(target: Target, val: number) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      return !CommandHandler.run(
        `scoreboard players add ${selectorStr} ${this.id} ${val}`
      ).error;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players add @s ${this.id} ${val}`);
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Subtracts the specified amount to the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @param val The amount to subtract
   * @returns A boolean representing whether the operation was successful
   */
   sub(target: Target, val: number) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      return !CommandHandler.run(
        `scoreboard players remove ${selectorStr} ${this.id} ${val}`
      ).error;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players remove @s ${this.id} ${val}`);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Resets the score for the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @returns A boolean representing whether the operation was successful
   */
  reset(target: Target) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      return !CommandHandler.run(`scoreboard players reset ${selectorStr} ${this.id}`).error;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players reset @s ${this.id}`);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Sets the provided target to the specified amount on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @param val The amount to set to
   * @returns A boolean representing whether the operation was successful
   */
  set(target: Target, val: number) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      return !CommandHandler.run(
        `scoreboard players set ${selectorStr} ${this.id} ${val}`
      ).error;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players set @s ${this.id} ${val}`);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Gets the score of the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   */
  get(target: Target) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      let cmd = CommandHandler.run(
        `scoreboard players test ${selectorStr} ${this.id} * *`
      );
  
      if (cmd.error) return 0;
  
      let result = cmd.result.statusMessage.match(/(?:\d+)/);
      return result ? parseInt(result[0]) : 0;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      try {
        let result = target.runCommand(`scoreboard players test @s ${this.id} * *`).statusMessage.match(/(?:\d+)/);
        return result ? parseInt(result[0]) : 0;
      } catch {
        return 0;
      }
    } catch {
      return 0;
    }
  }

  /**
   * Creates a new Scoreboard class
   * @param id Identifier of the Objective
   * @param displayName String to be used as the display name of the objective. Note: This will only be applied if the objective does not already exist
   */
  constructor(id: string, displayName = "") {
    this._id = id;

    CommandHandler.run(
      `scoreboard objectives add ${id} dummy ${displayName}`
    );
  }
}
