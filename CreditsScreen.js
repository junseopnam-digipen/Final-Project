// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class CreditsScreen {
  constructor() {
    this.mainmenu = new Button(width / 2, height - 50, "Main Menu", 100, 35, 15);
    this.x1 = width / 5
    this.y1 = 150;
    this.x2 = width / 4 * 3;
    this.move_y = 200;
    this.plus = 30;
    this.page = 1;
  }

  Update() {
    background(BG_wall);
    if (this.mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = MainMenuScene;
    }
  }

  Draw() {
    DrawTitle("Credits");
    push()
    textAlign(CENTER)
    textSize(25)
    text("Made by Junseop Nam", this.x1, this.y1);
    text("Rudy Castan", this.x1, this.y1 + 50);
    text("Haneul Lee", this.x1, this.y1 + 100);
    text("All colleagues!!", this.x1, this.y1 + 150);
    text("Labor song", this.x1, this.y1 + 200);
    
    text("Licenses(Press left,right arrow!)", this.x2, this.y1);

    if (keyIsPressed && keyCode == 39) {
      this.page = 2;
    }
    if (keyIsPressed && keyCode == 37) {
      this.page = 1;
    }

    switch (this.page) {
      case 1:
        textSize(20)
        text('BackGround.png - Junseop Nam', this.x2, this.move_y - this.plus)
        text('Page2Gound.png - Junseop Nam', this.x2, this.move_y)
        text('Health_frame.png - Junseop Nam', this.x2, this.move_y + this.plus)
        text('MainBG.png - Junseop Nam', this.x2, this.move_y + this.plus * 2)
        text('water_tap1.png - Junseop Nam', this.x2, this.move_y + this.plus * 3)
        text('water_tap2.png - Junseop Nam', this.x2, this.move_y + this.plus * 4)
        text('fireball.png - Junseop Nam', this.x2, this.move_y + this.plus * 5)
        text('darkball.png - Junseop Nam', this.x2, this.move_y + this.plus * 6)
        text('bossshield.png - Junseop Nam', this.x2, this.move_y + this.plus * 7)
        text('rock.png - Junseop Nam', this.x2, this.move_y + this.plus * 8)
        text('Right1.png - Junseop Nam', this.x2, this.move_y + this.plus * 9)
        text('Right2.png - Junseop Nam', this.x2, this.move_y + this.plus * 10)
        text('Left1.png - Junseop Nam', this.x2, this.move_y + this.plus * 11)
        text('Left2.png - Junseop Nam', this.x2, this.move_y + this.plus * 12)
        break;
      case 2:
        textSize(20)
        text('Boss.png - Junseop Nam', this.x2, this.move_y - this.plus)
        text('stonewall.png - Junseop Nam', this.x2, this.move_y)
        text('failscene.png - Junseop Nam', this.x2, this.move_y + this.plus)
        text('story1.png - Junseop Nam', this.x2, this.move_y + this.plus * 2)
        text('story2.png - Junseop Nam', this.x2, this.move_y + this.plus * 3)
        text('ending.png - Junseop Nam', this.x2, this.move_y + this.plus * 4)
        text('gunsound.wav - Junseop Nam(sfxr)', this.x2, this.move_y + this.plus * 5)
        text('hitsound.wav - Junseop Nam(sfxr)', this.x2, this.move_y + this.plus * 6)
        text('Bossy_Boss_mp3.mp3 -\n Author	FinalGateStudios', this.x2, this.move_y + this.plus * 7)
        text('waterball.png - Junseop Nam', this.x2, this.move_y + this.plus * 9)
        text('how_to_play.png - Junseop Nam', this.x2, this.move_y + this.plus * 10)
        break;
    }
    pop()
    this.mainmenu.DrawButton();

  }
}