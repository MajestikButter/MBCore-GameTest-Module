type formComponents = "slider" | "button" | "textbox" | "dropdown" | "toggle";

export class FormComponent<type extends formComponents> {
  /**
   * Type of this FormComponent
   */
  type: type;

  constructor(type: type) {
    this.type = type;
  }
}
