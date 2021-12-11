import { CommandHandler } from "./CommandHandler.js";
import { Scoreboard } from "./Scoreboard.js";

function createRegex(id: string) {
  return new RegExp(
    `₧{DataSave}\\[\\/id:\\(${id}\\)\\/\\]\\[\\/data:\\([^º]+º\\)\\/]`,
    "g"
  );
}

interface Obj {
  [key: string]: any;
}

const DataSaves = Scoreboard.initialize("mbcDataSaves");

export class DataSave {
  /**
   * Property containing all initialized DataSaves
   */
  static dataSaves: { [id: string]: DataSave } = {};

  /**
   * Initializes a DataSave to be able to be used in scripts
   * @param id An id used to refer to a DataSave
   * @param displayName An optional display name used while creating the objective, ignored if the objective already exists
   * @returns A Scoreboard with the provided id
   */
  static initialize(id: string, defaultData: Obj) {
    if (this.initialized(id))
      throw new Error(`DataSave with id ${id} is already initialized`);

    let dataSave = new DataSave(id);

    if (!this.exists(id)) dataSave.data = defaultData;

    this.dataSaves[id] = dataSave;
    return dataSave;
  }

  /**
   * Gets the DataSave for the provided id
   * @param id An id used to refer to a DataSave
   * @returns A DataSave with the provided id
   */
  static get(id: string) {
    if (!this.initialized(id))
      throw new Error(`No DataSave with the id ${id} is initialized`);
    return this.dataSaves[id];
  }

  /**
   * Checks if a DataSave has already been initialized
   * @param id An id used to refer to a DataSave
   * @returns A boolean representing whether the DataSave is initialized or not
   */
  static initialized(id: string) {
    return this.dataSaves[id] ? true : false;
  }

  /**
   * Checks if a DataSave has already been created
   * @param id An id used to refer to a DataSave
   * @returns A boolean representing whether the DataSave is created or not
   */
  static exists(id: string) {
    return this.getAllScoreSaves(id) ? true : false;
  }

  /**
   * Gets all DataSave scores
   * @param id An id used as to target a specific DataSave
   * @returns An array of strings respresenting all DataSave scores
   */
  static getAllScoreSaves(id: string) {
    let cmd: {
      error: boolean;
      result: {
        statusMessage: string;
      };
    } = CommandHandler.run("scoreboard players list");
    if (cmd.error) return [];
    return cmd.result.statusMessage.match(createRegex(id)) ?? [];
  }

  /////////////////
  //
  //
  /////////////////
  //
  //
  /////////////////

  private _id: string;
  /**
   * A string representing this DataSave's id
   * @readonly
   */
  get id() {
    return this._id;
  }

  /**
   * Clears all scores associated with this DataSave
   */
  private clearScoreSaves() {
    let saves = DataSave.getAllScoreSaves(this.id);
    saves.forEach((v) => {
      DataSaves.reset(`"${v}"`);
    });
  }

  /**
   * Fetches the data from the Score save for this DataSave
   */
  fetchScoreSave() {
    let saves = DataSave.getAllScoreSaves(this.id);
    if (!saves[0]) return {};

    let dataStr = saves[0].match(/data:\([^º]+/)[0];
    dataStr = dataStr.slice(6);
    dataStr = dataStr.replace(/\\"/g, '"').replace(/\\\\/g, "\\");

    return JSON.parse(dataStr);
  }

  /**
   * Converts this DataSave to a Score save string
   * @returns A string representing a Score save for this DataSave
   */
  toScoreString(data?: Obj) {
    return `₧{DataSave}[/id:(${this.id})/][/data:(${JSON.stringify(
      data ?? this.data
    )}º)/]`;
  }

  /**
   * Checks if a saved data entry exists
   * @param key The name of the entry to look for
   */
  has(key: string) {
    return this.data[key] !== undefined && this.data[key] !== null
      ? true
      : false;
  }

  /**
   * Gets a saved data entry
   * @param key The name of the entry to look for
   */
  get(key: string) {
    if (!this.has(key))
      throw new Error(
        `No entry with the name ${key} exists on DataSave ${this.id}`
      );
    return this.data[key];
  }

  /**
   * Sets a saved data entry to a new value
   * @param key The name of the entry to look for
   * @param val The new value for the entry
   */
  set(key: string, val: any) {
    let data = this.data;
    data[key] = val;
    this.data = data;
  }

  /**
   * Deletes a saved data entry
   * @param key The name of the entry to look for
   */
  delete(key: string) {
    let data = this.data;
    delete this.data[key];
    this.data = data;
  }

  /**
   * Deletes all saved data entries
   */
  clearAll() {
    this.data = {};
  }

  /**
   * Lists all saved data entry keys
   */
  listKeys() {
    return Object.keys(this.data);
  }

  private get data() {
    return this.fetchScoreSave();
  }
  private set data(val: Obj) {
    this.clearScoreSaves();
    let selector = JSON.stringify(this.toScoreString(val));
    DataSaves.set(selector, 0);
  }

  private constructor(id: string) {
    this._id = id;
  }
}
