import { world } from "mojang-minecraft";
export function setTickTimeout(callback, ticks) {
    let result = new TickTimeout(ticks, callback);
    TickTimeout.queued.push(result);
    return result;
}
export function clearTickTimeout(tickTimeout) {
    tickTimeout.clear();
}
class TickTimeout {
    constructor(time, callback) {
        this.time = time;
        this.callback = callback;
    }
    clear() {
        TickTimeout.queued.splice(TickTimeout.queued.indexOf(this), 1);
    }
}
TickTimeout.queued = [];
world.events.tick.subscribe((evd) => {
    for (let v of TickTimeout.queued) {
        if (v.time <= 0 && !v.expire) {
            try {
                v.callback();
            }
            catch (err) {
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
