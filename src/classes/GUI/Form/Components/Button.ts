import { FormComponent } from "./FormComponent.js";
import { MBCPlayer } from "../../../MBCPlayer.js";

export class Button extends FormComponent<"button"> {
  /**
   * The texture path to a texture from a resource pack that will be used as this button's icon
   */
  icon?: string;
  /**
   * The text that will appear on this button
   * @default Button
   */
  text: string;
  /**
   * A callback that will be executed upon this button being clicked
   */
  onClick?: (plr: MBCPlayer) => void;

  /**
   * Creates a new button with the provided data
   * @param data The data to build the button with
   */
  constructor(data: {
    /**
     * The texture path to a texture from a resource pack that will be used as this button's icon
     */
    icon?: string;
    /**
     * The text that will appear on this button
     * @default "Button"
     */
    text?: string;
    /**
     * A callback that will be executed upon this button being clicked
     */
    onClick?: (plr: MBCPlayer) => void;
  }) {
    super("button");

    this.text = this.setDef(data.text, "Button");
    this.icon = data.icon;
    this.onClick = data.onClick;
  }
}
