// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class DefeatScreen {
  constructor() {
    this.button = new Button(width / 2, height - 30, 'MainMenu', 100, 35, 15)
  }
  Update() {
    background(Fail_BG);
    // if (this.button.DidClickButton()) {
    //   CurrentScene = MainMenuScene;
    // }
  }
  Draw() {
    push()
    DrawTitle('Defeat...', 'gray')
    pop()
    // this.button.DrawButton();
  }

}