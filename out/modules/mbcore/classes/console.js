import CommandHandler from "./commandhandler.js";
const Console = {
    outputConsoleLogToChat: true,
    outputConsoleErrorToChat: true,
};
export default Console;
function logToChat(data, prefix = "") {
    function toString(item) {
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
                const object = Object.keys(item).map((key) => `${key}: ${toString(item[key])}`);
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
    CommandHandler.run(`tellraw @a[tag=devLog] {"rawtext":[{"text":"${prefix}${JSON.stringify(msg).slice(1)}}]}`);
}
const logFunc = console.log;
console.log = function (...data) {
    logFunc.apply(console, arguments);
    if (!Console.outputConsoleLogToChat)
        return;
    logToChat(data, "§b[Info] §r");
};
const errorFunc = console.error;
console.error = function (...data) {
    errorFunc.apply(console, data);
    if (!Console.outputConsoleErrorToChat)
        return;
    logToChat(data, "§4[Error] §c");
};
