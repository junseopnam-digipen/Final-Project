// Junseop nam
// Final Project
// CS099
// Spring 2020.6.30

class Obstacle1 {
  constructor() {
    this.x = random(30, 770);
    this.y = 0;
    this.r = 100;
  }

  show() {
    push()
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    imageMode(CENTER)
    image(rock, this.x, this.y, this.r, this.r);
    pop()
  }

  fly() {
    if (this.y < 600) {
      this.y = this.y + 10
    } else {
      this.y = 0
      this.x = random(0, 800);
    }
  }

}



class Energy_ball {
  constructor(x, y, i) {
    this.Ball_x = x;
    this.Ball_y = y;
    this.angle = random(-PI / 5, PI / 5);
    this.Ball_x_speed = 6 * cos(this.angle);
    this.Ball_y_speed = 6 * sin(this.angle);
    this.i = i
  }

  update() {
    this.Ball_x += this.Ball_x_speed;
    this.Ball_y += this.Ball_y_speed;

    if (this.Ball_x < 0 || this.Ball_x > width) {
      this.Ball_x_speed *= -1
    }

    if (this.Ball_y < 60 || this.Ball_y > height) {
      this.Ball_y_speed *= -1
    }

  }
  draw() {
    switch (this.i) {
      case 1:
        push()
        imageMode(CENTER)
        image(fireball, this.Ball_x, this.Ball_y, 50, 50);
        pop()
        break;
      case 2:
        push()
        imageMode(CENTER)
        image(darkball, this.Ball_x, this.Ball_y, 50, 50);
        pop()
        break;
      case 3:
        push()
        imageMode(CENTER)
        image(waterball, this.Ball_x, this.Ball_y, 50, 50);
        pop()
        break;

    }
  }

}

class Boss_shield {
  constructor() {
    this.shield_x = width / 2;
    this.shield_y = 70;
    this.width = 200;
    this.height = 50;
    this.speed = 5;
  }

  update() {
    this.shield_x += this.speed

    if (this.shield_x - this.width / 2 < 0) {
      this.speed *= -1;
    } else if (this.shield_x + this.width / 2 > width) {
      this.speed *= -1;
    }
  }

  draw() {
    push()
    imageMode(CENTER)
    image(bossshield, this.shield_x, this.shield_y, this.width, this.height);
    pop()
  }
}