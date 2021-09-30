const ProxyTemplate = {
  get: function (obj: any, prop: string) {
    if (typeof obj.onPropertyGet === "function") {
      let getFunc = obj.onPropertyGet.apply(obj, [prop]);
      if (getFunc instanceof Override) return getFunc.val;
    }

    return typeof obj[prop] !== "function"
      ? obj[prop]
      : function (...args: any[]) {
          if (typeof obj.onPropertyCall === "function")
            obj.onPropertyCall.apply(obj, [prop, ...args]);
          return obj[prop].apply(obj, args);
        };
  },
  set: function (obj: any, prop: string, val: any) {
    if (typeof obj.onPropertySet !== "function")
      return Reflect.set(obj, prop, val);

    let funcResult = obj.onPropertySet.apply(obj, [prop, val]);
    return !funcResult
      ? false
      : funcResult === -1
      ? true
      : Reflect.set(obj, prop, val);
  },
};

export class Override {
  val: any;
  constructor(val: any) {
    this.val = val;
  }
}

export default ProxyTemplate;
