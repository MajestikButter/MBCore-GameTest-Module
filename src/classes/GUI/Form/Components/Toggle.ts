import { FormComponent } from "./FormComponent.js";

export class Toggle extends FormComponent<"toggle"> {
  /**
   * The label of the toggle
   * @default "Toggle"
   */
  label: string;
  /**
   * The default state for the toggle
   * @default false
   */
  default: boolean;

  /**
   * Creates a new toggle with the provided data
   * @param data The data to build the toggle with
   */
  constructor(data: {
    /**
     * The label of the toggle
     * @default "Toggle"
     */
    label?: string;
    /**
     * The default state for the toggle
     * @default false
     */
    default?: boolean;
  }) {
    super("toggle");

    this.label = this.setDef(data.label, 'Toggle');
    this.default = this.setDef(data.default, false);
  }
}
