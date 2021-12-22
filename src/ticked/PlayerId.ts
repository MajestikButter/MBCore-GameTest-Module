import { world } from "mojang-minecraft";
import { Scoreboard } from "../classes/Scoreboard.js";
import { Selector } from "../classes/Selector.js";

let playerIdObj = Scoreboard.get("mbcPlayerId");

world.events.tick.subscribe((evd) => {
  let selector = new Selector("r");
  playerIdObj.add(selector.toString(), 0);

  selector.scores = {
    mbcPlayerId: 0,
  };
  if (selector.eval()) {
    playerIdObj.set(selector, playerIdObj.get('"#currentId"'));
    playerIdObj.add('"#currentId"', 1);
  }
});
