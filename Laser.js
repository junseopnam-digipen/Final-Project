// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class bullet {
  constructor(x, y, size) {
    this.radius = 10;
    this.ypos = y - size;
    this.xpos = x;
    this.hit = false;
  }

  draw() {
    push()
    stroke(255);
    strokeWeight(1.5);
    fill(0);
    circle(this.xpos, this.ypos, this.radius);
    this.ypos = this.ypos - 6;
    pop()
    
    if(this.ypos < 0){
      this.ypos = 0;
    }
  }

}  