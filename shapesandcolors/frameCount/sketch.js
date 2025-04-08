let NUMSINES = 30; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles
let rad; // an initial radius value for the central sine
let i; // a counter variable

let counter;

let recMode = false; // Record mode flag to start/stop recording

// play with these to get a sense of what's going on:
let fund = 0.005; // the speed of the central sine
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 50; // how opaque is the tracing system

let trace = false; // are we tracing?

function setup() {
  createCanvas(710, 400);

  rad = height / 4; // compute radius for central circle
  background(0); // clear the screen

  for (let i = 0; i < sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }

  frameRate(10);
}

function draw() {
  if (!trace) {
    background(255); // clear screen if showing geometry
    stroke(0, 255); // black pen
    noFill(); // don't fill
  }


  if (frameCount < 100) {
    console.log("the first act");
    push(); // start a transformation matrix
    translate(width / 3, height / 2); // move to middle of screen

    drawSines(); // Refactor the drawing logic into a function

    pop(); // pop down final transformation
  }
  
  else if (frameCount < 250) {
    console.log("the second act");
    push(); // start a transformation matrix
    translate(width / 2, height / 2); // move to middle of screen

    drawSines(); // Refactor the drawing logic into a function

    pop(); // pop down final transformation
  }


  if (recMode) {
    recordit();
  }
}


function drawSines() {
  for (let i = 0; i < sines.length; i++) {
    let erad = 5; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(random(200), random(100), 200 * (float(i) / sines.length), alpha); // blue
      fill(random(255), random(255), random(255), alpha / 2); // also, um, blue
      erad = 12.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine
    }
    let radius = rad / (i + 1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(10, 0, radius * 5, radius * 2); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (!trace) rect(20, 20, 15, 5); // draw a little circle
    if (trace) ellipse(10, 10, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(10, radius); // move into position for next sine
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; // update angle based on fundamental
  }
}

function keyReleased() {
  if (key == ' ') {
    trace = !trace;
    background(255);
  }
}

function keyPressed() {
  if (keyIsPressed === true) {
    let k = key; 
    console.log("k is " + k);

    // Start recording
    if (k == 'c' || k == 'C') {
      console.log("Start Recording");
      recMode = true;
      loop(); // Starts drawing continuously
    }

    // Stop recording
    if (k == 's' || k == 'S') {
      console.log("Stop Recording");
      recMode = false;
      noLoop(); 
    }
  }
}

// Save the canvas frames
function recordit() {
  if (recMode) {
    let ext = nf(frameCount, 1);
    saveCanvas('frame-' + ext, 'jpg');
    console.log("Recording frame " + ext);
  }
}
