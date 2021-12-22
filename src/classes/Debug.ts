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
   * Max formatter depth
   * @default 3
   */
  static maxFormatterDepth = 3;

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

function formatObject(item: any, layer: number): string {
  const name = item.constructor.name;
  if (layer > Debug.maxFormatterDepth) return `§5${name}`;

  switch (name) {
    case 'Array': {
      return `§2[${item.map((v: any) => format(v, layer + 1)).join('§a, ')}§2]`;
    }
    default: {
      const object: string[] = Object.keys(item).map(
        (key) => {
          return `§6${key}§d: ${format(item[key], layer + 1)}`
        }
      );
      return `§5${name} §d{${object.join("§a, ")}§d}`;
    }
  }
}

function formatNonObject(item: any) {
  switch (Object.prototype.toString.call(item)) {
    case '[object Undefined]': 
      return '§9undefined';
    case "[object Null]":
      return "§9null";
    case "[object String]":
      return `§6"§e${item}§6"`;
    default:
      return `${item}`
  }
}

function format(data: any, layer = 0) {
  if (typeof data === 'object') {
    return formatObject(data, layer);
  } else {
    return formatNonObject(data);
  }
}

function sendDevLog(msg: string, prefix: string) {
  CommandHandler.run(
    `tellraw @a[tag=devLog] {"rawtext":[{"text":"${prefix}${JSON.stringify(
      msg
    ).slice(1)}}]}`
  );
}
function formatArgs(data: any[]) {
  return data.map(v=>format(v)).join(' ');
}

const logFunc = console.log;
console.log = function (...data: any[]) {
  logFunc.apply(console, arguments);

  if (!Debug.outputConsoleLogToChat) return;

  sendDevLog(formatArgs(data), "§b[Info] §r");
};

const warnFunc = console.warn;
console.warn = function (...data: any[]) {
  warnFunc.apply(console, arguments);

  if (!Debug.outputConsoleWarnToChat) return;

  sendDevLog(formatArgs(data), "§6[Warn] §r");
};

const errorFunc = console.error;
console.error = function (...data: any[]) {
  errorFunc.apply(console, data);

  if (!Debug.outputConsoleErrorToChat) return;

  sendDevLog(formatArgs(data), "§4[Error] §c");
};
