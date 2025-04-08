class SCRibbon {
    constructor(startColor, endColor, numPoints = 50) {
      this.startColor = startColor;
      this.endColor = endColor;
      this.numPoints = numPoints;
      this.geometry = this.buildGeometry();
      this.offsets = this.generateOffset();
    }
  
    generateOffset() {
  let offsets = [];
      for (let i = 0; i < this.numPoints; i++) {
      
        offsets.push(random(-70, 50));
      }
      return offsets;
  
    }
  
  
    buildGeometry() {
      let geometry = [];
      for (let currentPoint = 0; currentPoint < this.numPoints; currentPoint++) {
        let x = map(currentPoint,5, this.numPoints - 3, -width / 4, width / 3);
        let y = map(currentPoint, 10, this.numPoints -1, -height / 1, height / 5);
  
        // Change color from red to blue along the ribbon
        for (let z of [-50, 50]) {
          geometry.push({ x, y, z, color: lerpColor(this.startColor, this.endColor, currentPoint / (this.numPoints - 1)) });
        }
      }
      return geometry;
    }
  
    draw() {
      beginShape(QUAD_STRIP);
      for (let i = 0; i < this.geometry.length; i++) {
        let { x, y, z } = this.geometry[i];
        fill(random(200), random(200), random(200));
        vertex(x, y, z);
        

      }
  this.buildGeometry();
  this.generateOffset();
      endShape();
    }

    update() {
    
      for (let i = 0; i < this.geometry.length; i++) {
        let { x, y, z, color } = this.geometry[i];
        x += random(-5, 5);
        y += random(-10, 10);
        z += random(-10, 10);
        this.geometry[i] = { x, y, z, color };
      }
    }
   
  }


