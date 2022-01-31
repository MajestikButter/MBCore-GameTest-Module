import { FormComponent } from "./FormComponent.js";

export class TextBox extends FormComponent<"textbox"> {
  /**
   * The label of this text box
   * @default "Text Box"
   */
  label: string;
  /**
   * The placeholder text of this text box
   * @default "Placeholder"
   */
  placeholder: string;
  /**
   * The default value of this text box
   */
  default: string;

  /**
   * Creates a new text box with the provided data
   * @param data The data to build the text box with
   */
  constructor(data: {
    /**
     * The label of this text box
     * @default "Text Box"
     */
    label?: string;
    /**
     * The placeholder text of this text box
     * @default "Placeholder"
     */
    placeholder?: string;
    /**
     * The default value of this text box
     */
    default?: string;
  }) {
    super("textbox");

    this.label = this.setDef(data.label, "Text Box");
    this.placeholder = this.setDef(data.placeholder, "Placeholder");
    this.default = data.default;
  }
}
