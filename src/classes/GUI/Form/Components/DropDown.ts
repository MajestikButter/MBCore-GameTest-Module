import { FormComponent } from "./FormComponent.js";

export class DropDown extends FormComponent<"dropdown"> {
  /**
   * The label of the dropdown
   */
  label: string;
  /**
   * The choices in the dropdown
   */
  options: string[];
  /**
   * Index of the default option in the array
   */
  default: number;

  /**
   * Creates a new drop-down with the provided data
   * @param data The data to build the drop-down with
   */
  constructor(data: {
    /**
     * The label of the dropdown
     * @default "Drop-down"
     */
    label?: string;
    /**
     * The choices in the dropdown
     */
    options: string[];
    /**
     * Index of the default option in the array
     * @default 0
     */
    default?: number;
  }) {
    super("dropdown");

    this.label = this.setDef(data.label, "Drop-down");
    this.options = data.options;
    this.default = this.setDef(data.default, 0);
  }
}
