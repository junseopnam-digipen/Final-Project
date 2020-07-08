// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class Page2Screen {
  constructor() {
    this.BG = 'black';
    this.character_life = 100;
    this.Hero2 = new character();
    this.Bullet2 = [];
    this.count = 7;
    this.boss = new Boss1()
    this.B2_life = 150;
    this.Particle = [];
    this.p = new particle(width / 2, 50, 1, random(0, TWO_PI), 10, 0.1);
    this.accel = new Vec2(0, 0.1);
    this.ball1 = new Energy_ball(width/2, 100, 3);
    this.ball2 = new Energy_ball(width/2, 100, 3);
    this.ball3 = new Energy_ball(width/2, 100, 3);
    this.ball4 = new Energy_ball(width/2, 100, 3);
  }

  Update() {
    background(this.BG);
    this.Hero2.work = true;
    this.Hero2.page2_move();

    if (this.character_life < 0) {
      CurrentScene = DefeatScene;
    }

    if (this.B2_life == 0) {
      push()
      textSize(50)
      fill(255)
      text('Press E!!', width / 2, height / 2)
      pop()
      if (keyIsDown(69)) {
        CurrentScene = EndingScene;
      }
    }
  }

  Draw() {
    if (this.B2_life > 0) {
      this.boss.page2_draw(1);
      push()
      textSize(20)
      text('Required hits:' + this.B2_life, 90, 30)
      pop()
    } else if (this.B2_life <= 0) {
      push()
      this.boss.page2_draw(2);
      textSize(20)
      text('Required hits:0', 90, 30)
      this.B2_life = 0;
      pop()

      for (let i = 0; i < this.Particle.length; ++i) {
        let b = this.Particle[i];
        b.accelerate(this.accel);
        b.update();
        b.draw();
        if (b.position.getY() > 600) {
          this.Particle.splice(i, 1)
        }
      }
      for (let i = 0; i < 2; ++i) {
        this.Particle.push(new particle(width / 2, 100, random(1, 5), random(0, TWO_PI)));
        this.p.accelerate(this.accel);
        this.p.update();
        this.p.draw();
      }
    }

    push()
    imageMode(CENTER)
    image(Health_ba, 130, height - 30, 350, 200)
    pop()
    Character_health("Character HP:" + this.character_life)
    this.Hero2.draw();

    Draw_obstacle1();
  }

  playing() {

    if (keyIsDown(UP_ARROW) && this.count == 0) {
      this.Bullet2.push(new bullet(this.Hero2.x, this.Hero2.y, 10))
      laser_sound.play();
      this.count = 7
    }

    if (this.count > 0) {
      this.count--
    }

    for (var i = 0; i < this.Bullet2.length; i++) {
      this.Bullet2[i].draw();


      //Boss hit judgment
      if (round(this.Bullet2[i].ypos) == 36 || round(this.Bullet2[i].ypos) == 35 || round(this.Bullet2[i].ypos) == 34 || round(this.Bullet2[i].ypos) == 33 || round(this.Bullet2[i].ypos) == 32) {
        this.Bullet2[i].hit = true;
      }
      if (this.Bullet2[i].hit == true) {
        this.B2_life = this.B2_life - 1
        this.Bullet2[i].hit = false
        this.Bullet2.splice(i, 1);
      }
    }
  }

  obstacle() {
    if (this.B2_life > 0) {
      if (dist(this.Hero2.x, this.Hero2.y, obstacle.x, obstacle.y) <= 65) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }
      //water ball hit
      if (dist(this.Hero2.x, this.Hero2.y, this.ball4.Ball_x, this.ball4.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }

      if (dist(this.Hero2.x, this.Hero2.y, this.ball3.Ball_x, this.ball3.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }
      if (dist(this.Hero2.x, this.Hero2.y, this.ball2.Ball_x, this.ball2.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }
      if (dist(this.Hero2.x, this.Hero2.y, this.ball1.Ball_x, this.ball1.Ball_y) <= 40) {
        this.character_life = this.character_life - 1
        hit_sound.play();
      }

      this.ball3.update();
      this.ball3.draw();
      this.ball2.update();
      this.ball2.draw();
    }

    if (this.B2_life > 0 && this.B2_life < 100) {
      this.ball4.update();
      this.ball4.draw();
      this.ball1.update();
      this.ball1.draw();
    }
  }
}