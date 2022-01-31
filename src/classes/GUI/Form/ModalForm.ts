import { ModalFormData, ModalFormResponse } from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";
import { DropDown } from "./Components/DropDown.js";
import { Slider } from "./Components/Slider.js";
import { TextBox } from "./Components/TextBox.js";
import { Toggle } from "./Components/Toggle.js";
import { Form } from "./Form.js";

export type ModalComponent = DropDown | Slider | TextBox | Toggle;
export type ModalResponse = {
  [componentId: string]:
    | { value: string; index: number }
    | string
    | number
    | boolean;
};

export class ModalForm extends Form<"modal"> {
  /**
   * The texture path to a texture from a resource pack that will be used as this form's icon
   */
  icon?: string;
  /**
   * The title of this form, this is displayed at the top of the window
   */
  title: string;

  private components: { id: string; component: ModalComponent }[] = [];

  /**
   * Creates a new modal form with the provided data
   * @param data The data to build the modal form with
   */
  constructor(data: {
    /**
     * The texture path to a texture from a resource pack that will be used as this form's icon
     */
    icon?: string;
    /**
     * The title of this form, this is displayed at the top of the window
     */
    title?: string;
    /**
     * The components to be displayed and used in the modal form
     */
    components?: ModalForm["components"];
  }) {
    super("modal");
    this.icon = data.icon;
    this.title = this.setDef(data.title, "Modal Form");
    this.components = this.setDef(data.components, []);
  }

  /**
   * Adds a form component to this modal form
   * @param id The id of this component, this will be used in the callback response
   * @param component The form component to add to this modal form
   * @example
   * ```ts
   * let modal = new ModalForm({
   *  title: 'Example Modal Form'
   * });
   *
   * modal.addComponent('toggleExample', new Toggle({}));
   * ```
   */
  addComponent(id: string, component: ModalComponent) {
    this.removeComponent(id);
    this.components.push({ id, component });
  }
  /**
   * Removes a form component from this modal form
   * @param id The id of the component to remove
   * @example
   * ```ts
   * let modal = new ModalForm({
   *  title: 'Example Modal Form'
   * });
   *
   * modal.removeComponent('toggleExample');
   * ```
   */
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

  /**
   * Sends this modal form to a player or array of players
   * @param plr The player(s) to send this form to
   * @param callback A callback that is called when a valid response is received
   * @param onCancel A callback that is called when the form is closed
   * @param onTimeout A callback that is called when the form times out
   * @example
   * ```ts
   * new ModalForm({
   *  components: {
   *    title: 'Example Modal Form',
   *    icon: 'textures/items/stick',
   *    components: [
   *      {
   *        id: 'sliderId',
   *        component: new Slider({
   *          label: 'Example Slider',
   *          minVal: 10,
   *          maxVal: 200,
   *        }),
   *      },
   *      {
   *        id: 'textboxId',
   *        component: new TextBox({
   *          label: 'Example Text Field',
   *          placeholder: 'Example Placeholder Text',
   *        }),
   *      },
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
