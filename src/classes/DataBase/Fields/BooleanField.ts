import { Field } from "./Field";

export class BooleanField extends Field<'boolean', boolean> {
  constructor() {
    super('boolean', false)
  }

  toSave() {
    return {
      type: this.type,
      data: this._data,
    }
  }

  static fromSave(data: { type: string; data: boolean; }) {
    const n = new this();
    n._data = data.data;
    return n;
  }
  
  static toSave() {
    return {
      type: 'boolean',
    }
  }
}