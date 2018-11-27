import * as p5 from "p5";

function s(
  sketch: p5
) {
  class NiceObject {
    pos_x: number;
    pos_y: number;

    constructor(x: number, y: number) {
      this.pos_x = x;
      this.pos_y = y;
    }
    draw() {
      sketch.rect(this.pos_x, this.pos_y + 20 * sketch.sin(sketch.TWO_PI * sketch.frameCount / 30), 20, 20);
    }
  }

  let characters: Array<NiceObject> = [];

  sketch.setup = () => {
    sketch.createCanvas(800, 600);
    sketch.frameRate(30);

    characters.push(new NiceObject(10, 290));
    characters.push(new NiceObject(30, 290));
    characters.push(new NiceObject(50, 290));
    characters.push(new NiceObject(70, 290));
    characters.push(new NiceObject(90, 290));
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(390, 290 + 20 * sketch.sin(sketch.TWO_PI * sketch.frameCount / 30), 20, 20);

    for(let c of characters) {
      c.draw();
    }
  };
}

const myp5 = new p5(
  s
);
