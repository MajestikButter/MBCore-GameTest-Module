import { TickEvent, World } from "mojang-minecraft";

/**
 * Creates a tick interval that fires repeatedly at the specified rate
 * @param callback The function to call
 * @param ticks How often to call the function
 * @returns A new TickInterval
 */
export function setTickInterval(callback: () => any, ticks: number) {
  return new TickInterval(ticks, callback);
}

/**
 * Stops firing the tick interval
 */
export function clearTickInterval(tickInterval: TickInterval) {
  tickInterval.clear();
}

class TickInterval {
  /**
   * The initial tick stamp from when this tick interval was created
   */
  firstTick: number;
  /**
   * The subcribed tick event attached
   */
  tickEvent: (arg: TickEvent) => any;

  /**
   * Stops firing the tick interval
   */
  clear() {
    World.events.tick.unsubscribe(this.tickEvent);
  }

  constructor(time: number, callback: () => any) {
    this.tickEvent = World.events.tick.subscribe((evd) => {
      if (!this.firstTick) this.firstTick = evd.currentTick;

      if ((evd.currentTick - this.firstTick) % time !== 0) return;
      callback();
    });
  }
}
