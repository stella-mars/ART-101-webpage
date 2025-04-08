
/* 
Make sure to check out the project 1 example on custom functions first.
namely being able to make a custom function with aruguements.
 */

let currentkey = '1';
let bgc ;
let gkcount;
let r=random(255);
let shrimp;

let l = 0;
let b = 255;
let g = 0;
let mode = 0;







function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
   
    
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
  
    
}








 // wrapper function ( no parameters or arguments )
function drawChoice() {

  /*
   the key mapping if statements that you can change to do anything you want.
   just make sure each key option has the a stroke or fill and then what type of 
   graphic function. The 'key' global property contains whatever key was last pressed
  */


  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
//  let k = color(0);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat teal line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    SCtrial(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // make your first brush here!!
    SCtellabrush(color(0), mouseX, mouseY, 10);
    

 break;

  case '8':
    console.log("8");  // make your first brush here!!
    SCbrush(color(0), mouseX, mouseY, 10);
    break;

case '9':
    console.log("9");  // make your first brush here!!
    SCtellbrush(color(0), mouseX, mouseY, 10);
    break;
case '0':
    console.log("0"); 
    SCdrawFlower(color(0), mouseX, mouseY, 10);
    break;
  case 'a':
      console.log("b=bezierBrush");
      bezierBrush(mouseX, mouseY, mouseX + 50, mouseY - 50, mouseX + 100, mouseY + 50, mouseX + 150, mouseY);
      break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function SCtrial(kcount, lx, ly,  px, py) {

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(random(255), random(255), random(255));
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}


function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function SCtellabrush(k, lx, ly, sz) {
  fill(random(255),random(255),random(255));
  noStroke();
  ellipse(lx, ly, sz,sz);
}

function SCbrush(k, lx, ly, sz) {
  fill(random(255),random(255),random(255));
  noStroke();
  let size = random(20, 50);
  rect(lx, ly, size,size);
}

function SCtellbrush(k, lx, ly, sz) {
  fill(random(255),random(150),random(255));
  noStroke();
  let size = random(20, 50);
  ellipse(lx, ly, size,size);
}

function SCdrawFlower(k, lx, ly, sz) {
  fill(random(255),random(150),random(255));
  noStroke();
  for (let i = 0; i < 10; i++) {
      ellipse(lx + cos(TWO_PI * i / 10) * sz, ly + sin(TWO_PI * i / 10) * sz, sz, sz);
  }
}


function bezierBrush(x1, y1, x2, y2, x3, y3, x4, y4) {
  stroke(random(255), random(255), random(255));
  strokeWeight(2);
  noFill();
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}


function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

