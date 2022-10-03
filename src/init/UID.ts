import { EntityQueryOptions, world } from "mojang-minecraft";
import { UID } from "../classes/UID.js";
import { CustomEvents } from '../classes/CustomEvents.js';

// let playerIdObj = Scoreboard.get("mbcPlayerId");

const dims = [
  world.getDimension('minecraft:overworld'),
  world.getDimension('minecraft:nether'),
  world.getDimension('minecraft:the_end'),
]
const assignTag = "<$mbc;uidAssigned=true;/>";
world.events.tick.subscribe((evd) => {
  const o: EntityQueryOptions = { excludeTags: [assignTag] };

  for (let dim of dims) {
    for (let ent of dim.getEntities(o)) {
      ent.getTags().forEach((v) => {
        if (UID.matchTag(v)) ent.removeTag(v);
      });
      const uid = UID.createUID();
      ent.addTag(UID.createTag(uid));
      ent.addTag(assignTag);
      CustomEvents.emit('UIDAssigned', {entity: ent, uid})
    }
  }
});
