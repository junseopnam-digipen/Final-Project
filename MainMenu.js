// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class MainMenu {
  constructor() {
    this.B_width = 130
    this.B_height = 60
    this.T_size = 35
    const center_x = width * 4 / 5;
    this.play = new Button(center_x, height * 2 / 5, "Play", this.B_width, this.B_height, this.T_size);
    this.options = new Button(center_x, height * 3 / 5, "Options", this.B_width, this.B_height, this.T_size);
    this.credits = new Button(center_x, height * 4 / 5, "Credits", this.B_width, this.B_height, this.T_size);
  }

  Update() {
    if (this.play.DidClickButton()) {
      CurrentScene = Story1Scene;
    } else if (this.options.DidClickButton()) {
      CurrentScene = OptionsScene;
    } else if (this.credits.DidClickButton()) {
      CurrentScene = CreditsScene;
    }
  }

  Draw() {
    DrawTitle("Googly Adventure");
    this.play.DrawButton();
    this.options.DrawButton();
    this.credits.DrawButton();
  }
}