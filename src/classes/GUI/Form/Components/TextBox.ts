import { FormComponent } from "./FormComponent.js";

export class TextBox extends FormComponent<"textbox"> {
  label: string;
  placeholder: string;
  default: string;

  constructor(data: {
    label?: string;
    placeholder?: string;
    default?: string;
  }) {
    super("textbox");

    this.label = data.label ?? "Text Box";
    this.placeholder = data.placeholder ?? "Placeholder";
    this.default = data.default;
  }

  toArgs() {
    return [this.label, this.placeholder, this.default];
  }
}
