import * as p5 from "p5";

function s(
  sketch: p5
) {
  sketch.setup = () => {
    sketch.createCanvas(800, 600);
    sketch.frameRate(30);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(390, 290 + 20 * sketch.sin(sketch.TWO_PI * sketch.frameCount / 30), 20, 20);
  };
}

const myp5 = new p5(
  s
);
