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

export class Pos2 extends Vector2 {
    constructor(nx: number, ny: number) {
	super(nx, ny);
    }

    static FromVector2(v: Vector2) {
	return new Pos2(v.x, v.y);
    }
    ToVector2() {
	return new Vector2(this.x, this.y);
    }

    add(b: Pos2) {
	return Pos2.FromVector2(
	    super.add(b.ToVector2())
	);
    }
    subtract(b: Pos2) {
	return Pos2.FromVector2(
	    super.subtract(b.ToVector2())
	);
    }
    dot(b: Pos2) {
	return super.dot(b.ToVector2());
    }
    scale(r: number) {
	return Pos2.FromVector2(
	    super.scale(r)
	);
    }
    abs() {
	return super.abs();
    }
}

export class Vel2 extends Vector2 {
    constructor(nx: number, ny: number) {
	super(nx, ny);
    }

    static FromVector2(v: Vector2) {
	return new Vel2(v.x, v.y);
    }
    ToVector2() {
	return new Vector2(this.x, this.y);
    }

    add(b: Vel2) {
	return Vel2.FromVector2(
	    super.add(b.ToVector2())
	);
    }
    subtract(b: Vel2) {
	return Vel2.FromVector2(
	    super.subtract(b.ToVector2())
	);
    }
    dot(b: Vel2) {
	return super.dot(b.ToVector2());
    }
    scale(r: number) {
	return Vel2.FromVector2(
	    super.scale(r)
	);
    }
    abs() {
	return super.abs();
    }
}

export class Accel2 extends Vector2 {
    constructor(nx: number, ny: number) {
	super(nx, ny);
    }

    static FromVector2(v: Vector2) {
	return new Accel2(v.x, v.y);
    }
    ToVector2() {
	return new Vector2(this.x, this.y);
    }

    add(b: Accel2) {
	return Accel2.FromVector2(
	    super.add(b.ToVector2())
	);
    }
    subtract(b: Accel2) {
	return Accel2.FromVector2(
	    super.subtract(b.ToVector2())
	);
    }
    dot(b: Accel2) {
	return super.dot(b.ToVector2());
    }
    scale(r: number) {
	return Accel2.FromVector2(
	    super.scale(r)
	);
    }
    abs() {
	return super.abs();
    }
}
