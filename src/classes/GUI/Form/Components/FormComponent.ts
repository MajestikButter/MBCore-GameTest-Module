type formComponents = "slider" | "button" | "textbox" | "dropdown" | "toggle";

export class FormComponent<type extends formComponents> {
  /**
   * The type of FormComponent
   */
  type: type;

  protected setDef(curr: any, to: any) {
    return curr === undefined ? to : curr;
  }

  constructor(type: type) {
    this.type = type;
  }
}
