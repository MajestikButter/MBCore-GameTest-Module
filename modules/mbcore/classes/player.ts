import {
  EntityInventoryComponent,
  MinecraftEffectTypes,
  world,
  BlockRaycastOptions,
  EntityRaycastOptions,
  Player,
} from "mojang-minecraft";
import * as uuid from "../libraries/uuid.js";
import CommandHandler from "./commandhandler.js";
import Selector from "./selector.js";
import Vector2 from "./vector2.js";
import Scoreboard from "./scoreboard.js";
import Vector3 from "./vector3.js";
import DimensionIds from "../types/dimensionids.js";
import JSONRequest from "./jsonrequest.js";

let playerIdObj = Scoreboard.initialize("mbcPlayerId");

const directionRequests = new Map<
  string,
  (value: { direction: Vector3; origin: Vector3 }) => void
>();

export default class MBCPlayer {
  /**
   * Gets the Player class for the specified player id
   * @param playerId A number or string representing the player's id or name
   * @returns A Player class representing the specified player
   */
  static get(playerId: number | string | Player) {
    if (typeof playerId === "string") {
      playerId = playerIdObj.get(playerId);
    } else if (playerId instanceof Player) {
      playerId = playerIdObj.get(`"${playerId.nameTag}"`);
    }
    return new this(playerId);
  }

  /**
   * A number representing this Player's id
   * @readonly
   */
  id: number;

  /**
   * The player's minecraft instance
   */
  get player() {
    if (!this.isAlive())
      throw new Error(
        "Unable to grab this player's minecraft instance, the player is not alive or loaded"
      );

    CommandHandler.run(
      `effect ${this.toSelector().toString()} fatal_poison 1 124 true`
    );
    let player = world.getPlayers().find((v) => {
      let eff = v.getEffect(MinecraftEffectTypes.fatalPoison);
      return eff && eff.amplifier === 124;
    });
    if (player)
      CommandHandler.run(
        `effect ${this.toSelector().toString()} fatal_poison 0 0 true`
      );
    return player;
  }

  /**
   * The dimension the player is currently in
   * @readonly
   */
  get dimension() {
    return this.player.dimension;
  }

  /**
   * The name of the dimension the player is currently in
   */
  get dimensionId() {
    if (!this.isOnline())
      throw new Error(
        "Unable to grab this player's dimension, the player is not online"
      );

    const dimensions: DimensionIds[] = ["overworld", "the end", "nether"];
    for (let i = 0; i < 3; i++) {
      let dimension = world.getDimension(dimensions[i]);

      let selector = this.toSelector();
      selector.range = new Vector2(0.01, 0);

      let cmd = CommandHandler.run(`testfor ${selector.toString()}`, dimension);

      if (!cmd.error) {
        return dimensions[i];
      }
    }

    throw new Error("Unable to gab this player's dimension");
  }

  /**
   * The player's inventory
   * @readonly
   */
  get inventory() {
    let inv = this.player.getComponent("inventory") as EntityInventoryComponent;
    return inv;
  }

  /**
   *
   */
  getDirectionVectors() {
    return new Promise<{ direction: Vector3; origin: Vector3 }>((resolve) => {
      let id = uuid.v4();
      directionRequests.set(id, resolve);

      this.executeCommand(
        `summon mbc:jsonrequest "$JSONRequest:${JSON.stringify(
          JSON.stringify({
            channel: "getPlayerDirectionVector",
            id,
            plrPos: Vector3.fromLocation(this.player.location).toJSON(),
          })
        ).slice(1, -1)}" ^^^1`
      );
    });
  }

  /**
   * The block the player is currently looking at
   */
  getTargetBlock(raycastParams?: BlockRaycastOptions) {
    return this.player.getBlockFromViewVector(raycastParams);
  }

  /**
   * The entity the player is currently looking at
   */
  getTargetEntity(raycastParams?: EntityRaycastOptions) {
    return this.player.getEntitiesFromViewVector(raycastParams)[0];
  }

  /**
   * Gets the player's tags
   * @returns An array of the player's tags
   */
  getTags(): string[] {
    return this.player.getTags();
  }
  /**
   * Sets the player's tags
   * @param tags An array of the player's tags
   */
  setTags(tags: string[]) {
    this.getTags().forEach((v) => {
      this.player.removeTag(v);
    });
    tags.forEach((v) => {
      this.player.addTag(v);
    });
  }

  /**
   * Checks whether the player is online or not
   * @returns A boolean representing whether the player is online or not
   */
  isOnline() {
    return this.toSelector().eval();
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
  sendMessage(msg: string) {
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
    try {
      return {
        result: this.player.runCommand(
          `execute ${this.toSelector()} ~~~ ${cmd}`
        ),
        error: false,
      };
    } catch (err) {
      return {
        result: err,
        error: true,
      };
    }
  }

  /**
   * Teleport player to a position
   * @param pos Position to teleport to
   */
  teleport(pos: Vector3): ReturnType<typeof this.executeCommand>;
  /**
   * Teleport player to a position and set rotation
   * @param pos Position to teleport to
   * @param rot Rotation to set to
   */
  teleport(pos: Vector3, rot: Vector2): ReturnType<typeof this.executeCommand>;
  /**
   * Teleport player to a position and face a position
   * @param pos Position to teleport to
   * @param facePos Position to face
   */
  teleport(
    pos: Vector3,
    facePos: Vector3
  ): ReturnType<typeof this.executeCommand>;
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

  /**
   * A basic selector that refers to the player via playerId
   */
  toSelector() {
    let selector = new Selector(`a`);
    selector.scores = {
      mbcPlayerId: this.id,
    };
    return selector;
  }

  private constructor(id: number) {
    this.id = id;
  }
}

JSONRequest.on("getPlayerDirectionVector", (evd) => {
  let dirCalcVec = Vector3.fromLocation(evd.orgEvd.source.location);
  let plrPos = Vector3.fromObject(evd.request.plrPos);
  let dirVec = dirCalcVec.subtract(plrPos).normalize();

  directionRequests.get(evd.request.id)({ origin: plrPos, direction: dirVec });
  directionRequests.delete(evd.request.id);
});
