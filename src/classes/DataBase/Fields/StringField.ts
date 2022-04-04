import { Field } from "./Field";

export class StringField extends Field<'string', string> {
  constructor() {
    super('string', "")
  }

  toSave() {
    return {
      type: this.type,
      data: this._data,
    }
  }

  static fromSave(data: { type: string; data: string; }) {
    const n = new this();
    n._data = data.data;
    return n;
  }
  
  static toSave() {
    return {
      type: 'string',
    }
  }
}