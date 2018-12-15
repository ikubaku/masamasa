/* tslint:disable:max-classes-per-file */
import { Engine } from "./engine";
import { Vector2 } from "./vector2";

export class Pos2 extends Vector2 {
    public constructor(nx: number, ny: number) {
        super(nx, ny);
    }

    public static fromVector2(v: Vector2) {
        return new Pos2(v.x, v.y);
    }

    public toVector2() {
        return new Vector2(this.x, this.y);
    }

    public add(b: Pos2) {
        return Pos2.fromVector2(
            super.add(b.toVector2())
        );
    }

    public subtract(b: Pos2) {
        return Pos2.fromVector2(
            super.subtract(b.toVector2())
        );
    }

    public dot(b: Pos2) {
        return super.dot(b.toVector2());
    }

    public scale(r: number) {
        return Pos2.fromVector2(
            super.scale(r)
        );
    }

    public abs() {
        return super.abs();
    }
}

export class Vel2 extends Vector2 {
    public constructor(nx: number, ny: number) {
        super(nx, ny);
    }

    public static fromVector2(v: Vector2) {
        return new Vel2(v.x, v.y);
    }

     public toVector2() {
        return new Vector2(this.x, this.y);
    }

    public add(b: Vel2) {
        return Vel2.fromVector2(
            super.add(b.toVector2())
        );
    }

    public subtract(b: Vel2) {
        return Vel2.fromVector2(
            super.subtract(b.toVector2())
        );
    }

    public dot(b: Vel2) {
        return super.dot(b.toVector2());
    }

    public scale(r: number) {
        return Vel2.fromVector2(
            super.scale(r)
        );
    }

    public abs() {
        return super.abs();
    }

    public toDelta() {
        return Pos2.fromVector2(
            this.toVector2().scale(Engine.getDeltaTime())
        );
    }
}

export class Accel2 extends Vector2 {
    public constructor(nx: number, ny: number) {
        super(nx, ny);
    }

    public static fromVector2(v: Vector2) {
        return new Accel2(v.x, v.y);
    }

    public toVector2() {
        return new Vector2(this.x, this.y);
    }

    public add(b: Accel2) {
        return Accel2.fromVector2(
            super.add(b.toVector2())
        );
    }

    public subtract(b: Accel2) {
        return Accel2.fromVector2(
            super.subtract(b.toVector2())
        );
    }

    public dot(b: Accel2) {
        return super.dot(b.toVector2());
    }

    public scale(r: number) {
        return Accel2.fromVector2(
            super.scale(r)
        );
    }

    public abs() {
        return super.abs();
    }

    public toDelta() {
        return Vel2.fromVector2(
            this.toVector2().scale(Engine.getDeltaTime())
        );
    }
}
