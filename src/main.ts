import * as masamasa from "./masamasa"

class MyGame extends masamasa.Game {
    char_x: number;
    char_y: number;

    init() {
	this.char_x = 0;
	this.char_y = 0;
    }

    update() {
	this.char_x += 1;
	this.char_y += 1;
    }

    draw() {
	masamasa.Engine.ctx.fill(255);
	masamasa.Engine.ctx.rect(this.char_x, this.char_y, 32, 32);
    }
}

let e = new masamasa.Engine()
let g = new MyGame()

e.setFPS(30);
e.setCanvasSize(800, 600);
e.run(g);
