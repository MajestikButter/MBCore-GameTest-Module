import {
  EntityInventoryComponent,
  world,
  BlockRaycastOptions,
  EntityRaycastOptions,
  Player,
  EntityQueryOptions,
  Vector,
  EntityHealthComponent,
  MinecraftEffectTypes,
  ExplosionOptions,
} from "mojang-minecraft";
import { Vector3, Vector2 } from "gametest-maths";

import { CommandHandler } from "./CommandHandler.js";
import { Selector } from "./Selector.js";
import { CommandResult } from "../types/CommandResult.js";
import { UID } from "./UID.js";
import { DimensionIds } from "../types/DimensionIds.js";

export class MBCPlayer {
  private static instances = new Map<string, MBCPlayer>();

  /**
   * Gets the MBCPlayer class for the specified player uid
   * @param uid A string representing the player's uid
   * @returns An MBCPlayer class representing the specified player
   */
  static getByUID(uid: string) {
    if (this.instances.has(uid)) return this.instances.get(uid);
    const plr = new this(uid);
    this.instances.set(uid, plr);
    return plr;
  }
  
  /**
   * Gets the MBCPlayer class for the specified player name
   * @param name A string representing the player's name
   * @returns An MBCPlayer class representing the specified player
   */
   static getByName(name: string) {
    for (let inst of this.instances.values()) {
      if (inst.name === name) return inst;
    }
  }
  
  /**
   * Gets the MBCPlayer class for the specified player name
   * @param player A Player class representing the target player
   * @returns An MBCPlayer class representing the specified player
   */
   static getByPlayer(player: Player) {
    return this.getByUID(UID.getUID(player));
  }

  static getOnline(): MBCPlayer[] {
    const res = CommandHandler.run("list");

    if (res.error) return [];

    return res.result.players
      .split(", ")
      .map((v: string) => {
        const p = this.getByName(v);
        return p.isOnline() ? p : undefined;
      })
      .filter((v: MBCPlayer) => v);
  }

  private _uid: string;

  /**
   * A string representing this Player's uid
   * @readonly
   */
  get uid() {
    return this._uid
  }

  /**
   * A string representing this Player's name
   * @readonly
   */
  get name() {
    return this.player.name;
  }

  /**
   * The player's minecraft instance
   */
  get player() {
    if (!this.isAlive())
      throw new Error(
        "Unable to grab this player's minecraft instance, the player is not alive or loaded"
      );
    
    const o = new EntityQueryOptions();
    o.tags = [UID.createTag(this.uid)];
    let player = world.getPlayers(o)[Symbol.iterator]().next().value;
    if (!player) return;
    return player as Player;
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
   * @readonly
   */
  get dimensionId() {
    return this.dimension.id as DimensionIds;
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
   * The player's position Vector3
   * @readonly
   */
  get position() {
    return new Vector3(this.player.location);
  }

  /**
   * The player's velocity Vector3
   * @readonly
   */
  get velocity() {
    return new Vector3(this.player.velocity);
  }
  
  private _prevVel = new Vector3();
  /**
   * The player's velocity Vector3 during the last tick
   * @readonly
   */
   get prevVelocity() {
    return this._prevVel;
  }

  /**
   * Gets a direction Vector3 based on the player's facing direction
   * @returns Normalized Direction Vector3
   * @throws If command fails to return position (may be due to unloaded chunks)
   * @deprecated Use `player.viewVector` instead
   */
  getDirectionVectors() {
    const r = this.executeCommand(
      `summon mbc:jsonrequest "$JSONRequest:{\\"channel\\":\\"\\"}" ^^^1`
    );
    if (r.error) {
      throw new Error("Failed to get direction vectors");
    }

    let dirVec = new Vector3(r.result.spawnPos);
    dirVec.sub(this.position).normalize();

    return { origin: this.position, direction: dirVec };
  }

  /**
   * Gets the player's current rotation based on the direction vector.
   * Fetches current direction vector if none is supplied.
   * @returns A Vector2 containing the rotation in degrees
   */
  getRotation(dir = this.player.viewVector) {
    const conv = 180 / Math.PI;
    return new Vector2(
      Math.asin(-dir.y) * conv,
      Math.atan2(-dir.x, dir.z) * conv
    );
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
    const eTags = this.getTags();
    eTags.forEach((v) => {
      if (!tags.includes(v)) this.player.removeTag(v);
    });
    tags.forEach((v) => {
      if (!eTags.includes(v)) this.player.addTag(v);
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
    let selector = this.toSelector();
    selector.selectorType = 'e';
    selector.type = "player";

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
  executeCommand(cmd: string): CommandResult {
    try {
      return {
        result: this.player.runCommand(cmd),
        error: false,
      };
    } catch (err) {
      try {
        var result = JSON.parse(err)
      } catch (err2) {
        throw err;
      }
      return {
        result,
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
        `tp @s ${pos.x} ${pos.y} ${pos.z} ${rot.y} ${rot.x}`
      );
    else
      return this.executeCommand(
        `tp @s ${pos.x} ${pos.y} ${pos.z} facing ${rot.x} ${rot.y} ${rot.z}`
      );
  }

  setVelocity(velocity: Vector) {
    velocity = Vector.add(velocity, new Vector(0, -1, 0));

    const p = this.player;
    const h = p.getComponent("health") as EntityHealthComponent;
    const hp = h.current;
    p.addEffect(MinecraftEffectTypes.instantHealth, 1, 255);
    h.resetToMaxValue();

    const e = new ExplosionOptions();
    e.breaksBlocks = false;
    e.source = this.dimension.spawnEntity('mbc:cancel', this.player.location);

    p.setVelocity(velocity);
    p.dimension.createExplosion(p.location, 0.05, e);

    p.runCommand("effect @s instant_health 0 0 true");
    if (h.current >= 0) h.setCurrent(hp);
  }

  /**
   * A basic selector that refers to the player via uid
   */
  toSelector() {
    let selector = new Selector("p");
    selector.tags = [UID.createTag(this.uid)]
    return selector;
  }

  private constructor(uid: string) {
    this._uid = uid;

    world.events.tick.subscribe(() => {
      this._prevVel = this.velocity;
    });
  }
}
