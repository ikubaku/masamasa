export class Vector2 {
    public x: number;
    public y: number;
    constructor(nx, ny) {
        this.x = nx;
        this.y = ny;
    }

    add(b: Vector2) {
        return new Vector2(this.x + b.x, this.y + b.y);
    }

    subtract(b: Vector2) {
	return new Vector2(this.x - b.x, this.y - b.y);
    }

    dot(b: Vector2) {
	return this.x * b.x + this.y * b.y;
    }

    scale(r: number) {
	return new Vector2(this.x * r, this.y * r);
    }

    abs() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

export class Vector3 {
    public x: number;
    public y: number;
    public z: number;
    constructor(nx, ny, nz) {
	this.x = nx;
	this.y = ny;
	this.z = nz;
    }

    add(b: Vector3) {
        return new Vector3(this.x + b.x, this.y + b.y, this.z + b.z);
    }

    subtract(b: Vector3) {
	return new Vector3(this.x - b.x, this.y - b.y, this.z - b.z);
    }

    dot(b: Vector3) {
	return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    cross(b: Vector3) {
	return new Vector3(this.y * b.z - this.z * b.y,
			   this.z * b.x - this.x * b.z,
			   this.x * b.y - this.y * b.x);
    }

    scale(r: number) {
	return new Vector3(this.x * r, this.y * r, this.z * r);
    }

    abs() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
}
