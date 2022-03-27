declare module "mojang-minecraft-ui" {
  import * as mojangminecraft from "mojang-minecraft";
  /**
  Builds a simple player form with buttons that let the player take action.
  */
  export class ActionFormData {
    /**
    Creates a new modal form builder.
    */
    constructor();
    /**
    Method that sets the body text for the modal form.
    #### **Parameters**
    - **bodyText**: *string*
    
    */
    body(bodyText: string): ActionFormData;
    /**
    Adds a button to this form with an icon from a resource pack.
    #### **Parameters**
    - **text**: *string*
    - **iconPath**?: *string* = `null`
    
    */
    button(text: string, iconPath?: string): ActionFormData;
    /**
    Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.
    #### **Parameters**
    - **player**: *mojang-minecraft.Player*
    
    Player to show this dialog to.
    
    */
    show(player: mojangminecraft.Player): Promise<ActionFormResponse>;
    /**
    This builder method sets the title for the modal dialog.
    #### **Parameters**
    - **titleText**: *string*
    
    */
    title(titleText: string): ActionFormData;
  }
  /**
  Returns data about the player results from a modal action form.
  */
  export class ActionFormResponse extends FormResponse {
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
    /**
    Returns the index of the button that was pushed.
    */
    readonly "selection": number;
  }
  /**
  Base type for a form response.
  */
  export class FormResponse {
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
  }
  /**
  Builds a simple two-button modal dialog.
  */
  export class MessageFormData {
    /**
    Creates a new modal form builder.
    */
    constructor();
    /**
    Method that sets the body text for the modal form.
    #### **Parameters**
    - **bodyText**: *string*
    
    */
    body(bodyText: string): MessageFormData;
    /**
    Method that sets the text for the first button of the dialog.
    #### **Parameters**
    - **text**: *string*
    
    */
    button1(text: string): MessageFormData;
    /**
    This method sets the text for the second button on the dialog.
    #### **Parameters**
    - **text**: *string*
    
    */
    button2(text: string): MessageFormData;
    /**
    Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.
    #### **Parameters**
    - **player**: *mojang-minecraft.Player*
    
    Player to show this dialog to.
    
    */
    show(player: mojangminecraft.Player): Promise<MessageFormResponse>;
    /**
    This builder method sets the title for the modal dialog.
    #### **Parameters**
    - **titleText**: *string*
    
    */
    title(titleText: string): MessageFormData;
  }
  /**
  Returns data about the player results from a modal message form.
  */
  export class MessageFormResponse extends FormResponse {
    /**
    If true, the form was canceled by the player (e.g., they selected the pop-up X close button).
    */
    readonly "isCanceled": boolean;
    /**
    Returns the index of the button that was pushed.
    */
    readonly "selection": number;
  }
  /**
  Used to create a fully customizable pop-up form for a player.
  */
  export class ModalFormData {
    /**
    Creates a new modal form builder.
    */
    constructor();
    /**
    Adds a dropdown with choices to the form.
    #### **Parameters**
    - **label**: *string*
    - **options**: *string*[]
    - **defaultValueIndex**?: *number* = `null`
    
    */
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    /**
    Adds an icon to the form using a graphic resource from a resource pack.
    #### **Parameters**
    - **iconPath**: *string*
    
    */
    icon(iconPath: string): ModalFormData;
    /**
    Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.
    #### **Parameters**
    - **player**: *mojang-minecraft.Player*
    
    Player to show this dialog to.
    
    */
    show(player: mojangminecraft.Player): Promise<ModalFormResponse>;
    /**
    Adds a numeric slider to the form.
    #### **Parameters**
    - **label**: *string*
    - **minimumValue**: *number*
    - **maximumValue**: *number*
    - **valueStep**: *number*
    - **defaultValue**?: *number* = `null`
    
    */
    slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData;
    /**
    Adds a textbox to the form.
    #### **Parameters**
    - **label**: *string*
    - **placeholderText**: *string*
    - **defaultValue**?: *string* = `null`
    
    */
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    /**
    This builder method sets the title for the modal dialog.
    #### **Parameters**
    - **titleText**: *string*
    
    */
    title(titleText: string): ModalFormData;
    /**
    Adds a toggle checkbox button to the form.
    #### **Parameters**
    - **label**: *string*
    - **defaultValue**?: *boolean* = `null`
    
    */
    toggle(label: string, defaultValue?: boolean): ModalFormData;
  }
  /**
  Returns data about player responses to a modal form.
  */
  export class ModalFormResponse extends FormResponse {
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