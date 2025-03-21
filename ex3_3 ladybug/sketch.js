


// example 2.3.3 this introduce the transformation  function set

let lxo = 0;
let lyo = 0;



// let counter = 0;    
let counter1 = 100;
let counter2 = 0;
let counter3 = 1;
let counter4 = 100;
let counter5 = 0;
let counter6 = 1;



let speedx, speedy, lox, loy;
let lox1 = 0;
let loy1 = 0;

function setup() {
    background(0);
    createCanvas(500, 500);
    speedx = random(-5, 5);
    speedy = random(-5, 5);
    lox = height / 2;
    loy = width / 2;
   
    console.log(speedx + " " + speedy);




}

function draw() {
    background(21, 150, 53);
//bounce
    if (lox < 100-30) {
        speedx = -speedx;
    }
    if (lox > width-100+30) {
        speedx = -speedx;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loy < 90) || (loy > height-90)) {
        speedy = -speedy;
    }

//wrap
    if (lox1 < 0) {
        lox1 = width;
    }
    if (lox1 > width) {
        lox1 = 0;
    }
    if (loy1 < 0) {
        loy1 = height;
    }
    if (loy1 > height) {
        loy1 = 0;
    }


    // update the position of the ball and print to screen
    lox += speedx;
    loy += speedy;

    lox1 += speedx;
    loy1 += speedy;
    SCworm1(lox1,loy1);

    // rect (lox,loy,30,30, 5);
    counter1+=.1;
    counter2+= -.001;
    counter3+= -.001; 
    
    SCflowers(counter4,400, -counter5, counter6);
    SCflowers2(counter4,200, -counter5, counter6);
    SCflowers3(counter4,100, -counter5, counter6);
    SCflowers4(counter4,300, -counter5, counter6);
  

    counter4+=.2;
    counter5+= -.002;
    counter6+= -.001; 


    
    counter6=counter6%2;

    SCladybug(lox,loy);
    SCladybug2(50,loy);
    SCladybug3(lox1,loy1,counter1,counter3);
    SCworm(lox,loy);
    



    
}
function SCflowers(lx,ly,rot,sc) {

    push();
        translate(lx,ly);
        rotate(rot);
        scale(sc);

    //flower petals
    strokeWeight(0);
    fill(237, 220, 245);
    ellipse(50,50,30,30);

    ellipse(70,70,30,30);
    ellipse(30,70,30,30);
    ellipse(50,90,30,30);
    
    
    //flower center
    fill(224, 167, 22);
    ellipse(50,70,30,30);

    let c = color(0,200,0);

    pop();
 
      }

      function SCflowers2(lx,ly,rot,sc) {

        push();
            translate(lx,ly);
            rotate(rot);
            scale(sc);
    
        //flower petals
        strokeWeight(0);
        fill(237, 220, 245);
        ellipse(50,50,30,30);
    
        ellipse(70,70,30,30);
        ellipse(30,70,30,30);
        ellipse(50,90,30,30);
        
        
        //flower center
        fill(224, 167, 22);
        ellipse(50,70,30,30);
    
        let c = color(0,200,0);
    
        pop();
     
          }


function SCflowers3(lx,ly,rot,sc) {

            push();
                translate(lx,ly);
                rotate(rot);
                scale(sc);
        
            //flower petals
            strokeWeight(0);
            fill(237, 220, 245);
            ellipse(50,50,30,30);
        
            ellipse(70,70,30,30);
            ellipse(30,70,30,30);
            ellipse(50,90,30,30);
            
            
            //flower center
            fill(224, 167, 22);
            ellipse(50,70,30,30);
        
            let c = color(0,200,0);
        
            pop();
         
      }
    
      function SCflowers4(lx,ly,rot,sc) {

        push();
            translate(lx,ly);
            rotate(rot);
            scale(sc);
    
        //flower petals
        strokeWeight(0);
        fill(237, 220, 245);
        ellipse(50,50,30,30);
    
        ellipse(70,70,30,30);
        ellipse(30,70,30,30);
        ellipse(50,90,30,30);
        
        
        //flower center
        fill(224, 167, 22);
        ellipse(50,70,30,30);
    
        let c = color(0,200,0);
    
        pop();
     
  }



  function SCladybug(lx,ly,rot,sc) {
    push();
        translate(lx,ly);
        rotate((radians(rot)));
        scale(sc);
       
     
        bug(-50,50);
     
        atennae(-50,50);
        
        eyes(-50,50);
     
        dots(-50,50);
    
      
    
        pop();

        
  }

