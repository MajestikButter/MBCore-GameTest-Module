declare module "mojang-minecraft-ui" {
  import * as mojangminecraft from "mojang-minecraft";
  export class ActionFormData {
    constructor();
    body(bodyText: string): ActionFormData;
    button(text: string, iconPath?: string): ActionFormData;
    show(player: mojangminecraft.Player): Promise<ActionFormResponse>;
    title(titleText: string): ActionFormData;
  }
  export class ActionFormResponse {
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
    /**
    Returns the index of the button that was pushed.
    */
    readonly "selection": number;
  }
  export class FormResponse {
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
  }
  export class MessageFormData {
    constructor();
    body(bodyText: string): MessageFormData;
    button1(text: string): MessageFormData;
    button2(text: string): MessageFormData;
    show(player: mojangminecraft.Player): Promise<MessageFormResponse>;
    title(titleText: string): MessageFormData;
  }
  export class MessageFormResponse {
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
    /**
    Returns the index of the button that was pushed.
    */
    readonly "selection": number;
  }
  export class ModalFormData {
    constructor();
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    icon(iconPath: string): ModalFormData;
    show(player: mojangminecraft.Player): Promise<ModalFormResponse>;
    slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData;
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    title(titleText: string): ModalFormData;
    toggle(label: string, defaultValue?: boolean): ModalFormData;
  }
  export class ModalFormResponse {
    /**
    An ordered set of values based on the order of controls specified by ModalFormData.
    */
    readonly "formValues": any[];
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
  }

}