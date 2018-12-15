export class Vector3 {
    public x: number;
    public y: number;
    public z: number;

    public constructor(nx, ny, nz) {
        this.x = nx;
        this.y = ny;
        this.z = nz;
    }

    public add(b: Vector3) {
        return new Vector3(this.x + b.x, this.y + b.y, this.z + b.z);
    }

    public subtract(b: Vector3) {
        return new Vector3(this.x - b.x, this.y - b.y, this.z - b.z);
    }

    public dot(b: Vector3) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    public cross(b: Vector3) {
        return new Vector3(this.y * b.z - this.z * b.y,
                           this.z * b.x - this.x * b.z,
                           this.x * b.y - this.y * b.x);
    }

    public scale(r: number) {
        return new Vector3(this.x * r, this.y * r, this.z * r);
    }

    public abs() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
}
