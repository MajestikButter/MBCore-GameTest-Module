import EventEmitter from "./eventemitter.js";

// Events interface
interface Events extends EventEmitter {}

// Create and export emitter
const Events: Events = new EventEmitter();
export default Events;

// Emitting Events
