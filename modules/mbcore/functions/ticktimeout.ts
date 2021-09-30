import { TickEvent, World } from "mojang-minecraft";

/**
 * Creates a tick timeout that fires after the specified amount of ticks
 * @param callback The function to call
 * @param ticks How many ticks to wait before calling the function
 * @returns A new TickTimeout
 */
export function setTickTimeout(callback: () => any, ticks: number) {
  return new TickTimeout(ticks, callback);
}

/**
 * Stops the tick timeout from firing
 */
export function clearTickTimeout(tickTimeout: TickTimeout) {
  tickTimeout.clear();
}

class TickTimeout {
  /**
   * The subcribed tick event attached
   */
  tickEvent: (arg: TickEvent) => any;

  /**
   * Stops the tick timeout from firing
   */
  clear() {
    World.events.tick.unsubscribe(this.tickEvent);
  }
  
  constructor(time: number, callback: () => any) {
    this.tickEvent = World.events.tick.subscribe((evd) => {
      if (time <= 0) {
        callback();
        this.clear();
        return;
      }
      time--;
    });
  }
}
