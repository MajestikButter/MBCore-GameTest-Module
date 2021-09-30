export default class Vector2 {
  /**
   * First value in vector
   */
  x: number;
  /**
   * Second value in vector
   */
  y: number;

  /**
   * Add two Vector2 instances
   * @param other The Vector2 to add to this Vector2
   * @returns A Vector2 with the new values
   */
  add(other: Vector2) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Multiply a Vector2 by a number
   * @param num The number to multiply each Vector2 value by
   * @returns A Vector2 with the new values
   */
  multiply(num: number) {
    return new Vector2(this.x * num, this.y * num);
  }

  /**
   * Subtract
   * @param other The Vector2 to subtract from this Vector2
   * @returns A Vector2 with the new values
   */
  subtract(other: Vector2) {
    other = other.multiply(-1);
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Divide a Vector2 by a number
   * @param num The number to divide each Vector2 value by
   * @returns A Vector2 with the new values
   */
  divide(num: number) {
    return new Vector2(this.x / num, this.y / num);
  }

  /**
   * Perform a modulus operation on this Vector2
   * @param num The number to use as the dividend for the modulus operation
   * @returns A Vector2 with the new values
   */
  mod(num: number) {
    return new Vector2(this.x % num, this.y % num);
  }

  /**
   * Creates a new Vector2
   * @param x First value
   * @param y Second value
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
