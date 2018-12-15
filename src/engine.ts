import * as p5 from "p5";
import { Game } from "./game";

export class Engine {
    private static canvasWidth: number;
    private static canvasHeight: number;
    private static fps: number;
    private static ctx: p5;
    private static deltaTime: number;

    public static init() {
        Engine.canvasWidth = 100;
        Engine.canvasHeight = 100;
        Engine.fps = 30;
        Engine.deltaTime = 0;
    }

    public static setFPS(fps: number): void {
        Engine.fps = fps;
    }

    public static setCanvasSize(width: number, height: number): void {
        Engine.canvasWidth = width;
        Engine.canvasHeight = height;
    }

    public static getP5Context(): p5 {
        return Engine.ctx;
    }

    public static getDeltaTime(): number {
        return Engine.deltaTime;
    }

    public static run(game: Game): void {
        const gameMain = (ctx: p5) => {
            const canvasWidth = Engine.canvasWidth;
            const canvasHeight = Engine.canvasHeight;
            const fps = Engine.fps;
            let isFrameDropped: boolean;
            let deltaTime: number = 0;
            let frameStartTime: number;
            let frameEndTime: number;

            Engine.ctx = ctx;

            ctx.setup = () => {
                ctx.createCanvas(canvasWidth, canvasHeight);
                ctx.frameRate(fps);

                // frameStartTime is negative if it is the first time to enter the draw() loop
                frameStartTime = -1;

                // Initialize user program
                game.init();
            };

            ctx.draw = () => {
                // if frameStartTime < 0 it is the first time to do draw()
                if (frameStartTime >= 0) {
                    // Get frame end time
                    frameEndTime = ctx.millis();
                    // Update delta time
                    deltaTime = (frameEndTime - frameStartTime) / 1000;
                    if (deltaTime <= 0) {
                        // Frame drop
                        deltaTime = 0;
                        isFrameDropped = true;
                    } else {
                        isFrameDropped = false;
                    }
                }
                // Expose new value via a static variable of Engine(this should be avoided in the future release)
                Engine.deltaTime = deltaTime;

                // Get frame start time
                frameStartTime = ctx.millis();
                // Clear canvas
                ctx.background(0);

                // Start update process
                game.update();

                // Draw process
                game.draw();
                // // Sample object
                ctx.fill(255);
                ctx.rect(390, 290 + 20 * ctx.sin(ctx.TWO_PI * ctx.frameCount / 30), 20, 20);

                // Delta time viewer(debug)
                if (isFrameDropped) {
                    ctx.fill(ctx.color(255, 0, 0));
                } else {
                    ctx.fill(255);
                }
                ctx.text("deltaTime= " + ctx.str(deltaTime) + " (s)", 10, 10);
            };
        };

        const app = new p5(gameMain);
    }
}
