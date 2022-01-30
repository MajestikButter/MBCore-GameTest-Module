import { FormComponent } from "./FormComponent.js";
import { MBCPlayer } from "../../../MBCPlayer.js";

export class Button extends FormComponent<'button'> {
  /**
   * The texture path to a texture from a resource pack
   */
  icon?: string;
  /**
   * The text that will appear on this button
   */
  text: string;
  /**
   * A callback that will be executed upon this button being clicked
   */
  onClick?: (plr: MBCPlayer) => void;

  constructor(data: {
    /**
     * The texture path to a texture from a resource pack
     */
    icon?: string;
    /**
     * The text that will appear on this button
     * @default Button
     */
    text?: string;
    /**
     * A callback that will be executed upon this button being clicked
     */
    onClick?: (plr: MBCPlayer) => void;
  }) {
    super("button");

    this.text = data.text ?? "Button";
    this.icon = data.icon;
    this.onClick = data.onClick;
  }
}
