import { BlockLocation, Location } from "mojang-minecraft";
import CommandHandler from "./commandhandler.js";
export default class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromLocation(loc) {
        return new this(loc.x, loc.y, loc.z);
    }
    static fromBlockLocation(loc) {
        return new this(loc.x, loc.y, loc.z);
    }
    static fromObject(obj) {
        return new this(obj.x, obj.y, obj.z);
    }
    get magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    add(other) {
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }
    multiply(arg) {
        if (arg instanceof Vector3) {
            return new Vector3(this.x * arg.x + this.x * arg.y + this.x * arg.z, this.y * arg.x + this.y * arg.y + this.y * arg.z, this.z * arg.x + this.z * arg.y + this.z * arg.z);
        }
        else
            return new Vector3(this.x * arg, this.y * arg, this.z * arg);
    }
    subtract(other) {
        other = other.multiply(-1);
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }
    divide(num) {
        return new Vector3(this.x / num, this.y / num, this.z / num);
    }
    mod(num) {
        return new Vector3(this.x % num, this.y % num, this.z % num);
    }
    runMathFunc(func, ...args) {
        return new Vector3(func(this.x, ...args), func(this.y, ...args), func(this.z, ...args));
    }
    round() {
        return this.runMathFunc(Math.round);
    }
    floor() {
        return this.runMathFunc(Math.floor);
    }
    ceil() {
        return this.runMathFunc(Math.ceil);
    }
    trunc() {
        return this.runMathFunc(Math.trunc);
    }
    normalize() {
        return this.divide(this.magnitude);
    }
    rotate(euler) {
        const e = euler.multiply(Math.PI / 180);
        const v = this;
        const sin = Math.sin;
        const cos = Math.cos;
        let xV = new Vector3(v.x, v.y * cos(e.x) - v.z * sin(e.x), v.y * sin(e.x) + v.z * cos(e.x));
        let yV = new Vector3(xV.x * cos(e.y) + xV.z * sin(e.y), xV.y, -xV.x * sin(e.y) + xV.z * cos(e.y));
        return new Vector3(yV.x * cos(e.z) - yV.y * sin(e.z), yV.x * sin(e.z) + yV.y * cos(e.z), yV.z);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }
    isWithinDistance(other, distance) {
        other = this.subtract(other);
        return (Math.sqrt(other.x * other.x + other.y * other.y + other.z * other.z) <=
            distance);
    }
    isWithinVolume(negativeCorner, positiveCorner) {
        return (this.x >= negativeCorner.x &&
            this.y >= negativeCorner.y &&
            this.z >= negativeCorner.z &&
            this.x <= positiveCorner.x &&
            this.y <= positiveCorner.y &&
            this.z <= positiveCorner.z);
    }
    visualize(startPos, distance, increment = 0.1, particle = "minecraft:basic_flame_particle") {
        for (let i = 0; i < distance; i += increment) {
            let pos = this.normalize().multiply(i).add(startPos);
            CommandHandler.run(`particle ${particle} ${pos.x} ${pos.y} ${pos.z}`);
        }
    }
    toString() {
        return `${this.x}, ${this.y}, ${this.z}`;
    }
    toJSON() {
        return { x: this.x, y: this.y, z: this.z };
    }
    toBlockLocation() {
        let floored = this.floor();
        return new BlockLocation(floored.x, floored.y, floored.z);
    }
    toLocation() {
        return new Location(this.x, this.y, this.z);
    }
}
