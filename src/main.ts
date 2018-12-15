import { Engine, Game } from "./masamasa";

class MyGame extends Game {
    private charX: number;
    private charY: number;
    private vel: number;

    public init() {
        this.charX = 0;
        this.charY = 0;
        this.vel = 10;
    }

    public update() {
        this.charX += this.vel * Engine.getDeltaTime();
        this.charY += this.vel * Engine.getDeltaTime();
    }

    public draw() {
        Engine.getP5Context().fill(255);
        Engine.getP5Context().rect(this.charX, this.charY, 32, 32);
    }
}

const g = new MyGame();

Engine.init();
Engine.setFPS(30);
Engine.setCanvasSize(800, 600);
Engine.run(g);
