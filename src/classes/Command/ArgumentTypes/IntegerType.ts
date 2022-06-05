import { ArgumentType } from "./ArgumentType";

export class IntegerArgumentType extends ArgumentType<number> {
  isValid(input: string) {
    if (input.match(/[^-\d]/)) return false;
    return true;
  }

  parse(input: string) {
    const out = parseInt(input);
    if (!isNaN(out)) return out;
    return 0;
  }
}
