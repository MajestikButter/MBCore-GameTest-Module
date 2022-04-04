import { Field } from "./Field.js";

export class NumberField extends Field<'number', number> {
  constructor() {
    super('number', 0)
  }

  toSave() {
    return {
      type: this.type,
      data: this._data,
    }
  }

  static fromSave(data: { type: string; data: number; }) {
    const n = new this();
    n._data = data.data;
    return n;
  }

  static toSave() {
    return {
      type: 'number',
    }
  }
}