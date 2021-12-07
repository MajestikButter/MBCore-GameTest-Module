import { world } from "mojang-minecraft";
import CommandHandler from "./commandhandler.js";
import Vector2 from "./vector2.js";
export default class Selector {
    constructor(type) {
        this.selectorType = type;
    }
    results(dimension = world.getDimension("overworld")) {
        return CommandHandler.run(`testfor ${this.toString()}`, dimension).result.victim ?? [];
    }
    eval(dimension = world.getDimension("overworld")) {
        return this.results(dimension).length > 0;
    }
    toString() {
        let str = "";
        str += this.type ? `type=${this.type},` : "";
        str += this.name ? `name="${this.name}",` : "";
        str += this.count ? `c=${this.count},` : "";
        if (this.level) {
            str += this.level.x ? `lm=${this.level.x},` : "";
            str += this.level.y ? `l=${this.level.y},` : "";
        }
        str += this.gamemode ? `m=${this.gamemode},` : "";
        if (this.range) {
            str += this.range.x ? `rm=${this.range.x},` : "";
            str += this.range.y ? `r=${this.range.y},` : "";
        }
        if (this.pos) {
            str += this.pos.x ? `x=${this.pos.x},` : "";
            str += this.pos.y ? `y=${this.pos.y},` : "";
            str += this.pos.z ? `z=${this.pos.z},` : "";
        }
        if (this.rotX) {
            str += this.rotX.x ? `rxm=${this.rotX.x},` : "";
            str += this.rotX.y ? `rx=${this.rotX.y},` : "";
        }
        if (this.rotY) {
            str += this.rotY.x ? `rym=${this.rotY.x},` : "";
            str += this.rotY.y ? `ry=${this.rotY.y},` : "";
        }
        if (this.volume) {
            str += this.volume.x ? `dx=${this.volume.x},` : "";
            str += this.volume.y ? `dy=${this.volume.y},` : "";
            str += this.volume.z ? `dz=${this.volume.z},` : "";
        }
        if (this.families) {
            this.families.forEach((v) => (str += `family=${v},`));
        }
        if (this.tags) {
            this.tags.forEach((v) => (str += `tag=${v},`));
        }
        if (this.scores) {
            let scoreStr = `scores={`;
            for (let k in this.scores) {
                scoreStr += `${k}=`;
                let score = this.scores[k];
                if (score instanceof Vector2)
                    scoreStr += `${score.x}..${score.y}`;
                else if (typeof score === "number")
                    scoreStr += `${score}`;
                else
                    scoreStr += score;
                scoreStr += ",";
            }
            scoreStr = scoreStr.slice(0, scoreStr.length - 1);
            str += `${scoreStr}},`;
        }
        if (str)
            str = str.slice(0, str.length - 1);
        let target = `@${this.selectorType}`;
        return str ? `${target}[${str}]` : target;
    }
}
