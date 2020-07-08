// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class OptionsScreen {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(center_x, height - 50, "Main Menu", 100, 35, 15);
    this.x = width / 2
    this.y = height / 2
    this.width = 100;
    this.height = 30;
    this.plus = 50;
    this.color = 'yellow'
    this.keycheck = false;
    this.count = 1;
  }

  Update() {
    background(BG_wall);
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MainMenuScene;
    }
  }

  Draw() {
    DrawTitle("Options");
    this.mainmenu.DrawButton();

    push()
    noStroke();
    textSize(30);
    text('Change charactor color \n (2color)', this.x - this.plus * 4, this.y - this.plus * 3);
    text('Music sound:', this.x - this.plus * 5, this.y - this.plus);
    text('BGM', this.x - this.plus * 2, this.y - this.plus);
    text('laser sound volume', this.x - this.plus * 3, this.y + this.plus);
    rectMode(CENTER);
    imageMode(CENTER);
    push()
    rect(this.x + this.plus * 3, this.y - this.plus * 3, 120, this.plus);
    rect(this.x + this.plus * 3, this.y - this.plus, 120, this.plus);
    rect(this.x + this.plus * 3, this.y + this.plus, 120, this.plus);
    pop()

    //left 1
    if (mouseX > this.x + 25 && mouseX < this.x + 75 && mouseY > this.y - this.plus * 3 - 15 && mouseY < this.y - this.plus * 3 + 15) {
      this.color = 'red'
      push()
      fill(this.color);
      rect(this.x + this.plus, this.y - this.plus * 3, this.width - this.plus, this.height)
      image(Left1, this.x + this.plus, this.y - this.plus * 3, this.width, this.height)
      pop()
      if (mouseIsPressed) {
        image(Left2, this.x + this.plus, this.y - this.plus * 3, this.width, this.height)
        character_color = 'skyblue'
      }
    } else {
      push()
      this.color = 'yellow'
      fill(this.color);
      rect(this.x + this.plus, this.y - this.plus * 3, this.width - this.plus, this.height)
      image(Left1, this.x + this.plus, this.y - this.plus * 3, this.width, this.height)
      pop()
    }

    text(character_color, this.x + this.plus * 3, this.y - 140)
    push()
    fill(character_color)
    circle(this.x + this.plus * 6 + 20, this.y - 150, 50, 50)
    pop()


    //right 1
    if (mouseX > this.x + 225 && mouseX < this.x + 275 && mouseY > this.y - this.plus * 3 - 15 && mouseY < this.y - this.plus * 3 + 15) {
      this.color = 'red'
      push()
      fill(this.color);
      rect(this.x + this.plus * 5, this.y - this.plus * 3, this.width - 50, this.height)
      image(Right1, this.x + this.plus * 5, this.y - this.plus * 3, this.width, this.height)
      pop()
      if (mouseIsPressed) {
        image(Right2, this.x + this.plus * 5, this.y - this.plus * 3, this.width, this.height)
        character_color = 'gold'
      }
    } else {
      push()
      this.color = 'yellow'
      fill(this.color);
      rect(this.x + this.plus * 5, this.y - this.plus * 3, this.width - 50, this.height)
      image(Right1, this.x + this.plus * 5, this.y - this.plus * 3, this.width, this.height)
      pop()
    }


    //left 2
    if (mouseX > this.x + 25 && mouseX < this.x + 75 && mouseY > this.y - 65 && mouseY < this.y - 35) {
      this.color = 'red'
      push()
      fill(this.color);
      rect(this.x + this.plus, this.y - this.plus, this.width - this.plus, this.height)
      image(Left1, this.x + this.plus, this.y - this.plus, this.width, this.height)
      pop()
      if (mouseIsPressed) {
        image(Left2, this.x + this.plus, this.y - this.plus, this.width, this.height)
        BGM_sound -= 0.5
        if (BGM_sound < 0) {
          BGM_sound = 0;
        }
      }
    } else {
      push()
      this.color = 'yellow'
      fill(this.color);
      rect(this.x + this.plus, this.y - this.plus, this.width - this.plus, this.height)
      image(Left1, this.x + this.plus, this.y - this.plus, this.width, this.height)
      pop()
    }

    //sound control
    text(round(BGM_sound), this.x + this.plus * 3, this.y - 40)

    //right 2   
    if (mouseX > this.x + 225 && mouseX < this.x + 275 && mouseY > this.y - 65 && mouseY < this.y - 35) {
      this.color = 'red'
      push()
      fill(this.color);
      rect(this.x + this.plus * 5, this.y - this.plus, this.width - this.plus, this.height)
      image(Right1, this.x + this.plus * 5, this.y - this.plus, this.width, this.height)
      pop()
      if (mouseIsPressed) {
        image(Right2, this.x + this.plus * 5, this.y - this.plus, this.width, this.height)
        BGM_sound += 0.5
      }
    } else {
      push()
      this.color = 'yellow'
      fill(this.color);
      rect(this.x + this.plus * 5, this.y - this.plus, this.width - this.plus, this.height)
      image(Right1, this.x + this.plus * 5, this.y - this.plus, this.width, this.height)
      pop()
    }


    //left 3
    if (mouseX > this.x + 25 && mouseX < this.x + 75 && mouseY > this.y + 35 && mouseY < this.y + 65) {
      this.color = 'red'
      push()
      fill(this.color);
      rect(this.x + this.plus, this.y + this.plus, this.width - this.plus, this.height)
      image(Left1, this.x + this.plus, this.y + this.plus, this.width, this.height)
      pop()
      if (mouseIsPressed) {
        image(Left2, this.x + this.plus, this.y + this.plus, this.width, this.height)
        laser_sound_volume -= 0.05
        if (laser_sound_volume < 0) {
          laser_sound_volume = 0;
        }
        laser_sound.play();
      }
    } else {
      push()
      this.color = 'yellow'
      fill(this.color);
      rect(this.x + this.plus, this.y + this.plus, this.width - this.plus, this.height)
      image(Left1, this.x + this.plus, this.y + this.plus, this.width, this.height)
      pop()
    }

    text(round(laser_sound_volume, 2), this.x + this.plus * 3, this.y + 60)

    //right 3   
    if (mouseX > this.x + 225 && mouseX < this.x + 275 && mouseY > this.y + 35 && mouseY < this.y + 65) {
      this.color = 'red'
      push()
      fill(this.color);
      rect(this.x + this.plus * 5, this.y + this.plus, this.width - this.plus, this.height)
      image(Right1, this.x + this.plus * 5, this.y + this.plus, this.width, this.height)
      pop()
      if (mouseIsPressed) {
        image(Right2, this.x + this.plus * 5, this.y + this.plus, this.width, this.height)
        laser_sound_volume += 0.05
        laser_sound.play();
        if (laser_sound_volume > 300) {
          laser_sound_volume = 300
        }
      }
    } else {
      push()
      this.color = 'yellow'
      fill(this.color);
      rect(this.x + this.plus * 5, this.y + this.plus, this.width - this.plus, this.height)
      image(Right1, this.x + this.plus * 5, this.y + this.plus, this.width, this.height)
      pop()
    }

    pop()

  }
}