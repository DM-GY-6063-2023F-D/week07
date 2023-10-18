let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height);
  mImg.loadPixels();
  noLoop();
}

let spacing = 32;

function draw() {
  background(255);
  noStroke();

  mImg.loadPixels();

  for (let y = 0; y < mImg.height; y += spacing) {
    for (let x = 0; x < mImg.width; x += spacing) {
      let pixelIndex = 4 * (y * mImg.width + x);
      let redVal = mImg.pixels[pixelIndex + 0];
      let greenVal = mImg.pixels[pixelIndex + 1];
      let blueVal = mImg.pixels[pixelIndex + 2];

      fill(redVal, greenVal, blueVal);
      ellipse(x, y, spacing - 2, spacing - 2);
    }
  }

  mImg.updatePixels();
}
