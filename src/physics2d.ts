import { Vector2 } from "./vector";
import { Engine } from "./engine";

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

    ToDelta() {
	return Pos2.FromVector2(
	    this.ToVector2().scale(Engine.getDeltaTime())
	);
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

    ToDelta() {
	return Vel2.FromVector2(
	    this.ToVector2().scale(Engine.getDeltaTime())
	);
    }
}

