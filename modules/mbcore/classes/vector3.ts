import { BlockLocation, Location } from "mojang-minecraft";
import CommandHandler from "./commandhandler.js";

export default class Vector3 {
  /**
   * Creates a Vector3 from a minecraft Location
   * @param loc Location to create Vector3 from
   * @returns A new Vector3
   */
  static fromLocation(loc: Location) {
    return new this(loc.x, loc.y, loc.z);
  }
  /**
   * Creates a Vector3 from a minecraft BlockLocation
   * @param loc BlockLocation to create Vector3 from
   * @returns A new Vector3
   */
  static fromBlockLocation(loc: BlockLocation) {
    return new this(loc.x, loc.y, loc.z);
  }
  /**
   * Creates a Vector3 from a Vector3 object
   * @param obj Object to create Vector3 from
   * @returns A new Vector3
   */
  static fromObject(obj: { x: number; y: number; z: number }) {
    return new this(obj.x, obj.y, obj.z);
  }

  /**
   * First value in vector
   */
  x: number;
  /**
   * Second value in vector
   */
  y: number;
  /**
   * Third value in vector
   */
  z: number;

  get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  /**
   * Add two Vector3 instances
   * @param other The Vector3 to add to this Vector3
   * @returns A Vector3 with the new values
   */
  add(other: Vector3) {
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Multiply a Vector3 by a number
   * @param num The number to multiply each Vector3 value by
   * @returns A Vector3 with the new values
   */
  multiply(num: number): Vector3;
  /**
   * Multiply a Vector3 by a Vector3
   * @param vector The Vector3 to multiply the Vector3 by
   * @returns A Vector3 with the new values
   */
  multiply(vector: Vector3): Vector3;
  multiply(arg: number | Vector3) {
    if (arg instanceof Vector3) {
      return new Vector3(
        this.x * arg.x + this.x * arg.y + this.x * arg.z,
        this.y * arg.x + this.y * arg.y + this.y * arg.z,
        this.z * arg.x + this.z * arg.y + this.z * arg.z
      );
    } else return new Vector3(this.x * arg, this.y * arg, this.z * arg);
  }

  /**
   * Subtract
   * @param other The Vector3 to subtract from this Vector3
   * @returns A Vector3 with the new values
   */
  subtract(other: Vector3) {
    other = other.multiply(-1);
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Divide a Vector3 by a number
   * @param num The number to divide each Vector3 value by
   * @returns A Vector3 with the new values
   */
  divide(num: number) {
    return new Vector3(this.x / num, this.y / num, this.z / num);
  }

  /**
   * Perform a modulus operation on this Vector3
   * @param num The number to use as the dividend for the modulus operation
   * @returns A Vector3 with the new values
   */
  mod(num: number) {
    return new Vector3(this.x % num, this.y % num, this.z % num);
  }

  runMathFunc(func: Function, ...args: any[]) {
    return new Vector3(
      func(this.x, ...args),
      func(this.y, ...args),
      func(this.z, ...args)
    );
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

  /**
   * Normalizes this Vector; Keeps direction while making length = 1
   * @returns A Vector3 with a length of 1
   */
  normalize() {
    return this.divide(this.magnitude);
  }

  /**
   * Rotates this Vector by the specified Euler angles
   * @param euler A Vector3 with euler angles
   * @returns A Vector3 with rotations applied
   */
  rotate(euler: Vector3) {
    // Formulas from: https://stackoverflow.com/questions/14607640/rotating-a-vector-in-3d-space
    const e = euler.multiply(Math.PI / 180);
    const v = this;
    const sin = Math.sin;
    const cos = Math.cos;

    let xV = new Vector3(
      v.x,
      v.y * cos(e.x) - v.z * sin(e.x),
      v.y * sin(e.x) + v.z * cos(e.x)
    );
    let yV = new Vector3(
      xV.x * cos(e.y) + xV.z * sin(e.y),
      xV.y,
      -xV.x * sin(e.y) + xV.z * cos(e.y)
    );
    return new Vector3(
      yV.x * cos(e.z) - yV.y * sin(e.z),
      yV.x * sin(e.z) + yV.y * cos(e.z),
      yV.z
    );
  }

  /**
   * Tests if this Vector3 is equivalent to another Vector3
   * @param other A Vector3 to compare to
   * @returns A boolean representing whether the Vector3s are equivalent
   */
  equals(other: Vector3) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }

  /**
   * Checks if two Vector3s are within a certain radius of each other
   * @param other A Vector3 to check for
   * @param distance A number representing the radius/distance
   * @returns A boolean representing whether the Vector3s are within distance of each other
   */
  isWithinDistance(other: Vector3, distance: number) {
    other = this.subtract(other);
    return (
      Math.sqrt(other.x * other.x + other.y * other.y + other.z * other.z) <=
      distance
    );
  }
  /**
   * Checks if this Vector3 is within two Vector3s
   * @param negativeCorner A Vector3 specifing the negative corner of the volume
   * @param positiveCorner A Vector3 specifing the positive corner of the volume
   * @returns A boolean representing whether this Vector3 is within the specified Vector3s
   */
  isWithinVolume(negativeCorner: Vector3, positiveCorner: Vector3) {
    return (
      this.x >= negativeCorner.x &&
      this.y >= negativeCorner.y &&
      this.z >= negativeCorner.z &&
      this.x <= positiveCorner.x &&
      this.y <= positiveCorner.y &&
      this.z <= positiveCorner.z
    );
  }

  /**
   *
   * @param startPos
   * @param distance
   * @param increment
   * @param particle
   */
  visualize(
    startPos: Vector3,
    distance: number,
    increment = 0.1,
    particle = "minecraft:basic_flame_particle"
  ) {
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

  /**
   * Creates a new Vector3
   * @param x First value
   * @param y Second value
   * @param z Third value
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
