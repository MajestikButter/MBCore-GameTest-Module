export abstract class Field <type extends string = string, data extends any = any> {
  private _id: string;
  get id() {
    return this._id;
  }
  private _type: type;
  get type() {
    return this._type;
  }
  protected _data: data;
  
  get value() {
    return this._data;
  }

  set value(v: data) {
    this._data = v;
  }

  toSave() {
    return {
      id: this.id,
      type: this.type,
      value: this.value,
    }
  }
}