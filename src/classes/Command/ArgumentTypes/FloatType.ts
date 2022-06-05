import { ArgumentType } from "./ArgumentType";

export class FloatArgumentType extends ArgumentType<number> {
  isValid(input: string) {
    if (
      input.match(/[^-\d\.]/) ||
      input.match(/(?:\.?.*\..*\.)|(?:\..*\..*\.?)/)
    )
      return false;
    return true;
  }

  parse(input: string) {
    const out = parseFloat(input);
    if (!isNaN(out)) return out;
    return 0;
  }
}
