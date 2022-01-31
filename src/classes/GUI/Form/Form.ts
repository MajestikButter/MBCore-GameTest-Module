import {
  ActionFormData,
  ActionFormResponse,
  MessageFormData,
  MessageFormResponse,
  ModalFormData,
  ModalFormResponse,
} from "mojang-minecraft-ui";
import { MBCPlayer } from "../../MBCPlayer.js";

interface nativeResponseType {
  action: ActionFormResponse;
  message: MessageFormResponse;
  modal: ModalFormResponse;
}
interface nativeDataType {
  action: ActionFormData;
  message: MessageFormData;
  modal: ModalFormData;
}
type nativeResponseTypes = nativeResponseType[keyof nativeResponseType];

export abstract class Form<formType extends keyof nativeResponseType> {
  /**
   * The type of Form
   */
  type: formType;

  constructor(type: formType) {
    this.type = type;
  }

  protected abstract createForm(): nativeDataType[formType];

  protected abstract complete(
    plr: MBCPlayer,
    response: nativeResponseTypes,
    onCancel?: (plr: MBCPlayer) => void
  ): void;

  protected setDef(curr: any, to: any) {
    return curr === undefined ? to : curr;
  }

  send(
    plr: MBCPlayer | MBCPlayer[],
    onCancel?: (plr: MBCPlayer) => void,
    onTimeout?: (plr: MBCPlayer) => void
  ) {
    if (Array.isArray(plr)) {
      plr.forEach((v) => this.send(v));
    } else {
      this.createForm()
        .show(plr.player)
        .then((v) => this.complete(plr, v, onCancel))
        .catch(() => onTimeout(plr));
    }
  }
}
