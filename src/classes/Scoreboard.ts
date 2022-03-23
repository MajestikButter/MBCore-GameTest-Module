import { CommandHandler } from "./CommandHandler.js";
import { Selector } from "./Selector.js";
import { Target } from "../types/Target.js";
import { Entity, Player } from "mojang-minecraft";

function targetToSelectorStr(target: string | Selector) {
  return typeof target === "string"
    ? target
    : target.toString()
}

export class Scoreboard {
  /**
   * Property containing all initialized Scoreboards
   */
  static scoreboards: { [id: string]: Scoreboard } = {};

  /**
   * Initializes a Scoreboard to be able to be used in scripts
   * @param id An id used as the name of the objective
   * @param displayName An optional display name used while creating the objective, ignored if the objective already exists
   * @returns A Scoreboard with the provided id
   */
  static initialize(id: string, displayName?: string) {
    if (this.initialized(id))
      throw new Error(`Scoreboard with id ${id} is already initialized`);

    if (!this.exists(id)) this.create(id);

    this.scoreboards[id] = new Scoreboard(id);
    return this.scoreboards[id];
  }

  /**
   * Creates an Objective
   * @param id An id used as the name of the objective
   * @param displayName An optional display name used while creating the objective
   */
  private static create(id: string, displayName?: string) {
    if (this.exists(id))
      return new Error(`Scoreboard with id ${id} already exists`);

    CommandHandler.run(
      `scoreboard objectives add ${id} dummy ${displayName ?? ""}`
    );
  }

  /**
   * Gets the Scoreboard for the provided id
   * @param id An id used as the name of the objective
   * @returns A Scoreboard with the provided id
   */
  static get(id: string) {
    if (!this.initialized(id)) {
      throw new Error(`No Scoreboard with the id ${id} is initialized`);
    }
    return this.scoreboards[id];
  }

  /**
   * Checks if a Scoreboard has already been initialized
   * @param id An id used as the name of the objective
   * @returns A boolean representing whether the Scoreboard is initialized or not
   */
  static initialized(id: string) {
    return this.scoreboards[id] ? true : false;
  }

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

  /**
   * Adds the specified amount to the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @param val The amount to add
   */
  add(target: Target, val: number) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      CommandHandler.run(
        `scoreboard players add ${selectorStr} ${this.id} ${val}`
      );
      return;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players add @s ${this.id} ${val}`);
    } catch {}
  }
  
  /**
   * Subtracts the specified amount to the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @param val The amount to subtract
   */
   sub(target: Target, val: number) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      CommandHandler.run(
        `scoreboard players remove ${selectorStr} ${this.id} ${val}`
      );
      return;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players remove @s ${this.id} ${val}`);
    } catch {}
  }

  /**
   * Resets the score for the provided target on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   */
  reset(target: Target) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      CommandHandler.run(`scoreboard players reset ${selectorStr} ${this.id}`);
      return;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players reset @s ${this.id}`);
    } catch {}
  }

  /**
   * Sets the provided target to the specified amount on this Scoreboard
   * @param target A Selector, Player, Entity or string representing the target
   * @param val The amount to set to
   */
  set(target: Target, val: number) {
    if (target instanceof Selector || typeof target === 'string') {
      let selectorStr = targetToSelectorStr(target);
      CommandHandler.run(
        `scoreboard players set ${selectorStr} ${this.id} ${val}`
      );
      return;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      target.runCommand(`scoreboard players set @s ${this.id} ${val}`);
    } catch {}
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
  
      let result = cmd.result.statusMessage.match(/(?:\d...)/);
      return result ? parseInt(result[0]) : 0;
    }

    if (!(target instanceof Entity) && !(target instanceof Player)) target = target.player
    try {
      try {
        let result = target.runCommand(`scoreboard players test @s ${this.id} * *`).statusMessage.match(/(?:\d...)/);
        return result ? parseInt(result[0]) : 0;
      } catch {
        return 0;
      }
    } catch {}
  }

  private constructor(id: string) {
    this._id = id;
  }
}
