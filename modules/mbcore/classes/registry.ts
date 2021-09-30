let Registries: { [id: string]: Registry } = {};

interface Obj {
  [key: string]: any;
}
export default class Registry {
  /**
   * Gets/creates a registry
   * @param id A string id referring the a registry
   * @returns 
   */
  static get(id: string) {
    if (!Registries[id]) Registries[id] = new Registry(id);
    return Registries[id];
  }

  /**
   * Registry id
   * @readonly
   */
  id: string;
  /**
   * Registry object
   */
  private registry: Obj = {};

  /**
   * Registers a new entry to the Registry
   * @param key A string id referring to an entry
   * @param val
   * @returns
   */
  register(
    key: keyof typeof this.registry,
    val: typeof this.registry[keyof typeof this.registry]
  ) {
    this.registry[key] = val;
    return this.registry[key];
  }

  /**
   * Checks if a registry entry exists on this registry
   * @param key A string id referring to an entry
   * @returns A boolean representing whether a registry entry exists or not
   */
  has(key: keyof typeof this.registry) {
    return this.registry[key] ? true : false;
  }

  /**
   * Gets the specified entry from the registry
   * @param key A string id referring to an entry
   * @returns A registry entry
   */
  get(key: keyof typeof this.registry) {
    if (!this.has(key))
      throw new Error(`${key} is not a valid registry entry on ${this.id}`);
    return this.registry[key];
  }

  /**
   * Get all this registry's entries
   * @returns An array of all the registry entries
   */
  getValues() {
    return Object.values(this.registry);
  }
  
  /**
   * Gets all the ids for this registry's entries
   * @returns An array of all the entry ids in this registry
   */
  getKeys() {
    return Object.keys(this.registry);
  }

  private constructor(id: string) {
    this.id = id;
  }
}
