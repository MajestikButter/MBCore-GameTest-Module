import { Commands, Dimension, World } from "mojang-minecraft";
import { DimensionIds } from "..";

function runCmd(cmd: string, dimension: Dimension) {
  let result: any = {};
  let error = false;

  try {
    result = Commands.run(cmd, dimension);
  } catch (err) {
    result = JSON.parse(err);
    error = true;
  }
  return { error, result };
}

interface cmdResult {
  error: boolean;
  result: any;
}

export default class CommandHandler {
  /**
   * Runs a command and returns whether it ran successfully or errored, along with the result object
   * @param cmd A command to run
   * @param dimension A Dimension representing where to run the provided command in
   * @returns An object with an error property and the result of the command
   */
  static run(
    cmd: string,
    dimension = World.getDimension("overworld")
  ): cmdResult {
    return runCmd(cmd, dimension);
  }

  /**
   * Runs a command and returns whether it ran successfully or errored, along with the result object
   * @param cmd A command to run
   * @returns An array of objects with an error property and the result of the command
   */
  static runInAll(cmd: string): cmdResult[] {
    const dimensions: DimensionIds[] = ["overworld", "the end", "nether"];
    let resultArr: any[] = [];
    dimensions.forEach((v) => {
      resultArr.push(runCmd(cmd, World.getDimension(v)));
    });
    return resultArr;
  }
}
