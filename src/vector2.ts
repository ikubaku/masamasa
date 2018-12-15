export class Vector2 {
    public x: number;
    public y: number;

    public constructor(nx, ny) {
        this.x = nx;
        this.y = ny;
    }

    public add(b: Vector2) {
        return new Vector2(this.x + b.x, this.y + b.y);
    }

    public subtract(b: Vector2) {
        return new Vector2(this.x - b.x, this.y - b.y);
    }

    public dot(b: Vector2) {
        return this.x * b.x + this.y * b.y;
    }

    public scale(r: number) {
        return new Vector2(this.x * r, this.y * r);
    }

    public abs() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
