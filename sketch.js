// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Brush {
  constructor() {
    this.x = winMouseX;
    this.y = winMouseY;
    this.px = pwinMouseX;
    this.py = pwinMouseY;
  }

  show() {
    stroke(0);
    line(this.x, this.y, this.px, this.py);
  }
}

let lines = []

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.center("horizontal");
}

function mousePressed() {
  let line = new Brush()
  lines.push(line);
  for (let i = 0; i < lines; i++) {
    line.show();
  }
}

function draw() {
  background("white");
}
