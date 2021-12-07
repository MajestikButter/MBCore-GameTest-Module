import { world } from "mojang-minecraft";
import EventEmitter from "./eventemitter.js";
import Scoreboard from "./scoreboard.js";
import Selector from "./selector.js";
import Vector3 from "./vector3.js";
let JSONIdObj = Scoreboard.initialize("mbcJSONId");
const JSONRequest = new EventEmitter();
export default JSONRequest;
world.events.beforeExplosion.subscribe((evd) => {
    if (!evd.source.nameTag.startsWith("$JSONRequest:"))
        return;
    evd.cancel = true;
    let entSelector = new Selector("e");
    entSelector.count = 1;
    entSelector.type = "mbc:jsonrequest";
    entSelector.pos = Vector3.fromLocation(evd.source.location);
    let id = JSONIdObj.get(entSelector);
    try {
        var request = JSON.parse(evd.source.nameTag.slice(13));
    }
    catch {
        throw new Error(`An error occured while attempting to parse JSON Request ${evd.source.nameTag}`);
    }
    let eEvd = {
        id,
        orgEvd: evd,
        request,
    };
    JSONRequest.emit(request.channel, eEvd);
});
