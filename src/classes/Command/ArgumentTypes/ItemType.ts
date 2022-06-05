import { Items, ItemType } from "mojang-minecraft";
import { ArgumentType } from "./ArgumentType";

export class ItemArgumentType extends ArgumentType<ItemType> {
  isValid(input: string) {
    if (!Items.get(input)) return false;
    return true;
  }

  parse(input: string) {
    return Items.get(input);
  }
}
