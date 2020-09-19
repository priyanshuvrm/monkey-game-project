var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png"); 
}

function setup() {
createCanvas(600,365)  
player = createSprite(100,315,10,10);  
player.addAnimation("running",monkey_running);
player.scale = 0.1;  

ground = createSprite(400,350,1200,10); 
ground.velocityX = -4;  
ground.x = ground.width /2;  

}

function draw() {
background("lightgreen");
 if (ground.x < 0){
      ground.x = ground.width/2;
 }
 if(keyDown("space")&& player.y >= 310) {
        player.velocityY = -15; 
 }
  var survivalTime = 0;
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+survivalTime, 100,50);  

  player.velocityY = player.velocityY + 0.8
  player.collide(ground);
  obstacleGroup();
  FoodGroup();
drawSprites();
  
}
function obstacleGroup() {
if (frameCount % 150 === 0){
   var obstacle = createSprite(600,310,10,40);
   obstacle.addImage(obstacleImage); 
   obstacle.scale = 0.2;  
   obstacle.velocityX = -8;
   obstacle.lifetime = 75;
}
}
function FoodGroup() {
if (frameCount % 150 === 0){
   var banana = createSprite(600,200,10,40);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.y = Math.round(random(150,230));
   banana.addImage(bananaImage);
   banana.velocityX = -8;
   banana.lifetime = 75;
}
}