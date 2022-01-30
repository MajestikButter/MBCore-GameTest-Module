import { MessageFormData, MessageFormResponse } from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";
import { Form } from "./Form.js";
import { Button } from "./Components/Button.js";

export class MessageForm extends Form<"message"> {
  text: string;
  title: string;
  buttons: [Button, Button];

  constructor(data: {
    text?: string;
    title?: string;
    buttons?: MessageForm["buttons"];
  }) {
    super("message");

    this.text = data.text ?? "";
    this.title = data.title ?? "Modal Form";
    this.buttons = data.buttons ?? [new Button({}), new Button({})];
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

  send(plr: MBCPlayer | MBCPlayer[], onTimeout: (plr: MBCPlayer) => void) {
    super.send(plr, () => {}, onTimeout);
  }
}
