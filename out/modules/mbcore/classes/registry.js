let Registries = {};
export default class Registry {
    constructor(id) {
        this.registry = {};
        this.id = id;
    }
    static get(id) {
        if (!Registries[id])
            Registries[id] = new Registry(id);
        return Registries[id];
    }
    register(key, val) {
        this.registry[key] = val;
        return this.registry[key];
    }
    has(key) {
        return this.registry[key] ? true : false;
    }
    get(key) {
        if (!this.has(key))
            throw new Error(`${key} is not a valid registry entry on ${this.id}`);
        return this.registry[key];
    }
    getValues() {
        return Object.values(this.registry);
    }
    getKeys() {
        return Object.keys(this.registry);
    }
}
