var ship, ship_sailing, edges;
var sea, seaImage;
function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(600,400);
  sea = createSprite(300,180,10,10);
  sea.addImage("sea", seaImage);
  sea.scale = 0.5;

  ship = createSprite(50,200,20,50);
  ship.addAnimation("sailing", ship_sailing);
  edges = createEdgeSprites();

  ship.scale = 0.2;
  ship.x = 50;

  

}

function draw() {
  background("blue");
 drawSprites();

 sea.velocityX = -5;

 if (sea.x < 0){
   sea.x = sea.width/4;
 }
}