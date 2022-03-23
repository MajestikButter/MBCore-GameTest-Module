import { CommandHandler } from "../CommandHandler";
import { Scoreboard } from "../Scoreboard";
import { Collection } from './Collection';

const score = Scoreboard.initialize('mbcDataBases');
export class DataBase {
  static regex = /<\$mbc;id=(.*?);data=(.*?);\/>/g
  static maxStoreLength = 5;
  static stored = this.fetch();

  static match() {
    const str: string = CommandHandler.run('scoreboard players list').result.statusMessage.split('\n')[1];
    if (!str) return [];
    return Array.from(str.matchAll(this.regex));
  }
  static fetch() {
    const res: {
      [id: string]: {[key: string]: any};
    } = {};
    const builder: {
      [id: string]: string
    } = {}
    const match = this.match();
    match.sort((a, b) => score.get(`"${a[0]}"`) - score.get(`"${b[0]}"`));
    for (let m of match) {
      if (!builder[m[1]]) builder[m[1]] = m[2];
      else builder[m[1]] += m[2];
    }
    for (let id in builder) {
      res[id] = JSON.parse(JSON.parse(`"${builder[id]}"`));
    }
    return res;
  }
  static store() {
    for (let m of this.match()) {
      score.reset(`"${m[0]}"`);
    }
    for (let id in this.stored) {
      const data = this.stored[id];
      let str = JSON.stringify(data);
      const chunks = (str.length / this.maxStoreLength);
      for (let i = 0; i < chunks; i++) {
        score.set(`"<$mbc;id=${id};data=${JSON.stringify(str.slice(0, this.maxStoreLength)).slice(1, -1)};/>"`, i);
        str = str.slice(this.maxStoreLength);
      }
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
  getCollection(id: string) {
    return this._collections.get(id);
  }
  addCollection(collection: Collection) {
    return this._collections.set(collection.id, collection);
  }

  save() {
    if (!DataBase.stored[this.id]) DataBase.stored[this.id] = {}
    const d = DataBase.stored[this.id];
    d.collections = Array.from(this._collections.values()).map(v => v.toSave());
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