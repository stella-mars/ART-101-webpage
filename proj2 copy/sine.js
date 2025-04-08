class SCsinewave{

constructor(){
// sine and additive oscill example 
this.counter = 10;
this.sincount = 50;
this.addcount = 10;
this.dir = 50;


}

update(){
  push();
  translate(frameCount,this.sincount);
  
  rotate (radians(this.dir));
  // rotate ( counter);   0-360

 
  this.flowers4(-10,10,10,1);
  console.log( sin(this.counter) );
  // remember * is scaling and + is offsetting
  this.sincount = sin(this.counter) * 60  + 400 + this.addcount;

  this.counter+=.15;
  this.addcount += this.dir;

  if ( this.addcount < -250 ||  this.addcount > 250) {
    // background(0,0,random(200),10);
     this.dir = -this.dir;
  } 
  pop();


}




flowers4(lx,ly,rot,sc) {

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

}