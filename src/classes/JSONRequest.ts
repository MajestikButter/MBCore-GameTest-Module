import { Vector3 } from "gametest-maths";
import { BeforeExplosionEvent, world } from "mojang-minecraft";
import { EventEmitter } from "./EventEmitter.js";
import { Scoreboard } from "./Scoreboard.js";
import { Selector } from "./Selector.js";

let JSONIdObj = Scoreboard.initialize("mbcJSONId");

// Response Interface
export interface JSONRequestEvd {
  id: number;
  orgEvd: BeforeExplosionEvent;
  request: JSONRequest;
}
export interface JSONRequest {
  channel: string;
  [key: string]: any;
}

// Events interface
export interface JSONRequestEmitter extends EventEmitter {
  on(channel: string, eventCallback: (evd: JSONRequestEvd) => any): any;

  once(channel: string, eventCallback: (evd: JSONRequestEvd) => any): any;

  emit(eventName: string, evd: JSONRequestEvd): any;
}

// Create and export emitter
export const JSONRequest: JSONRequestEmitter = new EventEmitter();

// Emitting
world.events.beforeExplosion.subscribe((evd) => {
  if (!evd.source || !evd.source.nameTag.startsWith("$JSONRequest:")) return;
  evd.cancel = true;
  let entSelector = new Selector("e");
  entSelector.count = 1;
  entSelector.type = "mbc:jsonrequest";
  entSelector.pos = new Vector3(evd.source.location);
  let id = JSONIdObj.get(entSelector);

  try {
    var request: JSONRequest = JSON.parse(evd.source.nameTag.slice(13));
  } catch {
    throw new Error(
      `An error occured while attempting to parse JSON Request ${evd.source.nameTag}`
    );
  }

  let eEvd = {
    id,
    orgEvd: evd,
    request,
  };
  JSONRequest.emit(request.channel, eEvd);
});
