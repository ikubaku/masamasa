import * as p5 from "p5";

function s(ctx: p5) {
    let fps: number;
    let isFrameDropped: boolean;
    let deltaTime: number;
    let frameStartTime: number;
    let frameEndTime: number;

    ctx.setup = () => {
        // TODO: Implement the way to specify the frame rate
        fps = 30;
        // TODO: Implement the way to specify the canvas size
        ctx.createCanvas(800, 600);
        ctx.frameRate(fps);

        // frameStartTime is negative if it is the first time to enter the draw() loop
        frameStartTime = -1;
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

        // Get frame start time
        frameStartTime = ctx.millis();
        // Clear canvas
        ctx.background(0);

        // Start update process

        // Draw process
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
}

const game = new p5(s);
