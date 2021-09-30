import { BlockLocation, Location } from "mojang-minecraft";

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
  multiply(num: number) {
    return new Vector3(this.x * num, this.y * num, this.z * num);
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

  trunc() {
    return this.runMathFunc(Math.trunc);
  }

  equals(other: Vector3) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }

  toString() {
    return `${this.x}, ${this.y}, ${this.z}`;
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
