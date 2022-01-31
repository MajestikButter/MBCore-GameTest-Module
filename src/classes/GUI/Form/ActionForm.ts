import { ActionFormData, ActionFormResponse } from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";
import { Form } from "./Form";
import { Button } from "./Components/Button";

export class ActionForm extends Form<"action"> {
  /**
   * The body text of this action form, this is displayed below the title
   */
  text: string;
  /**
   * The title of this action form, this is displayed at the top of the window
   */
  title: string;
  /**
   * The buttons displayed in the action form, listed from top to bottom
   */
  buttons: {
    /**
     * The id of the button
     */
    id: string;
    /**
     * The button instance of the button
     */
    button: Button;
  }[];

  /**
   * Creates a new action form with the provided data
   * @param data The data to build the action form with
   */
  constructor(data: {
    /**
     * The body text of this action form, this is displayed below the title
     */
    text?: string;
    /**
     * The title of this action form, this is displayed at the top of the window
     */
    title?: string;
    /**
     * The buttons displayed in the action form, listed from top to bottom
     */
    buttons?: ActionForm["buttons"];
  }) {
    super("action");
    this.text = this.setDef(data.text, "");
    this.title = this.setDef(data.title, "Modal Form");
    this.buttons = this.setDef(data.buttons, []);
  }

  /**
   * Adds a button to this form
   * @param id The id of the button to add
   * @param button The instance of the button to add
   */
  addButton(id: string, button: Button) {
    this.removeButton(id);
    this.buttons.push({ id, button });
  }
  /**
   * Removes a button from this form
   * @param id The id of the button to remove
   */
  removeButton(id: string) {
    this.buttons.filter((v) => v.id !== id);
  }

  protected createForm() {
    const form = new ActionFormData();

    this.buttons.forEach((v) => form.button(v.button.text, v.button.icon));
    form.title(this.title);
    form.body(this.text);

    return form;
  }

  protected complete(
    plr: MBCPlayer,
    response: ActionFormResponse,
    onCancel?: (plr: MBCPlayer) => void
  ): void {
    if (response.isCanceled) return onCancel(plr);

    const button = this.buttons[response.selection];
    if (button.button.onClick) button.button.onClick(plr);
  }

  /**
   * Sends this form to a player or array of players
   * @param plr The player(s) to send this form to
   * @param onCancel A callback that is called when the form is cancelled
   * @param onTimeout A callback that is called when the form times out
   * @example
   * ```ts
   * new ActionForm({
   *  text: 'Example Body text',
   *  title: 'Example Action Form',
   *  buttons: [
   *    {
   *      id: 'button0',
   *      button: new Button({
   *        text: 'Button 0',
   *        onClick: (plr) => {
   *          plr.sendMessage('Clicked Button 0');
   *        },
   *      }),
   *    },
   *    {
   *      id: 'button1',
   *      button: new Button({
   *        text: 'Button 1',
   *        onClick: (plr) => {
   *          plr.sendMessage('Clicked Button 1');
   *        },
   *      }),
   *    },
   *    {
   *      id: 'button2',
   *      button: new Button({
   *        text: 'Button 2',
   *        onClick: (plr) => {
   *          plr.sendMessage('Clicked Button 2');
   *        },
   *      }),
   *    },
   *  ]
   * }).send(player, (plr) => {
   *  plr.sendMessage('Closed modal form via cancelation');
   * }, (plr) => {
   *  plr.sendMessage('Modal form timed out, likely due to having an existing ui open upon request');
   * });
   * ```
   */
  send(
    plr: MBCPlayer | MBCPlayer[],
    onCancel?: (plr: MBCPlayer) => void,
    onTimeout?: (plr: MBCPlayer) => void
  ) {
    super.send(plr, onCancel, onTimeout);
  }
}
