import { CommandNode } from "./CommandNode";

export class LiteralCommandNode extends CommandNode {
  isValid(input: string) {
    return this.name === input;
  }
}
