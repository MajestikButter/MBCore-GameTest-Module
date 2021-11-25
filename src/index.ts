import { world } from "mojang-minecraft";
import { MBCPlayer } from "../modules/mbcore.js";

world.events.beforeChat.subscribe((evd) => {
  let plr = MBCPlayer.get(evd.sender.nameTag);

  plr.executeCommand(
    `title @s actionbar $[{evd.sender.nameTag}]\n${evd.message}`
  );
});
