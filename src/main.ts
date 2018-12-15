import { Engine, Game, Pos2, Vel2 } from "./masamasa";

class MyGame extends Game {
    private pos: Pos2;
    private vel: Vel2;

    public init() {
        this.pos = new Pos2(0, 0);
        this.vel = new Vel2(32, 32);
    }

    public update() {
        this.pos = this.pos.add(this.vel.toDelta());
    }

    public draw() {
        Engine.getP5Context().fill(255);
        Engine.getP5Context().rect(this.pos.x, this.pos.y, 32, 32);
    }
}

const g = new MyGame();

Engine.init();
Engine.setFPS(30);
Engine.setCanvasSize(800, 600);
Engine.run(g);
