import { World } from "mojang-minecraft";
import { Player } from "../modules/mbcore.js";

World.events.beforeChat.subscribe((evd) => {
  let plr = Player.get(evd.sender.nameTag);

  plr.executeCommand(
    `title @s actionbar $[{evd.sender.nameTag}]\n${evd.message}`
  );
});
