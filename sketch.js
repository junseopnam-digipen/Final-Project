// Junseop nam
// Final Project
// CS099
// Spring 2020.7.8

let BG = 'skyblue'
let CurrentScene;
const frame = 150;
let count = 0;

let laser_sound_volume = 10;
let hit_sound_volume = 1;
let BGM_sound = 10;

let character_color = 'skyblue'

function preload() {
  Page1_BG = loadImage('image folder/BackGround.png');
  Page2_ground = loadImage('image folder/Page2Gound.png');
  Health_ba = loadImage('image folder/Health_frame.png');
  Main_BG = loadImage('image folder/MainBG.png');
  water_tap1 = loadImage('image folder/water_tap1.png');
  water_tap2 = loadImage('image folder/water_tap2.png');
  fireball = loadImage('image folder/fireball.png');
  darkball = loadImage('image folder/darkball.png');
  waterball = loadImage('image folder/waterball.png');
  bossshield = loadImage('image folder/bossshield.png');
  rock = loadImage('image folder/rock.png');
  Right1 = loadImage('image folder/Right1.png');
  Right2 = loadImage('image folder/Right2.png');
  Left1 = loadImage('image folder/Left1.png');
  Left2 = loadImage('image folder/Left2.png');

  Boss = loadImage('image folder/Boss.png')
  BG_wall = loadImage('image folder/stonewall.png')
  Fail_BG = loadImage('image folder/failscene.png')
  story1 = loadImage('image folder/story1.png')
  story2 = loadImage('image folder/story2.png')
  ending = loadImage('image folder/ending.png')
  how_to_play = loadImage('image folder/how_to_play.png')



  laser_sound = loadSound('sound folder/gunsound.wav');
  hit_sound = loadSound('sound folder/hitsound.wav')
  BGM = loadSound('sound folder/Bossy_Boss_mp3.mp3')

}


function setup() {
  createCanvas(800, 600);
  Character = new character(width / 2, height * 3 / 4)

  MainMenuScene = new MainMenu();
  CreditsScene = new CreditsScreen();
  OptionsScene = new OptionsScreen();
  Page1Scene = new Page1Screen();
  Story1Scene = new Story1Screen();
  Story2Scene = new Story2Screen();
  Page2Scene = new Page2Screen();
  EndingScene = new EndingScreen();
  DefeatScene = new DefeatScreen();

  CurrentScene = MainMenuScene;

  obstacle = new Obstacle1();

  hit_sound.setVolume(hit_sound_volume);
  BGM.loop();
}

function draw() {
  BGM.setVolume(map(BGM_sound, 0, 300, 0, 1));
  laser_sound.setVolume(map(laser_sound_volume, 0, 300, 0, 1));

  background(BG);
  push()
  image(Main_BG, 0, 0, width, height);
  image(how_to_play, 0, height- 200, 250,250)
  textSize(20);
  textAlign(CENTER);
  text('How to play', 100, height-185)
  pop()

  textAlign(CENTER);

  CurrentScene.Update();

  if (CurrentScene == Page1Scene || CurrentScene == Page2Scene) {
    CurrentScene.playing();
    CurrentScene.obstacle();
  }

  CurrentScene.Draw();

}
