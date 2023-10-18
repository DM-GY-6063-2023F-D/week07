let spriteInfo = [
  { name: "finn", imgCnt: 7, imgs: [] },
  { name: "ice-king", imgCnt: 6, imgs: [] },
  { name: "jake", imgCnt: 6, imgs: [] },
  { name: "princess-muscles", imgCnt: 7, imgs: [] },
];

function preload() {
  for (let si = 0; si < spriteInfo.length; si++) {
    for (let ii = 0; ii < spriteInfo[si].imgCnt; ii++) {
      let sName = spriteInfo[si].name;
      let sImg = loadImage("./sprites/"+sName+"/tile00"+ii+".png");
      spriteInfo[si].imgs.push(sImg);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
}
