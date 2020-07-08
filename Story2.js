// Junseop nam
// Project Checkpoint: Prototype
// CS099
// Spring 2020.6.30

class Story2Screen {
  constructor() {
    this.rect_x = width / 2

  }

  Update() {
    image(story2,0, 0, width, height)
    
    if (keyIsPressed && keyIsDown(82) ) {
      CurrentScene = Page2Scene;
    }
  }

  Draw() {
    push()
    textSize(30)
    text('Story', 130, 30)
    rectMode(CENTER)
    fill('gray')
    rect(width/2, height - 20, 130, 30)
    pop()
    DrawExplain()
  }
  
}