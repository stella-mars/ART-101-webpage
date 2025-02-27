
let bgcounter = 0;
let counter = 0;
let f;
let ufo;
let gleeby;
let gridSize;
let cow;
let star;
let cx, cy;
let bgc;


function preload(){
  gleeby = loadImage('gleebglorp.png');
  ufo = loadImage('ufo.png');
  f = loadFont('pixelfont.otf');
  cow = loadImage('cow.jpeg');
  star = loadImage('star.jpeg');
}

function setup(){
  createCanvas(800, 800);
  background(255);
  ufo = loadImage('ufo.png');
  gridSize = 40;

  cx = width / 2;
  cy = height / 2;
  textFont(f);
 
}

function draw(){
  let imageWidth = 200;
  let imageHeight = 200;
  
  // ufo
  image(ufo, cx, cy, imageWidth, imageHeight);

  noStroke();
  fill(5, 245, 25, 150);
  rect(0, counter, width - random(50), 10);
  fill(11, 7, 242, 120);
  rect(counter, 0, 10, height - random(90));

  console.log("bgcounter = " + bgcounter + " counter = " + counter);

  if (counter > height) {
    bgcounter += 3;
    counter = 0;
  } else {
    counter += 20;
  }

  image(gleeby, mouseX, mouseY, 100, 100);

  
}

// Handle key presses
function keyPressed() {
  switch (key) {
    case 'a':
      console.log("a left");  // left
      cx -= gridSize;
      break;

    case 'w':
      console.log("w up");  // up
      cy -= gridSize;
      break;

    case 'd':
      console.log("d right");  // right
      cx += gridSize;
      break;

    case 's':
      console.log("s back");  // down
      cy += gridSize;
      break;

    case 't':
        console.log("t text");  // text
        fill(255, 0, 0);
        textSize(64); 
        text("Zoinggggg !!!!", cx, cy, 500);
     break;
      

    default:
      console.log("None");
      break;

  }

  return false;


}
