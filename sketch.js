var player, pImage , ground, bImage, bg;


function preload (){
  pImage = loadImage("player.png");
  bImage = loadImage("wall.jpg");
}







function setup(){
  createCanvas(1000, 800);


bg=createSprite(0,0,2000,800);
      bg.addImage(bImage);
      bg.scale =5;
     
      bg.velocityX=-6;
      bg.x=bg.width/2;

      player = createSprite(80,795,100,50);
player.scale=1.25;
player.addImage(pImage);

ground = createSprite(800,860,1600,5);
ground.visible = false;

}

function draw (){

  background(150);


  if (bg.x < 0){
    bg.x = bg.width/2;
    
    
  } 

  if(keyDown("UP_ARROW")) {
    player.velocityY = -10;
  }

  if(keyDown("DOWN_ARROW")) {
    player.velocityY = +10;
  }

  if(keyDown("RIGHT_ARROW")) {
    player.x =  player.x+10;
  }

  if(keyDown("LEFT_ARROW")) {
    player.x =  player.x - 10;
  }


  player.velocityY = player.velocityY + 0.8;

  player.collide(ground);
  

  drawSprites();

}