import { World } from "mojang-minecraft";
import Gamemode from "../types/gamemode.js";
import CommandHandler from "./commandhandler.js";
import Vector2 from "./vector2.js";
import Vector3 from "./vector3.js";

type SelectorType = "a" | "e" | "r" | "p" | "s" | "c" | "initiator";
export default class Selector {
  selectorType: SelectorType;

  type: string;
  name: string;
  count: number;

  level: Vector2;
  gamemode: Gamemode;

  range: Vector2;
  pos: Vector3;

  rotY: Vector2;
  rotX: Vector2;

  volumeX: number;
  volumeY: number;
  volumeZ: number;

  families: string[];
  tags: string[];
  scores: {
    [objective: string]: Vector2 | number;
  };

  /**
   *
   * @param dimension
   * @returns
   */
  eval(dimension = World.getDimension("overworld")) {
    return !CommandHandler.run(`testfor ${this.toString()}`).error;
  }

  toString() {
    let str = "";

    str += this.type ? `type=${this.type},` : "";
    str += this.name ? `name=${this.name},` : "";
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

    str += this.volumeX ? `dx=${this.volumeX},` : "";
    str += this.volumeY ? `dy=${this.volumeY},` : "";
    str += this.volumeZ ? `dz=${this.volumeZ},` : "";

    if (this.families) {
      this.families.forEach((v) => (str += `${v},`));
    }

    if (this.tags) {
      this.tags.forEach((v) => (str += `${v},`));
    }

    if (this.scores) {
      let scoreStr = `scores={`;
      for (let k in this.scores) {
        scoreStr += `${k}=`;
        let score = this.scores[k];
        if (score instanceof Vector2) {
          scoreStr += `${score.x}..${score.y}`;
        } else scoreStr += score.toString();
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
