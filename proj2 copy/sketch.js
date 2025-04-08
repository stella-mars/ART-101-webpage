// sine and additive oscill example 
// let counter = 0;
// let sincount = 0;
// let addcount = 0;
// let dir = 0;
let recMode = false; // Record mode flag to start/stop recording
let wiggleShader;

let RibbonArr = [];

let i;

let sine;

let rotcounter;


let canvas;

let wave;


let ribbon;






///////////////////////////////////

function setup() {
 createCanvas(710,400);
 background(20);
 fill(255);
 

 let startColor = color('#Fs50');
  let endColor = color('#20F');
//  dir = random(-5,5);

 sine= new SCsinewave();
 ribbon = new SCRibbon(startColor, endColor);
 wave = new SCWave(10, 20);




 for (let i = 0; i < 30; i++) {
  RibbonArr.push(new SCRibbon(startColor, endColor));
}
 frameRate(5);
//  dir = -.1;
}

function draw() {
 



  if (frameCount < 100) {
console.log("the first act of flowers");
push();
background(0,random(200),random(200),10);
sine.update();
pop ();


  }
  
  
  
  else if (frameCount < 550) {
    console.log("second act");
   push();
background(0,random(200),random(200),10);
sine.update();
wave.update();
pop ();
    
  }
  
  
  
  else if (frameCount < 600) {
    console.log("third act");
    push();

   
    createCanvas(710,400);
    // rotateX(PI * 0.1);
    background(0,random(200),random(200),10);

    for (let i = 0; i < RibbonArr.length; i++) {
      RibbonArr[i].draw();
      RibbonArr[i].update();
     
      
    ribbon.update();
    ribbon.draw();
    
    }

    
 
    pop();
    
    push();
    wave.update();
    sine.update();
    pop();
  
   
  }
  else if (frameCount < 900) {
    console.log("fourth act");
   
    push();
    background(0,random(200),random(200),10);
    sine.update();
    wave.update();
    pop ();
        

   
  }
  else  {
    for (let i = 0; i < RibbonArr.length; i++) {
      RibbonArr[i].draw();
      RibbonArr[i].update();
     
      
    ribbon.update();
    ribbon.draw();
    
    }


  }

  if (recMode) {
    recordit();
  }
}



function keyPressed() {

  if (key === ' ' || key === 'Space') {
    console.log("Start Recording");
    recMode = true;
    loop(); 
  }

  // Stop recording (press 'S')
  if (key === 's' || key === 'S') {
    console.log("Stopped Recording");
    recMode = false;
    noLoop(); 
  }
}


function recordit() {
  if (recMode) {
    let ext = nf(frameCount, 4); 
    saveCanvas('frame-' + ext, 'jpg'); 
    console.log("Recording frame " + ext);

  }
}