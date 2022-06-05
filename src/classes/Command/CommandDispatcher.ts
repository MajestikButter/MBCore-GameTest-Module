import { ArgumentCommandNode } from "./ArgumentCommandNode";
import { StringArgumentType } from "./ArgumentTypes/StringType";
import { Command } from "./Command";
import { LiteralCommandNode } from "./LiteralCommandNode";

export class CommandDispatcher {
  private commands = new Map<string, Command>();
  register(
    command: string,
    options: {
      aliases: string[];
      description: string;
    } = {
      aliases: [],
      description: "",
    }
  ) {
    if (this.commands.has(command)) {
      throw new Error(
        `A command is already registered with the id '${command}'`
      );
    }
    if (options.aliases) {
      for (let alias of options.aliases) {
        if (this.commands.has(alias))
          throw new Error(
            `A command is already registered containing the alias '${alias}'`
          );
      }
    }
    const cmd = new Command(command, options);
    this.commands.set(command, cmd);
    for (let alias of options.aliases) {
      this.commands.set(alias, cmd);
    }
    return cmd;
  }

  execute(command: string) {
    const name = command.split(" ")[0];
    const cmd = this.commands.get(name);
    if (!cmd) {
      throw new Error("Invalid command");
    }
    const argStr = command.slice(name.length).trimStart();
    return cmd.run(argStr);
  }
}

const dispatcher = new CommandDispatcher();
dispatcher
  .register("test")
  .then(
    new LiteralCommandNode("literal").executes((info) => {
      console.log(info);
      return 1;
    })
  )
  .then(
    new ArgumentCommandNode("argument", new StringArgumentType()).executes(
      (info) => {
        console.log(info);
        return 1;
      }
    )
  );
