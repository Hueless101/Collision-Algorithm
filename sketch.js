var fr,mr;

function setup() {
  createCanvas(800,400);
fr = createSprite(400,400,30,80);
mr = createSprite(500,600,80,30);
fr.shapeColor = "blue";
mr.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX;
  mr.y = mouseY;
  if(mr.x - fr.x< fr.width/2 + mr.width/2 && 
    fr.x - mr.x<fr.width/2 + mr.width/2 &&
    mr.y-fr.y < fr.height/2 + mr.height/2 &&
    fr.y - mr.y < fr.height/2 + mr.height/2){
    fr.shapeColor = "red";
    mr.shapeColor = "red";
    
  } else{
    fr.shapeColor = "blue";
    mr.shapeColor = "blue";
  }
  drawSprites();
}