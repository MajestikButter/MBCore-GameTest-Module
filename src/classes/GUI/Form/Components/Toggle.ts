import { FormComponent } from "./FormComponent.js";

export class Toggle extends FormComponent<"toggle"> {
  label: string;
  default: boolean;

  constructor(data: {
    label?: string;
    default?: boolean;
  }) {
    super("toggle");

    this.label = data.label ?? 'Toggle';
    this.default = data.default ?? false;
  }
}
