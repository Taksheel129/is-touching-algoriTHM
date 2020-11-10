var mrect
var frect


function setup() {
  createCanvas(800,400);
  
  mrect = createSprite(50,180,430,200)
  mrect.shapeColor="yellow"
  mrect.debug = true;

  frect = createSprite(400,200,321,60)
  frect.shapeColor="yellow"
  frect.debug = true;
}

function draw() {
  background(0);
   mrect.x = mouseX;
   mrect.y = mouseY;


   if(mrect.x - frect.x < mrect.width/2+  frect.width/2&&
    frect.x - mrect.x < mrect.width/2+  frect.width/2&&
    mrect.y - frect.y < mrect.height/2+  frect.height/2&&
    frect.y - mrect.y < mrect.height/2+  frect.height/2){
     mrect.shapeColor = "red"
     frect.shapeColor = "red"
   }
   else{ mrect.shapeColor="yellow"
   frect.shapeColor="yellow"
   }
  drawSprites();
}