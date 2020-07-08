// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

function DrawTitle(label, color = 0) {
  push();
  textSize(80);
  fill(color);
  noStroke();
  text(label, width / 2, 100);
  pop();
}



function DrawExplain() {
  push()
  textSize(30)
  text('Press R!!', width / 2, height - 10);
  pop()
}



function Draw_obstacle1() {
  let obstacle1 = [];

  let i = 0;
  for (let i = 0; i < 150; i++) {
    obstacle1[i] = new Obstacle1(this.x, this.y, this.r)
  }
  obstacle.show()
  obstacle.fly()

}

function Character_health(contents) {
  push();
  textSize(20);
  noStroke();
  text(contents, 125, height - 23);
  pop();
}




class NoiseLoop {
  constructor(d, min, max) {
    this.diameter = d
    this.min = min
    this.max = max

    this.x = random(1000)
    this.y = random(1000)

    this.angle = 0;
  }

  value() {
    let xoff = map(cos(this.angle), -1, 1, this.x, this.x + this.diameter)
    let yoff = map(sin(this.angle), -1, 1, this.y, this.y + this.diameter)
    let r = noise(xoff, yoff)
    return map(r, 0, 1, this.min, this.max);
  }

  Set(angle) {
    this.angle = angle
  }
}




class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return(this.x);
  }

  getY() {
    return(this.y);
  }

  getAngle() {
    return atan2(this.y, this.x);
  }

  setAngle(angle_in_radians) {
    var length = this.getLength();
    this.x = cos(angle_in_radians) * length;
    this.y = sin(angle_in_radians) * length;
  }

  getLength() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  setLength(length) {
    var angle = this.getAngle();
    this.x = cos(angle) * length;
    this.y = sin(angle) * length;
  }

  add(v2) {
    let create = new Vec2(this.x + v2.x, this.y + v2.y)
    return create

  }
  addTo(v2) {
    this.x = this.x + v2.x
    this.y = this.y + v2.y
  }

  subtract(v2) {
    let create = new Vec2(this.x - v2.x, this.y - v2.y)
    return create
  }
  subtractFrom(v2) {
    this.x = this.x - v2.x
    this.y = this.y - v2.y
  }

  multiply(scalar) {
    let create = new Vec2(this.x * scalar, this.y * scalar)
    return create
  }
  multiplyBy(scalar) {
    this.x = this.x * scalar
    this.y = this.y * scalar
  }

  divide(scalar) {
    let create = new Vec2(this.x / scalar, this.y / scalar)
    return create
  }

  divideBy(scalar) {
    this.x = this.x / scalar
    this.y = this.y / scalar
  }

}


class particle {
  constructor(x,y,speed,direction) {
    this.position = new Vec2(x,y);
    this.velocity = new Vec2(0,0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);

  }
  
  update(){
    this.position.addTo(this.velocity);
  }
  
  draw(){
    push()
    noStroke()
    fill('blue');
    circle(this.position.getX(),this.position.getY(),10);
    pop()
  }

  accelerate(accel){
    this.velocity.addTo(accel);
  }
}