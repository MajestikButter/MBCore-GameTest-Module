import { BlockType, MinecraftBlockTypes } from "mojang-minecraft";
import { ArgumentType } from "./ArgumentType";

export class BlockArgumentType extends ArgumentType<BlockType> {
  isValid(input: string) {
    if (!MinecraftBlockTypes.get(input)) return false
    return true;
  }

  parse(input: string) {
    return MinecraftBlockTypes.get(input);
  }
}
