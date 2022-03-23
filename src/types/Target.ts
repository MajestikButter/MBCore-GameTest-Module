import { Selector } from "../classes/Selector.js";
import { MBCPlayer } from "../classes/MBCPlayer.js";
import { Entity, Player } from "mojang-minecraft";

export type Target = string | Selector | MBCPlayer | Entity | Player;
