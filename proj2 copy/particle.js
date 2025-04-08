class SCWave {
    constructor(maxwaves, xspacing) {
      this.maxwaves = maxwaves; 
      this.xspacing = xspacing; 
      this.amplitude = new Array(this.maxwaves); 
      this.dx = new Array(this.maxwaves); 
      this.theta = 0.0; 
      this.yvalues = []; 
      this.w = width + 16; 
  

      for (let i = 0; i < this.maxwaves; i++) {
        this.amplitude[i] = random(10, 30);
        let period = random(100, 300); 
        this.dx[i] = (TWO_PI / period) * this.xspacing;
      }
  
      this.yvalues = new Array(floor(this.w / this.xspacing)); 
    }
  
    
    calcWave() {
      this.theta += 0.02; 
      for (let i = 0; i < this.yvalues.length; i++) {
        this.yvalues[i] = 0;
      }
  
      
      for (let j = 0; j < this.maxwaves; j++) {
        let x = this.theta;
        for (let i = 0; i < this.yvalues.length; i++) {
          
          if (j % 2 == 0) this.yvalues[i] += sin(x) * this.amplitude[j];
          else this.yvalues[i] += cos(x) * this.amplitude[j];
          x += this.dx[j];
        }
      }
    }
  
   
    renderWave() {
      noStroke();
      fill(255, 50, random);
      ellipseMode(CENTER);
      for (let x = 0; x < this.yvalues.length; x++) {
        ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 16, 16);
      }
    }
  
   
    update() {
      this.calcWave();
      this.renderWave();
    }
  }
  
 