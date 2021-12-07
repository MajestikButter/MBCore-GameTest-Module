import { world } from "mojang-minecraft";
export function setTickInterval(callback, ticks) {
    let result = new TickInterval(ticks, callback);
    TickInterval.queued.push(result);
    return result;
}
export function clearTickInterval(tickInterval) {
    tickInterval.clear();
}
class TickInterval {
    constructor(time, callback) {
        this.time = time;
        this.callback = callback;
    }
    clear() {
        TickInterval.queued.splice(TickInterval.queued.indexOf(this), 1);
    }
}
TickInterval.queued = [];
world.events.tick.subscribe((evd) => {
    for (let v of TickInterval.queued) {
        if (!v.firstTick)
            v.firstTick = evd.currentTick;
        if ((evd.currentTick - v.firstTick) % v.time !== 0)
            continue;
        try {
            v.callback();
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
});
