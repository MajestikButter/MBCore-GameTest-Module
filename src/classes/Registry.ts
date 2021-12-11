let Registries: { [id: string]: Registry<any, any> } = {};

export class Registry<K, V> {
  /**
   * Gets/creates a registry
   * @param id A string id referring the a registry
   * @returns
   */
  static get<K, V>(id: string) {
    if (!Registries[id]) Registries[id] = new Registry(id);
    return Registries[id] as Registry<K, V>;
  }

  /**
   * Registry id
   * @readonly
   */
  id: string;
  /**
   * Registry object
   */
  private registry = new Map<K, V>();

  /**
   * Registers a new entry to the Registry
   * @param key A string id referring to an entry
   * @param val
   * @returns
   */
  register(key: K, val: V) {
    this.registry.set(key, val);
    return this.registry.get(key);
  }

  /**
   * Checks if a registry entry exists on this registry
   * @param key A string id referring to an entry
   * @returns A boolean representing whether a registry entry exists or not
   */
  has(key: K) {
    return this.registry.has(key);
  }

  /**
   * Gets the specified entry from the registry
   * @param key A string id referring to an entry
   * @returns A registry entry
   */
  get(key: K) {
    if (!this.has(key))
      throw new Error(`${key} is not a valid registry entry on ${this.id}`);
    return this.registry.get(key);
  }

  /**
   * Get all this registry's entries
   * @returns An array of all the registry entries
   */
  getValues() {
    let res = [];
    for (let v of this.registry.values()) {
      res.push(v);
    }
    return res;
  }

  /**
   * Gets all the ids for this registry's entries
   * @returns An array of all the entry ids in this registry
   */
  getKeys() {
    let res = [];
    for (let v of this.registry.keys()) {
      res.push(v);
    }
    return res;
  }

  private constructor(id: string) {
    this.id = id;
  }
}
