// Junseop nam
// Final Project
// CS099
// Spring 2020.7.8

class character {
  constructor() {
    this.x = width / 2;
    this.y = height * 3 / 4;
    this.work = false;
    this.size = 30;
    this.keycheck = false;
  }

  page1_move() {
    if (this.work == true) {
      if (this.x > 0 && this.x < width && this.y > 65 && this.y < height) {
        if (keyIsDown(65)) {
          this.x -= 3.5
        }

        if (keyIsDown(68)) {
          this.x += 3.5
        }
        if (keyIsDown(87)) {
          this.y -= 3.5
        }

        if (keyIsDown(83)) {
          this.y += 3.5

        }
      }
    }

    if (this.x <= 0) {
      this.x = 1;
    }
    if (this.x >= width) {
      this.x = width - 1;
    }
    if (this.y <= 65) {
      this.y = 66;
    }
    if (this.y >= height) {
      this.y = height - 1;
    }

  }

  draw() {
    push()
    fill(character_color);
    circle(this.x, this.y, this.size);
    fill('white')
    circle(this.x - 6, this.y- 5, this.size/3)
    fill('black')
    circle(this.x - 6, this.y- 7, 5)
    fill('white')
    circle(this.x + 6, this.y- 5, this.size/3)
    fill('black')
    circle(this.x + 6, this.y- 7, 5)
    pop();
  }

  page2_move() {
    push()
    imageMode(CENTER);
    image(Page2_ground,width/2, height * 3 / 4 - 10, width, 1000);
    image(Page2_ground,width/2, height * 3 / 4 + 80, width, 1000);
    image(Page2_ground,width/2, height * 3 / 4 + 180, width, 1000);
    pop()

    if (this.y == height * 3 / 4 || this.y == height * 3 / 4 + 100) {
      if (keyIsPressed && !this.keycheck && keyCode == '87') {
        this.y -= 100;
        this.keycheck = true;
      } else if (!keyIsPressed) {
        this.keycheck = false;
      }
    }

    if (this.y == height * 3 / 4 || this.y == height * 3 / 4 - 100) {
      if (keyIsPressed && !this.keycheck && keyCode == '83') {
        this.y += 100;
        this.keycheck = true;
      } else if (!keyIsPressed) {
        this.keycheck = false;
      }
    }

    if (this.x > 0 && this.x < width) {
      if (keyIsDown(65)) {
        this.x -= 3.5
      }

      if (keyIsDown(68)) {
        this.x += 3.5
      }
    }
    if (this.x <= 0) {
      this.x = 1;
    }
    if (this.x >= width) {
      this.x = width - 1;
    }

  }

}