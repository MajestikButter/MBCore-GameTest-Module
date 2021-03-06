import { Collection } from "./Collection";
import { FieldTypeIds } from "../../types/DataBase.js";
import { FieldTypes } from "../../enums/FieldTypes";
import { MapField } from "./Fields";

export class Document<id extends string = string, parent extends Collection<any> = Collection> {
  static fromSave(data: any, parent: Collection) {
    const d = new Document(data.id, parent);
    for (let k in data.data) {
      // @ts-ignore
      d._data[k] = FieldTypes[data.data[k].type as FieldTypeIds].fromSave(data.data[k]);
    }
    for (let k in data.collections) {
      const collection = Collection.fromSave(data.collections[k]);
      d.setCollection(collection);
    }
    return d;
  }

  toSave() {
    let data: {[k: string]: any} = {};
    for (let k in this._data) {
      data[k] = this._data[k].toSave();
    }
    const collections = Array.from(this._collections.values()).map(v => v.toSave());
    return {
      id: this.id,
      collections,
      data,
    }
  }

  private _id: id;
  get id() {
    return this._id;
  }

  private _parent: parent;
  get parent() {
    return this._parent;
  }

  _data: {
    [prop in keyof this['parent']['docSchema']]: this['parent']['docSchema'][prop] extends any[] ? MapField<this['parent']['docSchema'][prop][1]> : this['parent']['docSchema'][prop]['prototype']
  };
  get<k extends keyof this['_data']>(field: k): this['_data'][k]['value'] {
    return this._data[field].value;
  }
  set<k extends keyof this['_data']>(field: k, value: this['_data'][k]['value']) {
    this._data[field].value = value;
  }

  private _collections = new Map<string, Collection>()
  
  hasCollection(id: string | Collection) {
    return this._collections.has(id instanceof Collection ? id.id : id);
  }
  setCollection(collection: Collection) {
    this._collections.set(collection.id, collection);
  }
  getCollection(id: string) {
    return this._collections.get(id);
  }
  getAllCollections() {
    return Array.from(this._collections.values());
  }

  constructor(id: id, parent: parent) {
    this._id = id;
    this._parent = parent;
    this._data = Object.assign({}, this._parent.docSchema);
    for (let field in this._data) {
      const d = this._data[field];
      if (Array.isArray(d)) {
        this._data[field] = new d[0](d[1]);
      } else this._data[field] = new d();
    }
  }
}
