export class EventListener {
  eventName: string;
  callback: (...args: any[]) => any;
  type: "once" | "always";

  constructor(
    name: string,
    type: "once" | "always",
    callback: (...args: any[]) => any
  ) {
    this.eventName = name;
    this.type = type;
    this.callback = callback;
  }
}
export class EventEmitter {
  private events: {
    [event: string]: {
      listeners: EventListener[];
    };
  } = {};

  private addListener(
    eventName: string,
    eventCallback: (...args: any[]) => any,
    type: "once" | "always"
  ) {
    let event = this.events[eventName];
    const listener = new EventListener(eventName, type, eventCallback);
    if (!event) {
      event = {
        listeners: [listener],
      };
    } else {
      event.listeners.push(listener);
    }
    this.events[eventName] = event;
    return listener;
  }

  private removeListener(listener: EventListener) {
    let event = this.events[listener.eventName];
    const index = event.listeners.indexOf(listener);
    if (index < 0) return;

    event.listeners.splice(index);
  }

  /**
   * Gets all listeners attached to the specified event
   * @param eventName The event to listen for
   */
  listeners(eventName: string) {
    let event = this.events[eventName];
    if (!event) return [];
    return event.listeners;
  }

  /**
   * Listens for the specified event
   * @param eventName The event to listen for
   * @param eventCallback The function to call when the specified event is fired
   */
  on(eventName: string, eventCallback: (...args: any[]) => any) {
    return this.addListener(eventName, eventCallback, "always");
  }

  /**
   * Listens for the specified event once, then stops listening
   * @param eventName The event to listen for
   * @param eventCallback The function to call when the specified event is fired
   */
  once(eventName: string, eventCallback: (...args: any[]) => any) {
    return this.addListener(eventName, eventCallback, "once");
  }

  /**
   * Stops listening to an event
   * @param eventListener 
   */
  off(eventListener: EventListener) {
    this.removeListener(eventListener);
  }

  /**
   * Fires all listeners attached to the specified event
   * @param eventName The event to fire on
   * @param args Arguments passed to the listener callbacks
   */
  emit(eventName: string, ...args: any[]) {
    let event = this.events[eventName];
    if (!event) {
      return;
    }

    for (let i = 0; i < event.listeners.length; i++) {
      let listener = event.listeners[i];
      try {
        listener.callback(...args);
      } catch (err) {
        console.error(err);
        throw err;
      }
    }

    for (let i = event.listeners.length - 1; i >= 0; i--) {
      let listener = event.listeners[i];
      if (listener.type == "once") {
        this.removeListener(listener);
      }
    }
  }
}
