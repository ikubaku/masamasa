import * as p5 from "p5"

function s(ctx: p5) {
    let fps: number;
    let is_fdrop: boolean;
    let d_time: number;
    let ftime_s: number;
    let ftime_e: number;
    
    ctx.setup = () => {
	// TODO: Implement the way to specify the frame rate
	fps = 30;
        // TODO: Implement the way to specify the canvas size
        ctx.createCanvas(800, 600);
        ctx.frameRate(fps);

	// ftime_s is negative if it is the first time to enter the draw() loop
	ftime_s = -1;
    };

    ctx.draw = () => {
        // if ftime_s < 0 it is the first time to do draw()
        if(ftime_s >= 0) {
            // Get frame end time
            ftime_e = ctx.millis();
            // Update delta time
            d_time = (ftime_e - ftime_s) / 1000;
            if(d_time <= 0) {
                // Frame drop
                d_time = 0;
                is_fdrop = true;
            } else {
                is_fdrop = false;
	    }
        }
        
        // Get frame start time
        ftime_s = ctx.millis();
        // Clear canvas
        ctx.background(0);

        // State update process
        
        // Draw process
	// // Sample object
        ctx.fill(255);
        ctx.rect(390, 290 + 20 * ctx.sin(ctx.TWO_PI * ctx.frameCount / 30), 20, 20);

	// Delta time viewer(debug)
	if(is_fdrop) {
	    ctx.fill(ctx.color(255, 0, 0));
	} else {
	    ctx.fill(255);
	}
	ctx.text("d_time= " + ctx.str(d_time) + " (s)", 10, 10);
    };
}

const game = new p5(s);
