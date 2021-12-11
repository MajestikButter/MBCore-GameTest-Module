import { TickEvent, world, World } from "mojang-minecraft";

/**
 * Creates a tick interval that fires repeatedly at the specified rate
 * @param callback The function to call
 * @param ticks How often to call the function
 * @returns A new TickInterval
 */
export function setTickInterval(callback: () => any, ticks: number) {
  let result = new TickInterval(ticks, callback);
  TickInterval.queued.push(result);
  return result;
}

/**
 * Stops firing the tick interval
 */
export function clearTickInterval(tickInterval: TickInterval) {
  tickInterval.clear();
}

export class TickInterval {
  static queued: TickInterval[] = [];

  /**
   * The function to call
   */
  callback: () => any;

  /**
   * The initial tick stamp from when this tick interval was created
   */
  firstTick: number;

  /**
   * The delay for this tick interval
   */
  time: number;

  /**
   * Stops firing the tick interval
   */
  clear() {
    TickInterval.queued.splice(TickInterval.queued.indexOf(this), 1);
  }

  constructor(time: number, callback: () => any) {
    this.time = time;
    this.callback = callback;
  }
}

world.events.tick.subscribe((evd) => {
  for (let v of TickInterval.queued) {
    if (!v.firstTick) v.firstTick = evd.currentTick;

    if ((evd.currentTick - v.firstTick) % v.time !== 0) continue;
    try {
      v.callback();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
});
