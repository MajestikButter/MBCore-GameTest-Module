import { FormComponent } from "./FormComponent.js";

export class Slider extends FormComponent<"slider"> {
  label: string;
  default: number;
  minVal: number;
  maxVal: number;
  valStep: number;

  constructor(data: {
    label?: string;
    minVal: number;
    maxVal: number;
    valStep?: number;
    default?: number;
  }) {
    super("slider");
    
    this.label = data.label ?? "Slider";
    this.minVal = data.minVal;
    this.maxVal = data.maxVal;
    this.valStep = data.valStep ?? 1;
    this.default = data.default ?? this.minVal;
  }
}
