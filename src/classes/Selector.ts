import { Vector2, Vector3 } from "gametest-maths";
import { world } from "mojang-minecraft";
import { Gamemode } from "../types/Gamemode.js";
import { SelectorType } from "../types/SelectorType.js";
import { CommandHandler } from "./CommandHandler.js";

export class Selector {
  /**
   * The type of selector; a for all players, e for entity,
   * r for random player (or entity if type is supplied), p for nearest player,
   * s for self or executor, c for player's agent, initiator for player interacting with npc
   */
  selectorType: SelectorType;

  /**
   * Ignore or target specific entity identifiers
   */
  type: string;
  /**
   * Ignore or target specific entity names
   */
  name: string;
  /**
   * Include up to x amount of entities
   */
  count: number;

  /**
   * Look for a player with a level within the provided range
   */
  level: Vector2;
  /**
   * Look for a player that is not the provided gamemode
   */
  gamemode: Gamemode;

  /**
   * Look for an entity within a specified range of a point
   */
  range: Vector2;
  /**
   * Specify where to start picking entities from
   */
  pos: Vector3;

  /**
   * Look for an entity with specific y rotation values
   */
  rotY: Vector2;
  /**
   * Look for an entity with specific x rotation values
   */
  rotX: Vector2;

  /**
   * Look for an entity within a set volume of space
   */
  volume: Vector3;

  /**
   * Look for an entity with or without specific families
   */
  families: string[] | `!${string}`[];
  /**
   * Look for an entity with or without specific tags
   */
  tags: string[] | `!${string}`[];
  /**
   * Look for an entity that has the provided scores within the provided values
   */
  scores: {
    [objective: string]:
      | Vector2
      | number
      | `!${number}`
      | `!${number}..${number}`;
  };

  /**
   *
   * @param dimension
   * @returns
   */
  results(dimension = world.getDimension("overworld")): string[] {
    return (
      CommandHandler.run(`testfor ${this.toString()}`, dimension).result
        .victim ?? []
    );
  }

  /**
   *
   * @param dimension
   * @returns
   */
  eval(dimension = world.getDimension("overworld")) {
    return this.results(dimension).length > 0;
  }

  toString() {
    let str = "";

    str += this.type ? `type=${this.type},` : "";
    str += this.name ? `name="${this.name}",` : "";
    str += this.count ? `c=${this.count},` : "";

    if (this.level) {
      str += this.level.x ? `lm=${this.level.x},` : "";
      str += this.level.y ? `l=${this.level.y},` : "";
    }
    str += this.gamemode ? `m=${this.gamemode},` : "";

    if (this.range) {
      str += this.range.x ? `rm=${this.range.x},` : "";
      str += this.range.y ? `r=${this.range.y},` : "";
    }

    if (this.pos) {
      str += this.pos.x ? `x=${this.pos.x},` : "";
      str += this.pos.y ? `y=${this.pos.y},` : "";
      str += this.pos.z ? `z=${this.pos.z},` : "";
    }

    if (this.rotX) {
      str += this.rotX.x ? `rxm=${this.rotX.x},` : "";
      str += this.rotX.y ? `rx=${this.rotX.y},` : "";
    }

    if (this.rotY) {
      str += this.rotY.x ? `rym=${this.rotY.x},` : "";
      str += this.rotY.y ? `ry=${this.rotY.y},` : "";
    }

    if (this.volume) {
      str += this.volume.x ? `dx=${this.volume.x},` : "";
      str += this.volume.y ? `dy=${this.volume.y},` : "";
      str += this.volume.z ? `dz=${this.volume.z},` : "";
    }

    if (this.families) {
      this.families.forEach((v) => (str += `family="${v}",`));
    }

    if (this.tags) {
      this.tags.forEach((v) => (str += `tag="${v}",`));
    }

    if (this.scores) {
      let scoreStr = `scores={`;
      for (let k in this.scores) {
        scoreStr += `${k}=`;
        let score = this.scores[k];
        if (score instanceof Vector2) scoreStr += `${score.x}..${score.y}`;
        else if (typeof score === "number") scoreStr += `${score}`;
        else scoreStr += score;

        scoreStr += ",";
      }
      scoreStr = scoreStr.slice(0, scoreStr.length - 1);
      str += `${scoreStr}},`;
    }

    if (str) str = str.slice(0, str.length - 1);
    let target = `@${this.selectorType}`;
    return str ? `${target}[${str}]` : target;
  }

  constructor(type: SelectorType) {
    this.selectorType = type;
  }
}
