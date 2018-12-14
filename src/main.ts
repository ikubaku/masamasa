import * as masamasa from "./masamasa";

class MyGame extends masamasa.Game {
    private charX: number;
    private charY: number;
    private vel: number;

    public init() {
        this.charX = 0;
        this.charY = 0;
        this.vel = 10;
    }

    public update() {
        this.charX += this.vel * masamasa.Engine.deltaTime;
        this.charY += this.vel * masamasa.Engine.deltaTime;
    }

    public draw() {
        masamasa.Engine.ctx.fill(255);
        masamasa.Engine.ctx.rect(this.charX, this.charY, 32, 32);
    }
}

const e = new masamasa.Engine();
const g = new MyGame();

e.setFPS(30);
e.setCanvasSize(800, 600);
e.run(g);
