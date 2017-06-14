var img1;
var img2;
var img3;
var img4;
var data;

function preload() {
  img1 = loadImage("assets/sleep.png");
  img2 = loadImage("assets/commute.png");
  img3 = loadImage("assets/relax.png");
  img4 = loadImage("assets/work.png");
  data = loadJSON("db.json");
}

function setup() {
  createCanvas(640, 640);
  background(111);
  image(img1,10,10);
  image(img2,320,10);
  image(img3,10,320);
  image(img4,320,320);
}

function draw() {
}
