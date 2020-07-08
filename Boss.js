// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class Boss1 {
  constructor() {
    this.B_height = 100;
    this.B_width = width
    this.B_x = width / 2;
    this.B_y = 0;
    this.B2_y = 50;
    this.moveX = new NoiseLoop(1, width / 2 - 100, width / 2 + 100)
    this.moveY = new NoiseLoop(1, 10, 35)
  }

  update() {

  }

  draw() {
    let p = float(count % frame) / frame
    count++
    push()
    imageMode(CENTER)
    image(Boss, this.B_x, this.B2_y / 2, this.B_width, this.B_height / 2)
    pop()
    
    this.moveX.Set(p * TWO_PI);
    this.moveY.Set(p * TWO_PI);
    push()
    fill(0)
    circle(this.moveX.value(), this.moveY.value(), 20)
    pop()

  }

  page2_draw(i = 0) {

    switch (i) {
      case 1:
        push()
        imageMode(CENTER)
        image(water_tap1, this.B_x, this.B2_y, this.B_width + 160, this.B_height)
        pop()
        break;

      case 2:
        push()
        imageMode(CENTER)
        image(water_tap2, this.B_x, this.B2_y, this.B_width + 160, this.B_height)
        pop()
        break;
    }
  }
}