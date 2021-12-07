import { world } from "mojang-minecraft";
function runCmd(cmd, dimension) {
    let result = {};
    let error = false;
    try {
        result = dimension.runCommand(cmd);
    }
    catch (err) {
        result = JSON.parse(err);
        error = true;
    }
    return { error, result };
}
export default class CommandHandler {
    static run(cmd, dimension = world.getDimension("overworld")) {
        return runCmd(cmd, dimension);
    }
    static runInAll(cmd) {
        const dimensions = ["overworld", "the end", "nether"];
        let resultArr = [];
        dimensions.forEach((v) => {
            resultArr.push(runCmd(cmd, world.getDimension(v)));
        });
        return resultArr;
    }
}
