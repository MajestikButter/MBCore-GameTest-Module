import { Field } from "./Field";
import { FieldType } from "../../../types/DataBase";

export class MapField extends Field<"map", { [key: string]: FieldType }> {
  get value(): undefined {
    throw new Error("Cannot get the value of a MapField");
    return undefined;
  }
  set value(v) {
    throw new Error("Cannot set the value of a MapField");
  }

  get(key: string) {
    return this._data[key];
  }

  set(key: string, value: FieldType) {
    this._data[key] = value;
  }

  constructor() {
    super("map", {});
  }

  // @ts-expect-error
  toSave() {
    const data: { [k: string]: any } = {};
    for (let k in this._data) {
      data[k] = this._data[k].toSave();
    }
    return {
      type: "map",
      data,
    };
  }

  static fromSave(data: { type: string; data: any }) {
    const n = new this();
    n._data = data.data;
    return n;
  }

  static toSave() {
    return {
      type: "map",
    };
  }
}
