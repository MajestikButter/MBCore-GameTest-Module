import {
  EntityInventoryComponent,
  MinecraftEffectTypes,
  World,
} from "mojang-minecraft";
import { DimensionIds } from "../index.js";
import CommandHandler from "./commandhandler.js";
import Selector from "./selector.js";
import Vector2 from "./vector2.js";
import Scoreboard from "./scoreboard.js";

let playerIdObj = Scoreboard.get('mbcPlayerId');

export default class Player {
  /**
   * Gets the Player class for the specified player id
   * @param playerId A number or string representing the player's id or name
   * @returns A Player class representing the specified player
   */
  static get(playerId: number | string) {
    if (typeof playerId === 'string') {
      playerId = playerIdObj.get(playerId);
    }
    return new Player(playerId);
  }

  /**
   * A number representing this Player's id
   * @readonly
   */
  id: number;

  /**
   * A basic selector that refers to the player via playerId
   * @readonly
   */
  get selector() {
    let selector = new Selector(`p`);
    selector.scores = {
      mbcPlayerId: this.id,
    };
    return selector;
  }

  /**
   * The player's minecraft instance
   */
  get player() {
    if (!this.isOnline())
      throw new Error(
        "Unable to grab this player's minecraft instance, the player is not online"
      );

    CommandHandler.run(
      `effect ${this.selector.toString()} fatalPoison 1 124 true`
    );
    let player = World.getPlayers().find(
      (v) => v.getEffect(MinecraftEffectTypes.fatalPoison).amplifier === 124
    );
    if (player)
      CommandHandler.run(
        `effect ${this.selector.toString()} fatalPoison 0 0 true`
      );
    return player;
  }

  /**
   * The dimension the player is currently in
   * @readonly
   */
  get dimension() {
    const dimensions: DimensionIds[] = [
      "overworld",
      "the end",
      "nether",
    ];
    for (let i = 0; i < 3; i++) {
      let dimension = World.getDimension(dimensions[i]);

      let selector = this.selector;
      selector.range = new Vector2(0, 1000000);

      let cmd = CommandHandler.run(`testfor ${selector.toString()}`, dimension);

      if (!cmd.error) {
        return { name: dimensions[i], dimension };
      }
    }
  }

  /**
   * The player's inventory
   * @readonly
   */
  get inventory() {
    throw new Error("Disabled, waiting for inventory access");
    let inv: EntityInventoryComponent = this.player.getComponent("inventory");
    return inv;
  }

  /**
   * Checks whether the player is online or not
   * @returns A boolean representing whether the player is online or not
   */
  isOnline() {
    return !CommandHandler.run(`testfor ${this.selector.toString()}`).error;
  }

  /**
   * Checks whether the player is alive or not
   * @returns A boolean representing whether the player is alive or not
   */
  isAlive() {
    let selector = new Selector("e");
    selector.type = "player";
    selector.scores = {
      mbcPlayerId: this.id,
    };

    return !CommandHandler.run(`testfor ${selector.toString()}`).error;
  }

  /**
   * Sends a message to the player
   * @param msg The message to send
   */
  sendMsg(msg: string) {
    this.executeCommand(
      `tellraw @s {"rawtext":[{"text":${JSON.stringify(msg)}}]}`
    );
  }

  /**
   * Executes a command as the player
   * @param cmd The command to execute
   * @returns The result of the execute command
   */
  executeCommand(cmd: string) {
    return CommandHandler.run(`execute ${this.selector} ~~~ ${cmd}`);
  }

  private constructor(id: number) {
    this.id = id;
  }
}
