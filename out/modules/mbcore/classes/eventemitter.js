class EventListener {
    constructor(name, type, callback) {
        this.eventName = name;
        this.type = type;
        this.callback = callback;
    }
}
export default class EventEmitter {
    constructor() {
        this.events = {};
    }
    addListener(eventName, eventCallback, type) {
        let event = this.events[eventName];
        if (!event) {
            event = {
                listeners: [new EventListener(eventName, type, eventCallback)],
            };
        }
        else {
            event.listeners.push(new EventListener(eventName, type, eventCallback));
        }
        this.events[eventName] = event;
    }
    removeListener(listener) {
        let event = this.events[listener.eventName];
        const index = event.listeners.indexOf(listener);
        if (index < 0)
            return;
        event.listeners.splice(index);
    }
    listeners(eventName) {
        let event = this.events[eventName];
        if (!event)
            return [];
        return event.listeners;
    }
    on(eventName, eventCallback) {
        this.addListener(eventName, eventCallback, "always");
    }
    once(eventName, eventCallback) {
        this.addListener(eventName, eventCallback, "once");
    }
    emit(eventName, ...args) {
        let event = this.events[eventName];
        if (!event) {
            return;
        }
        for (let i = 0; i < event.listeners.length; i++) {
            let listener = event.listeners[i];
            try {
                listener.callback(...args);
            }
            catch (err) {
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
