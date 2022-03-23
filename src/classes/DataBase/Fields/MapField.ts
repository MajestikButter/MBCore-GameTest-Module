import { Field } from "./Field";
import { FieldType } from '../../../types/DataBase';

export class MapField extends Field<'map', {[key: string]: FieldType}> {
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
}
