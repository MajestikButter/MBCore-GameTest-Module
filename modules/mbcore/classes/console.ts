import CommandHandler from "./commandhandler.js";

const Console = {
  /**
   * Hijack console.log() output to print to chat
   */
  outputConsoleLogToChat: true,
};

export default Console;

const logFunc = console.log;
console.log = function (...data: any[]) {
  logFunc.apply(console, arguments);

  if (!Console.outputConsoleLogToChat) return;

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
        return item;
      case "[object Array]":
        const array = item.map(toString);
        return `[${array.join(", ")}]`;
      case "[object Object]":
        const object = Object.keys(item).map(
          (key) => `${key}: ${toString(item[key])}`
        );
        return `{${object.join(", ")}}`;
      case "[object Function]":
        return item.toString();
      default:
        return item;
    }
  }
  let msg = data.map(toString).join(" ");
  CommandHandler.run(
    `tellraw @a[tag=devLog] {"rawtext":[{"text":${JSON.stringify(msg)}}]}`
  );
};
