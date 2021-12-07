import CommandHandler from "./commandhandler.js";
import Scoreboard from "./scoreboard.js";
import ProxyTemplate from "./proxytemplate.js";
function createRegex(id) {
    return new RegExp(`₧{DataSave}\\[\\/id:\\(${id}\\)\\/\\]\\[\\/data:\\([^º]+º\\)\\/]`, "g");
}
const DataSaves = Scoreboard.initialize("mbcDataSaves");
export default class DataSave {
    constructor(id) {
        this.id = id;
        let proxy = new Proxy(this, ProxyTemplate);
        return proxy;
    }
    static initialize(id, defaultData) {
        if (this.initialized(id))
            throw new Error(`DataSave with id ${id} is already initialized`);
        let dataSave = new DataSave(id);
        if (!this.exists(id))
            dataSave.data = defaultData;
        this.dataSaves[id] = dataSave;
        return dataSave;
    }
    static get(id) {
        if (!this.initialized(id))
            throw new Error(`No DataSave with the id ${id} is initialized`);
        return this.dataSaves[id];
    }
    static initialized(id) {
        return this.dataSaves[id] ? true : false;
    }
    static exists(id) {
        return this.getAllScoreSaves(id) ? true : false;
    }
    static getAllScoreSaves(id) {
        let cmd = CommandHandler.run("scoreboard players list");
        if (cmd.error)
            return [];
        return cmd.result.statusMessage.match(createRegex(id)) ?? [];
    }
    clearScoreSaves() {
        let saves = DataSave.getAllScoreSaves(this.id);
        saves.forEach((v) => {
            DataSaves.reset(`"${v}"`);
        });
    }
    fetchScoreSave() {
        let saves = DataSave.getAllScoreSaves(this.id);
        if (!saves[0])
            return {};
        let dataStr = saves[0].match(/data:\([^º]+/)[0];
        dataStr = dataStr.slice(6);
        dataStr = dataStr.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
        return JSON.parse(dataStr);
    }
    toScoreString(data) {
        return `₧{DataSave}[/id:(${this.id})/][/data:(${JSON.stringify(data ?? this.data)}º)/]`;
    }
    has(key) {
        return this.data[key] !== undefined && this.data[key] !== null
            ? true
            : false;
    }
    get(key) {
        if (!this.has(key))
            throw new Error(`No entry with the name ${key} exists on DataSave ${this.id}`);
        return this.data[key];
    }
    set(key, val) {
        let data = this.data;
        data[key] = val;
        this.data = data;
    }
    delete(key) {
        let data = this.data;
        delete this.data[key];
        this.data = data;
    }
    clearAll() {
        this.data = {};
    }
    listKeys() {
        return Object.keys(this.data);
    }
    get data() {
        return this.fetchScoreSave();
    }
    set data(val) {
        this.clearScoreSaves();
        let selector = JSON.stringify(this.toScoreString(val));
        DataSaves.set(selector, 0);
    }
    onPropertySet(prop, val) {
        switch (prop) {
            case "id":
                throw new Error("Unable to set id property on DataSave, id is read-only");
        }
        return 1;
    }
}
DataSave.dataSaves = {};
