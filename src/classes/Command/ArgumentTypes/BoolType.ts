import { ArgumentType } from "./ArgumentType";

export class BoolArgumentType extends ArgumentType<boolean> {
  isValid(input: string) {
    if (!["true", "false"].includes(input.toLowerCase())) return false;
    return true;
  }

  parse(input: string) {
    const out = input.toLowerCase() === "false" ? false : true;
    return out;
  }
}
