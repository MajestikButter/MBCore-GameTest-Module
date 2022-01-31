import { FormComponent } from "./FormComponent.js";

export class Slider extends FormComponent<"slider"> {
  /**
   * The label of this slider
   * @default "Slider"
   */
  label: string;
  /**
   * The default value of this slider
   * @default this.minVal
   */
  default: number;
  /**
   * The minimum value of this slider
   */
  minVal: number;
  /**
   * The maximum value of this slider
   */
  maxVal: number;
  /**
   * The step between each valid value
   * @default 1
   */
  valStep: number;

  /**
   * Creates a new slider with the provided data
   * @param data The data to build the slider with
   */
  constructor(data: {
    /**
     * The label of this slider
     * @default "Slider"
     */
    label?: string;
    /**
     * The minimum value of this slider
     */
    minVal: number;
    /**
     * The maximum value of this slider
     */
    maxVal: number;
    /**
     * The step between each valid value
     * @default 1
     */
    valStep?: number;
    /**
     * The default value of this slider
     * @default this.minVal
     */
    default?: number;
  }) {
    super("slider");

    this.label = this.setDef(data.label, "Slider");
    this.minVal = data.minVal;
    this.maxVal = data.maxVal;
    this.valStep = this.setDef(data.valStep, 1);
    this.default = this.setDef(data.default, this.minVal);
  }
}
