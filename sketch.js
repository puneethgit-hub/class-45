var balloon, balloonImg;
var ground, groundImg;
var topGround, bottomGround;

function preload() {
  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
  groundImg = loadImage("assets/bg.png");


}


function setup() {
  createCanvas(750, 400);
  ground = createSprite(150, 250, 1, 1);
  ground.addImage(groundImg);

  topGround=createSprite(200,390,800,20);
  topGround.visible=false

  bottomGround=createSprite(200,10,800,20);
  bottomGround.visible=false

  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg)
  balloon.scale = 0.3

}

function draw() {
  background(0);
  if (keyDown("space")) {
    balloon.velocityY = -6;
  }
  balloon.velocityY = balloon.velocityY + 2

  drawSprites();
}