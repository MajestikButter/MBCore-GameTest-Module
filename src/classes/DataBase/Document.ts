import { Collection } from "./Collection";
import { FieldType } from "../../types/DataBase.js";

export class Document {
  static fromSave(data: any, parent: Collection) {
    const d = new Document(data.id, parent);
    // d._data = data.data;
    return d;
  }

  toSave() {
    return {
      id: this.id,
      collections: Array.from(this._collections.values()).map(v => v.toSave()),

    }
  }

  private _id: string;
  get id() {
    return this._id;
  }

  private _parent: Collection;
  get parent() {
    return this._parent;
  }

  _data: this['parent']['docSchema'];
  get(field: keyof this['_data']) {
    return this._data[field];
  }
  set<k extends keyof this['_data']>(field: k, value: FieldType['value']) {
    //@ts-ignore
    this._data[field].value = value;
  }

  private _collections = new Map<string, Collection>()
  
  hasCollection(id: string | Collection) {
    return this._collections.has(id instanceof Collection ? id.id : id);
  }
  getCollection(id: string) {
    return this._collections.get(id);
  }
  addCollection(collection: Collection) {
    return this._collections.set(collection.id, collection);
  }

  constructor(id: string, parent: Collection) {
    this._id = id;
    this._parent = parent;
  }
}