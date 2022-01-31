import { MessageFormData, MessageFormResponse } from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";
import { Form } from "./Form.js";
import { Button } from "./Components/Button.js";

export class MessageForm extends Form<"message"> {
  /**
   * The body text of the message form, this is displayed below the title
   */
  text: string;
  /**
   * The title of the message form, this is displayed at the top of the window
   */
  title: string;
  /**
   * The 2 buttons displayed in the form, listed from top to bottom
   */
  buttons: [Button, Button];

  /**
   * Creates a new message form with the provided data
   * @param data The data to build the message form with
   */
  constructor(data: {
    text?: string;
    title?: string;
    buttons?: MessageForm["buttons"];
  }) {
    super("message");

    this.text = this.setDef(data.text, "");
    this.title = this.setDef(data.title, "Modal Form");
    this.buttons = this.setDef(data.buttons, [new Button({}), new Button({})]);
  }

  protected createForm() {
    const form = new MessageFormData();

    form.button1(this.buttons[0].text);
    form.button2(this.buttons[1].text);
    form.title(this.title);
    form.body(this.text);

    return form;
  }

  protected complete(
    plr: MBCPlayer,
    response: MessageFormResponse,
    onCancel?: (plr: MBCPlayer) => void
  ): void {
    if (response.isCanceled) return onCancel(plr);

    const button = this.buttons[!response.selection ? 1 : 0];
    if (button.onClick) button.onClick(plr);
  }

  /**
   * Sends this message form to a player or array of players
   * @param plr The player(s) to send this form to
   * @param onTimeout A callback that is called when the form times out
   * @example
   * ```ts
   * new MessageForm({
   *  components: {
   *    title: 'Example Message Form',
   *    text: 'Example Body Text',
   *    buttons: [
   *      new Button({
   *        text: 'Accept',
   *      }),
   *      new Button({
   *        text: 'Decline',
   *      }),
   *    ]
   *  }
   * }).send(player, (plr, resp) => {
   *  plr.sendMessage(Debug.format(resp));
   *  if (resp.sliderId > 100) plr.sendMessage('Slider value is over 100');
   * }, (plr) => {
   *  plr.sendMessage('Closed modal form via cancelation');
   * }, (plr) => {
   *  plr.sendMessage('Modal form timed out, likely due to having an existing ui open upon request');
   * });
   * ```
   */
  send(plr: MBCPlayer | MBCPlayer[], onTimeout: (plr: MBCPlayer) => void) {
    super.send(plr, () => {}, onTimeout);
  }
}
