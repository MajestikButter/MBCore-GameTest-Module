export abstract class Field <type extends string = string, data extends any = any> {
  private _type: type;
  get type() {
    return this._type;
  }
  protected _data: data;
  
  get value() {
    return this._data;
  }

  set value(v: data) {
    if (typeof v !== this.type) throw new Error(`typeof ${typeof v} does not match type ${this.type}`)
    this._data = v;
  }

  static fromSave?(data: {type: string; data: any}): any

  static toSave?(): {
    type: string,
  }

  toSave() {
    return {
      type: this.type,
      data: this._data,
    }
  }

  constructor(type: type, data: data) {
    this._type = type;
    this._data = data;
  }
}