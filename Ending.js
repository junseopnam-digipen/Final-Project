// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class EndingScreen {
  constructor() {
    this.button = new Button(width / 2, height - 30, 'MainMenu', 100, 35, 15)
  }
  Update() {
    // if (this.button.DidClickButton()) {
    //   CurrentScene = MainMenuScene;
    // }
  }
  Draw() {
    image(ending, 0, 0, width, height)
    DrawTitle('Ending')
    // this.button.DrawButton();
  }
}