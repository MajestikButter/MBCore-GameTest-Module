import { LiteralCommandNode } from "./LiteralCommandNode";

export class Command extends LiteralCommandNode {
  constructor(
    id: string,
    private readonly options: { aliases: string[]; description: string } = {
      aliases: [],
      description: "",
    }
  ) {
    super(id);
  }

  get aliases(): string[] {
    return [...this.aliases];
  }

  get description() {
    return this.options.description;
  }

  run(argStr: string) {
    const args: string[] = [];

    const matches = argStr.matchAll(/".*?"|\S+/g);
    for (let match of matches) {
      args.push(match[0]);
    }

    if (args.length) {
      this.executeChild(args, args, 0);
    } else this.execute([]);
  }
}
