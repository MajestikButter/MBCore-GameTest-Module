import { EntityQueryOptions, world } from "mojang-minecraft";
import { UID } from "../classes/UID";

// let playerIdObj = Scoreboard.get("mbcPlayerId");

const dims = [
  world.getDimension('minecraft:overworld'),
  world.getDimension('minecraft:nether'),
  world.getDimension('minecraft:the_end'),
]
const assignTag = "<$mbc;uidAssigned=true;/>";
world.events.tick.subscribe((evd) => {
  const o = new EntityQueryOptions();
  o.excludeTags = [assignTag];

  for (let dim of dims) {
    for (let ent of dim.getEntities(o)) {
      ent.getTags().forEach((v) => {
        if (UID.matchTag(v)) ent.removeTag(v);
      });
      ent.addTag(UID.createTag());
      ent.addTag(assignTag);
    }
  }
});
