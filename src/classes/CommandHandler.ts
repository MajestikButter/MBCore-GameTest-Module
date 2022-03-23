import { Dimension, world } from "mojang-minecraft";
import { CommandResult } from "../types/CommandResult.js";
import { DimensionIds } from "../types/DimensionIds.js";

function runCmd(cmd: string, dimension: Dimension) {
  let result: any = {};
  let error = false;

  try {
    result = dimension.runCommand(cmd);
  } catch (err) {
    result = JSON.parse(err);
    error = true;
  }
  return { error, result };
}

export class CommandHandler {
  /**
   * Runs a command and returns whether it ran successfully or errored, along with the result object
   * @param cmd A command to run
   * @param dimension A Dimension representing where to run the provided command in
   * @returns An object with an error property and the result of the command
   */
  static run(
    cmd: string,
    dimension = world.getDimension("minecraft:overworld")
  ): CommandResult {
    return runCmd(cmd, dimension);
  }

  /**
   * Runs a command and returns whether it ran successfully or errored, along with the result object
   * @param cmd A command to run
   * @returns An array of objects with an error property and the result of the command
   */
  static runInAll(cmd: string): CommandResult[] {
    const dimensions: DimensionIds[] = ["minecraft:overworld", "minecraft:the_end", "minecraft:nether"];
    let resultArr: any[] = [];
    dimensions.forEach((v) => {
      resultArr.push(runCmd(cmd, world.getDimension(v)));
    });
    return resultArr;
  }
}
