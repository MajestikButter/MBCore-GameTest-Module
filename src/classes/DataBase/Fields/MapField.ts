// @ts-nocheck
import { Field } from "./Field";
import { schema } from "../Collection";
import { NumberField } from "./NumberField";
import { BooleanField } from "./BooleanField";
import { StringField } from "./StringField";
import { Debug } from "mbcore-gametest/src/classes/Debug";

type instancify<o extends schema> = {
  [k in keyof o]: o[k] extends any[] ? MapField<o[k][1]> : o[k]['prototype']
}
type toObject<o extends schema> = {
  [k in keyof o]: o[k] extends any[] ? toObject<o[k][1]> : o[k]['prototype']['value']
}

type data = {[k: string]:{type:'string',data:string}|{type:'number',data:number}|{type:'boolean',data:boolean}|{type:'map',data:data}}

export class MapField<mapData extends schema = {}> extends Field<"map", MapField<mapData>> {
  get value() {
    return this;
  }
  set value(v) {
    throw new Error("Cannot set the value of a MapField");
  }

  // @ts-expect-error
  get<key extends keyof this['_mapData']>(key: key): this['_mapData'][key]['value'] {
    // @ts-expect-error
    return this._mapData[key].value;
  }

  // @ts-expect-error
  set<key extends keyof this['_mapData']>(key: key, value: this['_mapData'][key]['value']) {
    // @ts-expect-error
    this._mapData[key].value = value;
  }

  keys() {
    return Object.keys(this._mapData) as (keyof this['_mapData'])[];
  }

  toObject(): toObject<mapData> {
    const getVal = (v: any) => {
      if (v instanceof MapField) {
        return v.toObject();
      } else {
        return v.value;
      }
    }
    const o: any = {};
    for (let k in this._mapData) {
      o[k] = getVal(this._mapData[k]);
    }
    return o;
    // const getVal = (o: any) => {
    //   if (typeof o !== 'object') return o;
    //   type objectT = {[k:string]:string|number|boolean|objectT}
    //   const a: objectT = {}
    //   for (let k in o['_mapData']) {
    //     a[k] = getVal(o[k].value);
    //   }
    //   return a;
    // }
    // return getVal(this._mapData);
  }

  constructor(mapFields: mapData) {
    super("map", undefined);
    const md: any = {};
    for (let k in mapFields) {
      if (Array.isArray(mapFields[k])) {
        md[k] = new mapFields[k][0](mapFields[k][1])
      } else md[k] = new mapFields[k]();
    }
    this._mapData = md;
  }

  // _mapData: {
  //   [prop in keyof mapData]: mapData[prop]['prototype']
  // };
  _mapData: instancify<mapData>;

  // @ts-expect-error
  toSave() {
    const data: data = {};
    for (let k in this._mapData) {
      data[k] = this._mapData[k].toSave();
    }
    return {
      type: "map",
      data,
    };
  }

  static fromSave(data: data) {
    const d: any = {}
    for (let k in data.data) {
      switch (data.data[k].type) {
        case 'number': {
          d[k] = NumberField.fromSave(data.data[k]);
          break;
        }
        case 'string': {
          d[k] = StringField.fromSave(data.data[k]);
          break;
        }
        case 'boolean': {
          d[k] = BooleanField.fromSave(data.data[k]);
          break;
        }
        case 'map': {
          d[k] = MapField.fromSave(data.data[k]);
          break;
        }
      }
    }
    const n = new this({});
    n._mapData = d;
    return n;
  }

  static toSave() {
    return {
      type: "map",
    };
  }
}
