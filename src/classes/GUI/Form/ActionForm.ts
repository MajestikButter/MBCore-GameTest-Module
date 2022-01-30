import { ActionFormData, ActionFormResponse } from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";
import { Form } from "./Form";
import { Button } from "./Components/Button";

export class ActionForm extends Form<"action"> {
  text: string;
  title: string;
  buttons: {
    id: string;
    button: Button;
  }[];

  constructor(data: {
    text?: string;
    title?: string;
    buttons?: ActionForm["buttons"];
  }) {
    super("action");
    this.text = data.text;
    this.title = data.title ?? "Modal Form";
    this.buttons = data.buttons ?? [];
  }

  addButton(id: string, button: Button) {
    this.removeButton(id);
    this.buttons.push({ id, button });
  }
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
}
