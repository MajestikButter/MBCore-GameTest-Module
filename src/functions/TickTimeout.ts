import { TickEvent, world, World } from "mojang-minecraft";

/**
 * Creates a tick timeout that fires after the specified amount of ticks
 * @param callback The function to call
 * @param ticks How many ticks to wait before calling the function
 * @returns A new TickTimeout
 */
export function setTickTimeout(callback: () => any, ticks: number) {
  let result = new TickTimeout(ticks, callback);
  TickTimeout.queued.push(result);
  return result;
}

/**
 * Stops the tick timeout from firing
 */
export function clearTickTimeout(tickTimeout: TickTimeout) {
  tickTimeout.clear();
}

export class TickTimeout {
  static queued: TickTimeout[] = [];

  /**
   * The function to call
   */
  callback: () => any;

  /**
   * The delay for this tick timeout
   */
  time: number;

  /**
   * Represents whether the timeout is being cleared
   */
  expire: boolean;

  /**
   * Stops the tick timeout from firing
   */
  clear() {
    TickTimeout.queued.splice(TickTimeout.queued.indexOf(this), 1);
  }

  constructor(time: number, callback: () => any) {
    this.time = time;
    this.callback = callback;
  }
}

world.events.tick.subscribe((evd) => {
  for (let v of TickTimeout.queued) {
    if (v.time <= 0 && !v.expire) {
      try {
        v.callback();
      } catch (err) {
        console.error(err);
        throw err;
      }
      v.expire = true;
    }
  }

  for (let i = TickTimeout.queued.length - 1; i >= 0; i--) {
    let v = TickTimeout.queued[i];
    if (v.expire) {
      v.clear();
    }
    v.time--;
  }
});
