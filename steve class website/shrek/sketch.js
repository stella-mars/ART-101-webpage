


let lxo = 0;
let lyo = 30;
let lso = 0;
let lro= 0;
let shrek; 

function preload (){

shrek = loadImage ("shrek.gif");
donkey = loadImage ("donkey.gif");
shrek2 = loadImage ("shrek2.jpeg");
uiiau = loadImage ("uiiau.gif");
happy = loadImage ("happycat.gif");
shrimp = loadImage ("shrimp.gif");
}




function setup() {
  createCanvas(500, 600);
  imageMode (CENTER);

  shrek.resize (500,500);
  donkey.resize (400, 400);
  shrek2.resize (400,400);
  uiiau.resize (200,200);
  happy.resize (400,400);
  shrimp.resize (200,200);
  
}





function draw() {

  let r = random(255);
background(0);
strokeWeight(3);

for (let i = 0; i < 600; i += 25) {
    for (let j = 0; j < 600; j += 25) {
      rand = random(255);
      fill(random(255), random(255), random(255));
      rect( i+5, j+5, 20, 20 );
      console.log("shrek rave!");
     
    }
  }


//laser

strokeWeight(10)




stroke(r, mouseX, r,)
line(250, 0, mouseX, mouseY);

stroke(mouseX,mouseY,r)
line(260, 0, mouseX + 50, mouseY + 50);

stroke(mouseX,mouseY,0)
line(270, 0, mouseX + 100, mouseY + 100);

stroke(255,mouseY,0)
line(280, 0, mouseX + 150, mouseY + 150);

strokeWeight(3)
stroke(0)

//laser end



//gif

image(shrek, mouseX, mouseY);

//gif end


//-----shrek 1
push();

//shirt
fill(99, 77, 62);
// fill(r, 100,255);
circle(250 +lxo,500 + lyo,450);
//shirt end


//neck
fill(101, 153, 41);
ellipse(250 + lxo,290 + lyo,170,300);
//neck end


//ears
strokeWeight(20);
stroke(112 , 148 , 34);


line(200 + lxo,250 +lyo,120 +lxo ,120 + lyo );
line(340 + lxo,190 +lyo,380 + lxo,120 + lyo);

stroke(0);
strokeWeight(3);

circle(120 +lxo,120 + lyo,40);
circle(380 + lxo,120 + lyo,40);

//ears end


//head
fill(136, 176, 51);
ellipse(250 + lxo,230 + lyo,250,280);
//head end

//party hat

fill(r, mouseX, mouseY);
triangle(190 + lxo,140 + lyo,250 + lxo,10 + lyo,300 + lxo,140 + lyo)

fill(mouseX, r, mouseY);
square(225 + lxo, 0 +lyo, 50, 20)

//party hat end

//scelras
fill(244, 245, 213);
ellipse(200 + lxo,210 + lyo,50,40);

fill(244, 245, 213);
ellipse(300 + lxo,210 + lyo,50,40);

//scerlas end

//pupils
// fill(99, 77, 62);
fill(r, 77, 62);
ellipse(200 + lxo,210 + lyo,20,20);


// fill(99, 77, 62);
fill(r, 77, 62);
ellipse(300 + lxo,210 + lyo,20,20);

//end pupils


//nose 

fill(112, 148, 34);
ellipse(280 + lxo,250 + lyo,20,20);

fill(112, 148, 34);
ellipse(220 + lxo,250 + lyo,20,20);

fill(112, 148, 34);
ellipse(250 + lxo, 250 + lyo, 60, 40);

//nose end

//eyebrows

line(190 + lxo,170 + lyo,230 + lxo,200 + lyo);

line(310 + lxo,170 + lyo,270 + lxo,200 + lyo);

//eyebrows end

//mouth

line(200 + lxo,300 + lyo,300 + lxo,300 + lyo);

//-----------end face

lxo+= 1;
lyo+= 0;

push();

//------shrek 1 end


pop()

//shirt
fill(212, 38, 224);
// fill(r, 100,255);
circle(250 +lxo,500 + lso,450);
//shirt end


//neck
fill(101, 153, 41);
ellipse(250 + lxo,290 + lso,170,300);
//neck end


//ears
strokeWeight(20);
stroke(112 , 148 , 34);


line(200 + lxo,250 +lso,120 +lso ,120 + lso );
line(340 + lxo,190 +lso,380 + lso,120 + lso);

stroke(0);
strokeWeight(3);

circle(120 +lxo,120 + lso,40);
circle(380 + lxo,120 + lso,40);

//ears end


//head
fill(136, 176, 51);
ellipse(250 + lxo,230 + lso,250,280);

//party hat

fill(mouseX, r, mouseY);
triangle(190 + lxo,140 + lso,250 + lxo,10 + lso,300 + lxo,140 + lso)

fill(mouseY, r, mouseX);
square(225 + lxo, 0 +lso, 50, 20)

//scelras
fill(244, 245, 213);
ellipse(200 + lxo,210 + lso,50,40);

fill(244, 245, 213);
ellipse(300 + lxo,210 + lso,50,40);

//pupils
// fill(99, 77, 62);
fill(r, 77, 62);
ellipse(200 + lxo,210 + lso,20,20);


// fill(99, 77, 62);
fill(r, 77, 62);
ellipse(300 + lxo,210 + lso,20,20);

//nose 

fill(112, 148, 34);
ellipse(280 + lxo,250 + lso,20,20);

fill(112, 148, 34);
ellipse(220 + lxo,250 + lso,20,20);

fill(112, 148, 34);
ellipse(250 + lxo, 250 + lso, 60, 40);

//eyebrows

line(190 + lxo,170 + lso,230 + lxo,200 + lso);

line(310 + lxo,170 + lso,270 + lxo,200 + lso);

//mouth

line(200 + lxo,300 + lso,300 + lxo,300 + lso);

lxo+= 0;
lso+= 1;

push()
//-------shrek 2


//----shrek 3
pop()

//shirt
fill(15, 255, 59);
// fill(r, 100,255);
circle(250 +lxo,500 + lro,450);
//shirt end


//neck
fill(101, 153, 41);
ellipse(250 + lxo,290 + lro,170,300);
//neck end


//ears
strokeWeight(20);
stroke(112 , 148 , 34);


line(200 + lxo,250 +lro,120 +lro ,120 + lro );
line(340 + lxo,190 +lro,380 + lro,120 + lro);

stroke(0);
strokeWeight(3);

circle(120 +lxo,120 + lro,40);
circle(380 + lxo,120 + lro,40);

//ears end


//head
fill(136, 176, 51);
ellipse(250 + lxo,230 + lro,250,280);

//party hat

fill(r, r, mouseX);
triangle(190 + lxo,140 + lro,250 + lxo,10 + lro,300 + lxo,140 + lro)

fill(mouseY, mouseX, r);
square(225 + lxo, 0 +lro, 50, 20)

//scelras
fill(244, 245, 213);
ellipse(200 + lxo,210 + lro,50,40);

fill(244, 245, 213);
ellipse(300 + lxo,210 + lro,50,40);

//pupils
// fill(99, 77, 62);
fill(r, 77, 62);
ellipse(200 + lxo,210 + lro,20,20);


// fill(99, 77, 62);
fill(r, 77, 62);
ellipse(300 + lxo,210 + lro,20,20);

//nose 

fill(112, 148, 34);
ellipse(280 + lxo,250 + lro,20,20);

fill(112, 148, 34);
ellipse(220 + lxo,250 + lro,20,20);

fill(112, 148, 34);
ellipse(250 + lxo, 250 + lro, 60, 40);

//eyebrows

line(190 + lxo,170 + lro,230 + lxo,200 + lro);

line(310 + lxo,170 + lro,270 + lxo,200 + lro);

//mouth

line(200 + lxo,300 + lro,300 + lxo,300 + lro);

lxo+= 0;
lro+= 2;

push()


//------- end shrek 3

if (mouseIsPressed) {

  if(mouseX < 300){
    if(mouseY <300){
      image(donkey, width/2, height/2);

    }
  }

if(mouseX >400){
  if(mouseY >400){
image(shrek2, width/2, height/2);
  }
}

if (mouseX >200){
  if(mouseY < 400){
    image(shrimp, width/5, height/1.2);
  }
}

}


if (mouseX > 400){
  
    // image(happy, width/1, height/2);
    image(happy, width/4, height/2);
    image(happy, width/2, height/2);
    image(happy, width/3, height/2);
  }

if (mouseX <200){
  image(uiiau, width/2, height/4)
  

}





//text
textSize(50)
textAlign(CENTER);
text('yee haw !!', 250,550);

}


