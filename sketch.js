var issImg, backgImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var iss, spacecraft;
var hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  backgImg = loadImage("spacebg.jpg");
  spacecraft1Img = loadImage("spacecraft1.png");
  spacecraft2Img = loadImage("spacecraft2.png");
  spacecraft3Img = loadImage("spacecraft3.png");
  spacecraft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("ISS", issImg);
  iss.scale = 0.6;

  spacecraft = createSprite(400, 300, 50, 50);
  spacecraft.addImage("Spacecraft", spacecraft1Img);
  spacecraft.scale = 0.2;  
}

function draw() {
  background(backgImg);

  spacecraft.addImage(spacecraft1Img);
  if(!hasDocked){
    spacecraft.x = random(370,380);
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img); 
      spacecraft.x = spacecraft.x - 1;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4Img)
      spacecraft.x = spacecraft.x+1;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img)
      spacecraft.y = spacecraft.y+1;
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-1;
    }
  }
  drawSprites();
}
