function setup() {
  createCanvas(1000,1000);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="purple";
  movingRect=createSprite(600, 200, 50, 150);
  movingRect.shapeColor="purple";

}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="purple";
    movingRect.shapeColor="purple";
  }

}