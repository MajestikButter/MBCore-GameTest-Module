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

  constructor(data: {
    /**
     * The label of the dropdown
     * @default Text Label
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
    
    this.label = data.label ?? "Drop-down";
    this.options = data.options;
    this.default = data.default ?? 0;
  }
}
