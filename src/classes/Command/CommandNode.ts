import { ArgumentType } from "./ArgumentTypes/ArgumentType";
import { CommandInfo } from "./CommandInfo";

export abstract class CommandNode {
  constructor(protected readonly name: string) {}

  children = new Map<string, CommandNode>();
  then(commandNode: CommandNode) {
    if (this.children.has(commandNode.name)) {
      throw new Error("A child command node already exists with this name");
    }
    this.children.set(commandNode.name, commandNode);
    return this;
  }

  executeFunc?: (commandInfo: CommandInfo) => any;
  executes(callback: (commandInfo: CommandInfo) => any) {
    if (this.executeFunc) {
      throw new Error(
        "This command node has already defined an execute function"
      );
    }
    this.executeFunc = callback;
    return this;
  }

  abstract isValid(input: string): boolean;
  protected executeChild(parseArgs: any[], args: string[], index: number) {
    if (!args.length) return this.execute(parseArgs);

    const arg = args[0];

    let useChild: CommandNode;
    for (let child of this.children.values()) {
      if (child.isValid(arg)) {
        useChild = child;
        break;
      }
    }

    if (!useChild && args.length) {
      throw new Error("No valid child command node found");
    }

    parseArgs[index] =
      useChild instanceof ArgumentType ? useChild.parse(arg) : arg;
    index++;

    if (args.length == 1) {
      useChild.execute(parseArgs);
    } else useChild.execute(args.slice(1));
  }

  protected execute(parsed: any[]) {
    if (!this.executeFunc) {
      throw new Error(
        "Cannot execute command, no execution function was found"
      );
    }
    const info = new CommandInfo();
    return this.executeFunc(info);
  }
}
