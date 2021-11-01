import {
  EntityInventoryComponent,
  MinecraftEffectTypes,
  World,
} from "mojang-minecraft";
import DimensionIds from "../types/dimensionids.js";
import CommandHandler from "./commandhandler.js";
import Selector from "./selector.js";
import Vector2 from "./vector2.js";
import Scoreboard from "./scoreboard.js";
import Vector3 from "./vector3.js";

let playerIdObj = Scoreboard.initialize("mbcPlayerId");

export default class Player {
  /**
   * Gets the Player class for the specified player id
   * @param playerId A number or string representing the player's id or name
   * @returns A Player class representing the specified player
   */
  static get(playerId: number | string) {
    if (typeof playerId === "string") {
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
    let selector = new Selector(`a`);
    selector.scores = {
      mbcPlayerId: this.id,
    };
    return selector;
  }

  /**
   * The player's minecraft instance
   */
  get player() {
    if (!this.isAlive())
      throw new Error(
        "Unable to grab this player's minecraft instance, the player is not alive or loaded"
      );

    CommandHandler.run(
      `effect ${this.selector.toString()} fatal_poison 1 124 true`
    );
    let player = World.getPlayers().find((v) => {
      let eff = v.getEffect(MinecraftEffectTypes.fatalPoison);
      return eff && eff.amplifier === 124;
    });
    if (player)
      CommandHandler.run(
        `effect ${this.selector.toString()} fatal_poison 0 0 true`
      );
    return player;
  }

  /**
   * The dimension the player is currently in
   * @readonly
   */
  get dimension() {
    if (!this.isOnline())
      throw new Error(
        "Unable to grab this player's dimension, the player is not online"
      );

    const dimensions: DimensionIds[] = ["overworld", "the end", "nether"];
    for (let i = 0; i < 3; i++) {
      let dimension = World.getDimension(dimensions[i]);

      let selector = this.selector;
      selector.range = new Vector2(0.01, 0);

      let cmd = CommandHandler.run(`testfor ${selector.toString()}`, dimension);

      if (!cmd.error) {
        return { name: dimensions[i], dimension };
      }
    }

    throw new Error("This player is not currently in a dimension");
  }

  /**
   * The player's inventory
   * @readonly
   */
  get inventory() {
    let inv: EntityInventoryComponent = this.player.getComponent("inventory");
    return inv;
  }

  /**
   * Gets the player's tags
   * @returns An array of the player's tags
   */
  getTags(): string[] {
    if (!this.isOnline())
      throw new Error("This player is not currently online");
    return CommandHandler.run(`tag ${this.selector} list`)
      .result.statusMessage.match(/ §a.*?§r/g)
      .map((v: string) => v.slice(3, -2));
  }
  /**
   * Sets the player's tags
   * @param tags An array of the player's tags
   */
  setTags(tags: string[]) {
    this.getTags().forEach((v) => {
      CommandHandler.run(`tag ${this.selector} remove "${v}"`);
    });
    tags.forEach((v) => {
      CommandHandler.run(`tag ${this.selector} add "${v}"`);
    });
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

  /**
   * Teleport player to a position
   * @param pos Position to teleport to
   */
  teleport(pos: Vector3, rot?: Vector2 | Vector3) {
    if (!rot) return this.executeCommand(`tp @s ${pos.x} ${pos.y} ${pos.z}`);

    if (rot instanceof Vector2)
      return this.executeCommand(
        `tp @s ${pos.x} ${pos.y} ${pos.z} ${rot.x} ${rot.y}`
      );
    else
      return this.executeCommand(
        `tp @s ${pos.x} ${pos.y} ${pos.z} facing ${rot.x} ${rot.y} ${rot.z}`
      );
  }

  private constructor(id: number) {
    this.id = id;
  }
}
