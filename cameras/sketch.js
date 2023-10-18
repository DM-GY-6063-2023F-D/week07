let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mCamera = createCapture(VIDEO);
  mCamera.hide();
}

function draw() {
  background(220, 20, 120);
  image(mCamera, 0, 0);
}
