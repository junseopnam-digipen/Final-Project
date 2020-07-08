// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class Page1Screen {
  constructor() {
    this.BG = Page1_BG;
    this.character_life = 100;
    this.Hero = new character();
    this.Bullet = [];
    this.count = 7;
    this.boss = new Boss1()
    this.B_life = 200;
    this.ball1 = new Energy_ball(100, 100, 1);
    this.ball2 = new Energy_ball(width - 100, 100, 1);
    this.ball3 = new Energy_ball(width - 100, 100, 2);
    this.ball4 = new Energy_ball(100, 100, 2);
    this.boss_shield = new Boss_shield()
    this.move_x1 = new NoiseLoop(1, 85, 115)
    this.move_x2 = new NoiseLoop(1,width - 115, width - 85)
    this.move_y = new NoiseLoop(1, 85, 115)

  }

  Update() {
    background(this.BG);
    this.Hero.work = true;
    this.Hero.page1_move();
    //Scene change
    if (this.character_life < 0) {
      CurrentScene = DefeatScene;
    }

    if (this.B_life == 0) {
      push()
      textSize(50)
      text('Press E!!', width / 2, height / 2)
      pop()
      if (keyIsDown(69)) {
        CurrentScene = Story2Scene;
      }
    }
  }

  Draw() {
//Boss Googly Eyes
    let p = float(count % frame) / frame
    count++
    this.move_x1.Set(p * TWO_PI);
    this.move_x2.Set(p * TWO_PI);
    this.move_y.Set(p * TWO_PI);
    push()
    fill('white')
    line(100, 100, 100, 50)
    line(width - 100, 100, width - 100, 50)
    circle(width - 100, 100, 50)
    circle(100, 100, 50)
    fill('black')
    circle(this.move_x1.value(), this.move_y.value(),30)
    circle(this.move_x2.value(), this.move_y.value(),30)
    pop()
    
    this.boss.draw();
    //Boss HP
    push()
    fill('gray')
    rect(10, 10, 200, 30)
    pop()
    if (this.B_life > 0) {
      push()
      fill('red')
      rect(10, 10, this.B_life, 30)
      pop()
    }
    if (this.B_life < 0) {
      this.B_life = 0;
    }
    //Hero
    push()
    imageMode(CENTER)
    image(Health_ba, 130, height - 30, 350, 200)
    pop()
    Character_health("Character HP:" + this.character_life)
    this.Hero.draw();

    //Rock
    Draw_obstacle1();

  }

  playing() {
    //Bullet and delay
    if (keyIsDown(UP_ARROW) && this.count == 0) {
      this.Bullet.push(new bullet(this.Hero.x, this.Hero.y, 10))
      laser_sound.play();
      this.count = 7
    }

    if (this.count > 0) {
      this.count--
    }

    for (var i = 0; i < this.Bullet.length; i++) {
      this.Bullet[i].draw();

      //Remove bullet
      if (this.Bullet.length > 20) {
        this.Bullet.splice(i, 1);
      }

      //Boss hit judgment
      if (round(this.Bullet[i].ypos) == 50 || round(this.Bullet[i].ypos) == 49 || round(this.Bullet[i].ypos) == 48 || round(this.Bullet[i].ypos) == 47 || round(this.Bullet[i].ypos) == 46) {
        this.Bullet[i].hit = true;
      }
      if (this.Bullet[i].hit == true) {
        this.B_life = this.B_life - 1
        this.Bullet[i].hit = false
      }

      //Boss shield
      if (this.boss_shield.shield_x - this.boss_shield.width / 2 < this.Bullet[i].xpos && this.Bullet[i].xpos < this.boss_shield.shield_x + this.boss_shield.width / 2 && this.boss_shield.shield_y - this.boss_shield.height / 2 < this.Bullet[i].ypos && this.Bullet[i].ypos < this.boss_shield.shield_y + this.boss_shield.height / 2) {
        this.Bullet.splice(i, 1);
      }

    }
  }

  obstacle() {
    //Rock hit
    if (this.B_life > 0) {
      if (dist(this.Hero.x, this.Hero.y, obstacle.x, obstacle.y) <= 65) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }

      //Fire ball hit
      if (dist(this.Hero.x, this.Hero.y, this.ball1.Ball_x, this.ball1.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }
      //Fire ball hit
      if (dist(this.Hero.x, this.Hero.y, this.ball2.Ball_x, this.ball2.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }
      
      //Dark ball hit
      if (dist(this.Hero.x, this.Hero.y, this.ball3.Ball_x, this.ball3.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }
      //Dark ball hit
      if (dist(this.Hero.x, this.Hero.y, this.ball4.Ball_x, this.ball4.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }

      this.ball1.update();
      this.ball1.draw();
      this.ball2.update();
      this.ball2.draw();

      this.boss_shield.update()
      this.boss_shield.draw()

      if (this.B_life > 0 && this.B_life < 100) {
        this.ball3.update();
        this.ball3.draw();
        this.ball4.update();
        this.ball4.draw();
      }

    }
  }

}