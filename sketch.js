//declaring variables for objects
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0;


function preload(){
  
  //loading animation for monkey
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //loading images for banana and obstacles
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating the canvas
  createCanvas(600, 400);
  
  //creating monkey sprite
  monkey = createSprite (100,320,20,50);
  monkey.addAnimation ("running",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground sprite 
  ground = createSprite(400,350,800,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  //creating food group
  FoodGroup = new Group();
  
  //creating obstacle group
  obstacleGroup = new Group();
 
  
  

  
}


function draw() {
  //declaring the background colour
  background("lightblue");
  
  //making the ground infinite
  if (ground.x < 400){
      ground.x = ground.width/2;
  }
  
  //making monkey collide with the ground
  monkey.collide(ground);
  
  //making the monkey jump when space key is pressed
  if(keyDown("space") && monkey.y >= 160) {
      monkey.velocityY = -12;
  }
  
  //giving gravity to the monkey when it is on the ground
  monkey.velocityY = monkey.velocityY + 0.8
  
  food();
  obstacles();
  
  //calculating and displaying the survival time
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);
  
  //drawing the sprites
  drawSprites();

  
}

//function for creating bananas
function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -4;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  
  
}
}

//function for creating obstacles
function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,320,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
  
  }
}




