import { MinecraftEffectTypes, world, Player, } from "mojang-minecraft";
import * as uuid from "../libraries/uuid.js";
import CommandHandler from "./commandhandler.js";
import Selector from "./selector.js";
import Vector2 from "./vector2.js";
import Scoreboard from "./scoreboard.js";
import Vector3 from "./vector3.js";
import JSONRequest from "./jsonrequest.js";
let playerIdObj = Scoreboard.initialize("mbcPlayerId");
const directionRequests = new Map();
export default class MBCPlayer {
    constructor(id) {
        this.id = id;
    }
    static get(playerId) {
        if (typeof playerId === "string") {
            playerId = playerIdObj.get(playerId);
        }
        else if (playerId instanceof Player) {
            playerId = playerIdObj.get(`"${playerId.nameTag}"`);
        }
        return new this(playerId);
    }
    get player() {
        if (!this.isAlive())
            throw new Error("Unable to grab this player's minecraft instance, the player is not alive or loaded");
        CommandHandler.run(`effect ${this.toSelector().toString()} fatal_poison 1 124 true`);
        let player = world.getPlayers().find((v) => {
            let eff = v.getEffect(MinecraftEffectTypes.fatalPoison);
            return eff && eff.amplifier === 124;
        });
        if (player)
            CommandHandler.run(`effect ${this.toSelector().toString()} fatal_poison 0 0 true`);
        return player;
    }
    get dimension() {
        return this.player.dimension;
    }
    get dimensionId() {
        if (!this.isOnline())
            throw new Error("Unable to grab this player's dimension, the player is not online");
        const dimensions = ["overworld", "the end", "nether"];
        for (let i = 0; i < 3; i++) {
            let dimension = world.getDimension(dimensions[i]);
            let selector = this.toSelector();
            selector.range = new Vector2(0.01, 0);
            let cmd = CommandHandler.run(`testfor ${selector.toString()}`, dimension);
            if (!cmd.error) {
                return dimensions[i];
            }
        }
        throw new Error("Unable to gab this player's dimension");
    }
    get inventory() {
        let inv = this.player.getComponent("inventory");
        return inv;
    }
    getDirectionVectors() {
        return new Promise((resolve) => {
            let id = uuid.v4();
            directionRequests.set(id, resolve);
            this.executeCommand(`summon mbc:jsonrequest "$JSONRequest:${JSON.stringify(JSON.stringify({
                channel: "getPlayerDirectionVector",
                id,
                plrPos: Vector3.fromLocation(this.player.location).toJSON(),
            })).slice(1, -1)}" ^^^1`);
        });
    }
    getRotation() {
        return new Promise((resolve) => {
            this.getDirectionVectors().then((v) => {
                const conv = 180 / Math.PI;
                const dir = v.direction;
                resolve(new Vector2(Math.asin(-dir.y) * conv, Math.atan2(-dir.x, dir.z) * conv));
            });
        });
    }
    getTargetBlock(raycastParams) {
        return this.player.getBlockFromViewVector(raycastParams);
    }
    getTargetEntity(raycastParams) {
        return this.player.getEntitiesFromViewVector(raycastParams)[0];
    }
    getTags() {
        return this.player.getTags();
    }
    setTags(tags) {
        this.getTags().forEach((v) => {
            this.player.removeTag(v);
        });
        tags.forEach((v) => {
            this.player.addTag(v);
        });
    }
    isOnline() {
        return this.toSelector().eval();
    }
    isAlive() {
        let selector = new Selector("e");
        selector.type = "player";
        selector.scores = {
            mbcPlayerId: this.id,
        };
        return !CommandHandler.run(`testfor ${selector.toString()}`).error;
    }
    sendMessage(msg) {
        this.executeCommand(`tellraw @s {"rawtext":[{"text":${JSON.stringify(msg)}}]}`);
    }
    executeCommand(cmd) {
        try {
            return {
                result: this.player.runCommand(`execute ${this.toSelector()} ~~~ ${cmd}`),
                error: false,
            };
        }
        catch (err) {
            return {
                result: err,
                error: true,
            };
        }
    }
    teleport(pos, rot) {
        if (!rot)
            return this.executeCommand(`tp @s ${pos.x} ${pos.y} ${pos.z}`);
        if (rot instanceof Vector2)
            return this.executeCommand(`tp @s ${pos.x} ${pos.y} ${pos.z} ${rot.x} ${rot.y}`);
        else
            return this.executeCommand(`tp @s ${pos.x} ${pos.y} ${pos.z} facing ${rot.x} ${rot.y} ${rot.z}`);
    }
    toSelector() {
        let selector = new Selector(`a`);
        selector.scores = {
            mbcPlayerId: this.id,
        };
        return selector;
    }
}
JSONRequest.on("getPlayerDirectionVector", (evd) => {
    let dirCalcVec = Vector3.fromLocation(evd.orgEvd.source.location);
    let plrPos = Vector3.fromObject(evd.request.plrPos);
    let dirVec = dirCalcVec.subtract(plrPos).normalize();
    directionRequests.get(evd.request.id)({ origin: plrPos, direction: dirVec });
    directionRequests.delete(evd.request.id);
});
