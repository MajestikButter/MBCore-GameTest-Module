////////////////////////////
// MBCore GameTest Module
//
// By: MajestikButter
////////////////////////////

export * from "./classes/Console.js";
export * from "./classes/CommandHandler.js";
export * from "./classes/DataSave.js";
export * from "./classes/EventEmitter.js";
export * from "./classes/JSONRequest.js";
export * from "./classes/MBCPlayer.js";
export * from "./classes/Registry.js";
export * from "./classes/Scoreboard.js";
export * from "./classes/Selector.js";
export * from "./classes/Vector2.js";
export * from "./classes/Vector3.js";

export * from "./functions/TickInterval.js";
export * from "./functions/TickTimeout.js";

export * from "./types/DimensionIds.js";
export * from "./types/Gamemode.js";
export * from "./types/Target.js";
export * from "./types/SelectorType.js";
export * from "./types/CommandResult.js";

import "./ticked/index.js";

console.log("§l§aLoading §bMBCore Module v1.2.0");
