import { ArgumentType } from "./ArgumentTypes/ArgumentType";
import { CommandNode } from "./CommandNode";

export class ArgumentCommandNode extends CommandNode {
  constructor(name: string, private type: ArgumentType<any>) {
    super(name);
  }

  isValid(input: string): boolean {
    return this.type.isValid(input);
  }
}
