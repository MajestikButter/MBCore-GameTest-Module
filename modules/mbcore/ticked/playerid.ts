import { World } from "mojang-minecraft";
import Scoreboard from "../classes/scoreboard.js";
import Selector from "../classes/selector.js";

let playerIdObj = Scoreboard.get("mbcPlayerId");

World.events.tick.subscribe((evd) => {
  let selector = new Selector("r");
  playerIdObj.add(selector.toString(), 0);

  selector.scores = {
    mbcPlayerId: 0,
  };
  if (selector.eval()) {
    playerIdObj.set(selector, playerIdObj.get("#currentId"));
    playerIdObj.add("#currentId", 1);
  }
});
