import CommandHandler from "./commandhandler.js";
import ProxyTemplate from "./proxytemplate.js";
import Selector from "./selector.js";
function targetToSelectorStr(target) {
    return typeof target === 'string'
        ? target
        : target instanceof Selector
            ? target.toString()
            : target.toSelector().toString();
}
export default class Scoreboard {
    constructor(id) {
        this.id = id;
        return new Proxy(this, ProxyTemplate);
    }
    static initialize(id, displayName) {
        if (this.initialized(id))
            throw new Error(`Scoreboard with id ${id} is already initialized`);
        if (!this.exists(id))
            this.create(id);
        this.scoreboards[id] = new Scoreboard(id);
        return this.scoreboards[id];
    }
    static create(id, displayName) {
        if (this.exists(id))
            return new Error(`Scoreboard with id ${id} already exists`);
        CommandHandler.run(`scoreboard objectives add ${id} dummy ${displayName ?? ""}`);
    }
    static get(id) {
        if (!this.initialized(id)) {
            throw new Error(`No Scoreboard with the id ${id} is initialized`);
        }
        return this.scoreboards[id];
    }
    static initialized(id) {
        return this.scoreboards[id] ? true : false;
    }
    static exists(id) {
        let result = CommandHandler.run(`scoreboard objectives add ${id} dummy`);
        if (!result.error) {
            CommandHandler.run(`scoreboard objectives remove ${id}`);
            return false;
        }
        return true;
    }
    add(target, val) {
        let selectorStr = targetToSelectorStr(target);
        CommandHandler.run(`scoreboard players add ${selectorStr} ${this.id} ${val}`);
    }
    reset(target) {
        let selectorStr = targetToSelectorStr(target);
        CommandHandler.run(`scoreboard players reset ${selectorStr} ${this.id}`);
    }
    set(target, val) {
        let selectorStr = targetToSelectorStr(target);
        CommandHandler.run(`scoreboard players set ${selectorStr} ${this.id} ${val}`);
    }
    get(target) {
        let selectorStr = targetToSelectorStr(target);
        let cmd = CommandHandler.run(`scoreboard players test ${selectorStr} ${this.id} * *`);
        if (cmd.error)
            return 0;
        let result = cmd.result.statusMessage.match(/(?:\d...)/);
        return result ? parseInt(result[0]) : 0;
    }
    onPropertyChange(obj, prop, val) {
        switch (prop) {
            case "id":
                throw new Error("Unable to set id property on Scoreboard, id is read-only");
            default:
                return true;
        }
    }
}
Scoreboard.scoreboards = {};