function SCladybug2(lx,ly) {
push() ;

translate(lx,ly);
rotate(random(0,1));
scale(random(0.5,1));
   
fill(0);
bug(-50,50);

atennae(-50,50);

eyes(-50,50);

dots(-50,50);

partyhat(-50,50);

boots(-50,50);


let c = color(0,200,0);



pop();



  }

  function SCladybug3(lx,ly,rot) {
    push() ;
    
    translate(lx-50,ly-50);
    rotate((radians(rot)));
    scale(0.5);
    
       
    tongue(-50,50);
    bug3(-50,50);
    atennae(-50,50);
    eyes(-50,50);
  
    dots(-50,50);

    
    let c = color(random(255));
  
    
    
    pop();
    
    
    
      }

function dots (){
    strokeWeight(0);
    fill(255);
    ellipse(-25,-20,25,25);

    fill(255);
    ellipse(25,-20,25,25);

    fill(255);
    ellipse(-25,20,25,25);

    fill(255);
    ellipse(25,20,25,25);
    strokeWeight(0);

    
}

function eyes(){
    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);
}

function bug(){

    strokeWeight(5);
    fill(0);
    ellipse(0,-50,50,50);

    fill(255,0, 0);
    ellipse(0,0,100,100);  

    line(0,-30,0,50);

    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);

    
}
function bug3(){

    strokeWeight(5);
    fill(0);
    ellipse(0,-50,50,50);

    fill(random(255),random(255),random(255));
    ellipse(0,0,100,100);  

    line(0,-30,0,50);

    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);



 
}


function bug1(){

    strokeWeight(5);
    fill(0);
    ellipse(0,-50,50,50);

    fill(255,0, 0);
    ellipse(0,0,100,100);  

    line(0,-30,0,50);

    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);

    
}

function partyhat(){
let r = random(255);
strokeWeight(5);
    fill(255,155,r);
    triangle(-10,-70,10,-70,0,-100);

    // fill(255,155,r);
    // circle(0,-100,20);   



}


function boots(){
strokeWeight(5);
fill(235, 170, 7);
ellipse(-50,-30,-20,25);


fill(235, 170, 7);
ellipse(50,-30,-20,25);

fill(235, 170, 7);
ellipse(-60,10,-20,25);

fill(235, 170, 7);
ellipse(60,10,-20,25);

}


function atennae(){
    fill(0);
    line(-20,-100,-10,-50);

    fill(0);
    line(20,-100,10,-50);
}


function tongue(){  
    fill(255,0,0);
    ellipse(0,-80,20,30);
}


//worm
function SCworm(lx, ly, rot, sc){

push();

translate(400-lx,ly);
rotate((radians(rot))); 
scale(0.5);


sec1(-50,50);
sec2(-50,50);
sec3(-50,50);
sec4(-50,50); 
sec5(-50,50);
sec6(-50,50);
sec7(-50,50);
attenaeworm(-50,50);
balls(-50,50);

pop();
}


function SCworm1(lx,ly,rot,sc){
push();
translate(lx,ly);
rotate((radians(rot)));
scale(sc);



    sec11(-50,50);
    sec22(-50,50);
    sec33(-50,50);
    sec44(-50,50); 
    sec55(-50,50);
    sec66(-50,50);
    sec77(-50,50);
    attenaeworm(-50,50);
    balls(-50,50);
    

pop();
}

function sec1(){

    strokeWeight(3);
    fill(161, 66, 245);
    ellipse(50,50,50,50);
}   

function sec11(){

    strokeWeight(3);
    fill(0);
    ellipse(50,50,50,50);
}   


function sec2(){

    strokeWeight(3);
    fill(96, 66, 245);
    ellipse(90,50,50,50);
}   


function sec22(){

    strokeWeight(3);
    fill(255);
    ellipse(90,50,50,50);
}   


function sec3(){

    strokeWeight(3);
    fill(66, 245, 96);
    ellipse(130,50,50,50);
}
function sec33(){

    strokeWeight(3);
    fill(0);
    ellipse(130,50,50,50);
}

function sec4(){
    
        strokeWeight(3);
        fill(186, 250, 57);
        ellipse(170,50,50,50);
}
function sec44(){
    
    strokeWeight(3);
    fill(255);
    ellipse(170,50,50,50);
}

function sec5(){
    
    strokeWeight(3);
    fill(250, 231, 57);
    ellipse(210,50,50,50);
}

function sec55(){
    
    strokeWeight(3);
    fill(0);
    ellipse(210,50,50,50);
}

function sec6(){
    
    strokeWeight(3);
    fill(250, 160, 57);
    ellipse(250,50,50,50);
}
function sec66(){
    
    strokeWeight(3);
    fill(255);
    ellipse(250,50,50,50);
}


function sec7(){
    
    strokeWeight(3);
    fill(250, 57, 57);
    ellipse(290,50,50,50);
}
function sec77(){
    
    strokeWeight(3);
    fill(0);
    ellipse(290,50,50,50);
}

function attenaeworm(){
    fill(0);
    line(280,25,280,10);

    fill(0);
    line(300,25,310,10);
}

function balls(){
   ellipse(280,10,10,10);
    ellipse(310,10,10,10);
}

