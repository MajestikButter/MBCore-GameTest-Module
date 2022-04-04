import { CommandHandler } from "../CommandHandler";
import { Scoreboard } from "../Scoreboard";
import { Collection } from './Collection';

const score = new Scoreboard('mbcDataBases');
export class DataBase {
  static regex = /<\$mbc;id=(.*?);seg=(\d*?);data=(.*?);\/>/g
  static maxStoreLength = 256;
  static segmentDigitCount = 6;
  static stored = this.fetchAll();

  static match() {
    const str: string = CommandHandler.run('scoreboard players list').result.statusMessage.split('\n')[1];
    if (!str) return [];
    return Array.from(str.matchAll(this.regex));
  }
  static fetchAll() {
    const res: {
      [id: string]: {[key: string]: any};
    } = {};
    const builder: {
      [id: string]: string
    } = {}
    const match = this.match();
    match.sort((a, b) => parseInt(a[2]) - parseInt(b[2]));
    for (let m of match) {
      if (!builder[m[1]]) builder[m[1]] = m[3];
      else builder[m[1]] += m[3];
    }
    for (let id in builder) {
      res[id] = JSON.parse(JSON.parse(`"${builder[id]}"`));
    }
    return res;
  }
  static storeAll() {
    for (let id in this.stored) {
      this.store(id);
    }
  }
  static fetch(id: string) {
    let builder = '';
    const match = this.match();
    match.filter(v => v[1] === id);
    match.sort((a, b) => parseInt(a[2]) - parseInt(b[2]));
    for (let m of match) {
      builder += m[3];
    }
    return JSON.parse(JSON.parse(`"${builder}"`));
  }
  static store(id: string) {
    for (let m of this.match()) {
      if (m[1] === id) score.reset(`"${m[0]}"`);
    }

    let str = JSON.stringify(this.stored[id]);
    const chunks = (str.length / this.maxStoreLength);
    for (let i = 0; i < chunks; i++) {
      const seg = i.toString().padStart(this.segmentDigitCount, "0");
      const data = JSON.stringify(str.slice(0, this.maxStoreLength)).slice(1, -1);
      const target = `"<$mbc;id=${id};seg=${seg};data=${data};/>"`;
      score.set(target, i);
      str = str.slice(this.maxStoreLength);
    }
  }

  private _id: string;
  get id() {
    return this._id;
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

  save() {
    if (!DataBase.stored[this.id]) DataBase.stored[this.id] = {}
    const d = DataBase.stored[this.id];
    d.collections = Array.from(this._collections.values()).map(v => v.toSave());
    DataBase.store(this.id);
  }
  load() {
    if (!DataBase.stored[this.id]) return;
    const d = DataBase.stored[this.id];
    if (d.collections) {
      for (let c of d.collections) {
        c = Collection.fromSave(c);
        this._collections.set(c.id, c);
      }
    }
    DataBase.stored[this.id] = DataBase.fetch(this.id);
  }

  constructor(id: string) {
    if (id.includes(';')) throw new Error("DataBase identifier cannot contain ';'")
    this._id = id;
    this.load();
  }
}

// let d = new DataBase('testCollections');
// const c = new Collection('test', {
//   id: FieldTypes.String,
// });
// d.addCollection(c);
// let i = 0;
// world.events.chat.subscribe((evd) => {
//   if (evd.message === '0') DataBase.stored = DataBase.fetch();
//   else if (evd.message === 'new') {
//     const doc = c.createDocument(`doc${i}`);
//     doc
//     d.save();
//   }
//   else DataBase.store();
//   console.log(DataBase.stored);
// })