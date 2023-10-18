let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height);
  noLoop();
}

function draw() {
  background(220, 20, 120);

  mImg.loadPixels();

  for (let vi = 0; vi < mImg.pixels.length; vi += 4) {
    let redVal = mImg.pixels[vi + 0];
    let greenVal = mImg.pixels[vi + 1];
    let blueVal = mImg.pixels[vi + 2];

    let maxVal = max(redVal, greenVal, blueVal);

    if (maxVal == blueVal) {
      mImg.pixels[vi + 3] = 0;
    }
  }

  mImg.updatePixels();

  image(mImg, (width - mImg.width) / 2, 0);
}
