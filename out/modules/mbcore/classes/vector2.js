export default class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    multiply(num) {
        return new Vector2(this.x * num, this.y * num);
    }
    subtract(other) {
        other = other.multiply(-1);
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    divide(num) {
        return new Vector2(this.x / num, this.y / num);
    }
    mod(num) {
        return new Vector2(this.x % num, this.y % num);
    }
}
