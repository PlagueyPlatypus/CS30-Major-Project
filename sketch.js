// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let brushimage;

function preload() {
  brushimage = loadImage("brush.png");
}

// brush object
class Brush {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.px = pmouseX;
    this.py = pmouseY;
    print(mouseX);
    print(pmouseX);
  }

  show() {
    stroke(0);
    line(this.px, this.py, this.x, this.y);
  }
}

let lines = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.center("horizontal");
  imageMode(CENTER);
  for (let element of document.getElementsByClassName("p5Canvas")) {
    element.addEventListener("contextmenu", (e) => e.preventDefault());
  }
}

// brush show details
function mousePressed() {
  let line = new Brush();
  lines.push(line);
}

//testing new scripts for colour gradient
// function createColorPicker() {
//   colorPicker = createImage(100, height);
//   let myWidth = colorPicker.width/3
//   colorPicker.loadPixels()
//   from = color(0, 255, 0);
//   to = color(255, 0, 0);
//   for (let y = 0; y < height; y++) {
//     for (x = 0; x < myWidth; x++) {
//       color1 = lerpColor(from, to, y / height)
//       colorPicker.set(x, y, color1)
//     }
//   }
//   from = color(0, 0, 255);
//   to = color(0, 255, 0);
//   for (let y = 0; y < height; y++) {
//     for (x = myWidth; x < myWidth* 2; x++) {
//       color1 = lerpColor(from, to, y / height)
//       colorPicker.set(x, y, color1)
//     }
//   }
//   from = color(255, 0, 0);
//   to = color(0, 255, 255);
//   for (let y = 0; y < height; y++) {
//     for (x = myWidth*2; x < myWidth * 3; x++) {
//       color1 = lerpColor(from, to, y / height)
//       colorPicker.set(x, y, color1)
//     }
//   }
//   colorPicker.updatePixels()
//   image(colorPicker, 400, 0)
// }



function draw() {
  background(220);
  for (let i = 0; i < lines; i++) {
    lines[i].show();
  }
  //cursor
  image(brushimage, mouseX, mouseY, 25, 25);
  noCursor();

  //gradiance scale
  // radius = slider.value();
}
