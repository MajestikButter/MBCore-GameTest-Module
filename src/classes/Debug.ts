import { Vector3 } from "gametest-maths";
import { world } from "mojang-minecraft";
import { MinecraftParticles } from "../enums/MinecraftParticles.js";
import { CommandHandler } from "./CommandHandler.js";

/**
 * Change the outputs of specific console functions;
 * To enable chat log ingame, run `/tag @s add devLog`
 */
export class Debug {
  /**
   * @throws
   */
  constructor() {
    throw new Error("Cannot create instance of this class");
  }

  /**
   * Make console.log() output to chat
   * @default true
   */
  static outputConsoleLogToChat = true;
  /**
   * Make console.warn() output to chat
   * @default true
   */
  static outputConsoleWarnToChat = true;
  /**
   * Make console.error() output to chat
   * @default true
   */
  static outputConsoleErrorToChat = true;

  /**
   * Visualizes a Vector by using particles
   * @param origin The start position for the visualization
   * @param direction The direction to cast the visualization in (length is also determined by this direction)
   * @param dimension Optional Dimension to visualize in. Set to 'overworld' by default
   * @param particle Optional particle id string used to specify what particle to use in the visualization
   * Set to 'minecraft:basic_flame_particle' by default
   * @param segments Optional number specifying how many points to visualize. Set to 10 by default
   */
  static visualize(
    origin: Vector3,
    direction: Vector3,
    dimension = world.getDimension("overworld"),
    particle: string = MinecraftParticles.basicFlame,
    segments = 10
  ) {
    for (let i = 0; i < 1; i += 1 / segments) {
      let p = origin.add(direction.mul(i, new Vector3()), new Vector3());
      try {
        dimension.runCommand(
          `particle ${particle} ${p.x.toFixed(2)} ${p.y.toFixed(
            2
          )} ${p.z.toFixed(2)}`
        );
      } catch {}
    }
  }
}

function logToChat(data: any[], prefix = "") {
  // Source: https://wiki.bedrock.dev/scripting/scripting-intro.html#log
  function toString(item: any): string {
    if (item instanceof Error) {
      return `${item.name} ${item.message} ${item.stack}`;
    }
    switch (Object.prototype.toString.call(item)) {
      case "[object Undefined]":
        return "undefined";
      case "[object Null]":
        return "null";
      case "[object String]":
        return `"${item}"`;
      case "[object Array]":
        const array = item.map(toString);
        return `[${array.join(", ")}]`;
      case "[object Object]":
        const object = Object.keys(item).map(
          (key) => `${key}: ${toString(item[key])}`
        );
        return `{${object.join(", ")}}`;
      case "[object Function]":
        return `Function ${item.name}`;
      case "[object Map]":
        return `Map`;
      default:
        return item;
    }
  }

  let msg = data.map(toString).join(" ");

  CommandHandler.run(
    `tellraw @a[tag=devLog] {"rawtext":[{"text":"${prefix}${JSON.stringify(
      msg
    ).slice(1)}}]}`
  );
}

const logFunc = console.log;
console.log = function (...data: any[]) {
  logFunc.apply(console, arguments);

  if (!Debug.outputConsoleLogToChat) return;

  logToChat(data, "§b[Info] §r");
};

const warnFunc = console.warn;
console.warn = function (...data: any[]) {
  warnFunc.apply(console, arguments);

  if (!Debug.outputConsoleWarnToChat) return;

  logToChat(data, "§6[Warn] §r");
};

const errorFunc = console.error;
console.error = function (...data: any[]) {
  errorFunc.apply(console, data);

  if (!Debug.outputConsoleErrorToChat) return;

  logToChat(data, "§4[Error] §c");
};
