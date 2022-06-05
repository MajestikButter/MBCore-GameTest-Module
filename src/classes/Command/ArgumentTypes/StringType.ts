import { ArgumentType } from "./ArgumentType";

export class StringArgumentType extends ArgumentType<string> {
  isValid(input: string) {
    return true;
  }

  parse(input: string) {
    return input;
  }
}
