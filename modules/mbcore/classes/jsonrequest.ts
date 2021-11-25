import { BeforeExplosionEvent, world } from "mojang-minecraft";
import EventEmitter from "./eventemitter.js";
import Scoreboard from "./scoreboard.js";
import Selector from "./selector.js";
import Vector3 from "./vector3.js";

let JSONIdObj = Scoreboard.initialize("mbcJSONId");

// Response Interface
interface JSONRequestEvd {
  id: number;
  orgEvd: BeforeExplosionEvent;
  request: {
    [key: string]: any;
  };
}
interface JSONRequest {
  channel: string;
  data: {
    [key: string]: any;
  };
}

// Events interface
interface JSONRequestEmitter extends EventEmitter {
  on(channel: string, eventCallback: (evd: JSONRequestEvd) => any): any;

  once(channel: string, eventCallback: (evd: JSONRequestEvd) => any): any;

  emit(eventName: string, evd: JSONRequestEvd): any;
}

// Create and export emitter
const JSONRequest: JSONRequestEmitter = new EventEmitter();
export default JSONRequest;

// Emitting
world.events.beforeExplosion.subscribe((evd) => {
  if (!evd.source.nameTag.startsWith("$JSONRequest:")) return;
  evd.cancel = true;
  let entSelector = new Selector("e");
  entSelector.count = 1;
  entSelector.type = "mbc:jsonrequest";
  entSelector.pos = Vector3.fromLocation(evd.source.location);
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
