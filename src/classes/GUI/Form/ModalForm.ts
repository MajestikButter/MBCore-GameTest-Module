import { ModalFormData, ModalFormResponse } from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";
import { DropDown } from "./Components/DropDown.js";
import { Slider } from "./Components/Slider.js";
import { TextBox } from "./Components/TextBox.js";
import { Toggle } from "./Components/Toggle.js";
import { Form } from "./Form.js";

type ModalComponent = DropDown | Slider | TextBox | Toggle;
type ModalResponse = {
  [componentId: string]:
    | { value: string; index: number }
    | string
    | number
    | boolean;
};

export class ModalForm extends Form<"modal"> {
  icon?: string;
  title: string;

  private components: { id: string; component: ModalComponent }[] = [];

  constructor(data: {
    icon?: string;
    title: string;
    components?: ModalForm["components"];
  }) {
    super("modal");
    this.icon = data.icon;
    this.title = data.title ?? "Modal Form";
    this.components = data.components ?? [];
  }

  addComponent(id: string, component: ModalComponent) {
    this.removeComponent(id);
    this.components.push({ id, component });
  }
  removeComponent(id: string) {
    this.components.filter((v) => v.id !== id);
  }

  protected createForm() {
    const form = new ModalFormData();

    if (this.icon) form.icon(this.icon);
    form.title(this.title);

    this.components.forEach((v) => {
      const comp = v.component;
      if (comp instanceof DropDown) {
        form.dropdown(comp.label, comp.options, comp.default);
      } else if (comp instanceof Slider) {
        form.slider(
          comp.label,
          comp.minVal,
          comp.maxVal,
          comp.valStep,
          comp.default
        );
      } else if (comp instanceof TextBox) {
        form.textField(comp.label, comp.placeholder, comp.default);
      } else {
        form.toggle(comp.label, comp.default);
      }
    });

    return form;
  }

  protected complete(
    plr: MBCPlayer,
    response: ModalFormResponse,
    callback?: (plr: MBCPlayer, resp: ModalResponse) => void,
    onCancel?: (plr: MBCPlayer) => void
  ): void {
    if (response.isCanceled) return onCancel(plr);

    const resp: ModalResponse = {};
    response.formValues.forEach((v, i) => {
      const comp = this.components[i];
      if (comp.component instanceof DropDown) {
        resp[comp.id] = {
          value: v,
          index: i,
        };
      } else resp[comp.id] = v;
    });
    if (callback) callback(plr, resp);
  }

  send(
    plr: MBCPlayer | MBCPlayer[],
    callback?: (plr: MBCPlayer, resp: ModalResponse) => void,
    onCancel?: (plr: MBCPlayer) => void,
    onTimeout?: (plr: MBCPlayer) => void
  ): void {
    if (Array.isArray(plr)) {
      plr.forEach((v) => this.send(v));
    } else {
      const f = this.createForm();
      f.show(plr.player)
        .then((v) => this.complete(plr, v, callback, onCancel))
        .catch(() => onTimeout(plr));
    }
  }
}
