var bg ,sleep,brush,bath ,gym, eat,move;
var astronaut;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  bath = loadAnimation("bath1.png","bath2.png")
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move1.png","move2.png");
  }

function setup() {
  createCanvas(600,500);
 
astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;

}
 
function draw() {
  background(bg); 
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  
   if (keyDown ("UP_ARROW")){
      astronaut.addAnimation("brushing", brush);
      astronaut.changeAnimation("brushing");
      astronaut.y = 350;
      astronaut.velocityY = 0;
      astronaut.velocityX = 0;
      }
      
    
     if (keyDown ("RIGHT_ARROW")){
        astronaut.addAnimation("bathing", bath);
        astronaut.changeAnimation("bathing");
        astronaut.x = 300;
        astronaut.velocityY = 0;
        astronaut.velocityX = 0;
        }
        
    
          if (keyDown ("LEFT_ARROW")){
          astronaut.addAnimation("eating", eat);
          astronaut.changeAnimation("eating");
          astronaut.y = 350;
          astronaut.x = 150;
          astronaut.velocityY = 0.5;
          astronaut.velocityX = 0.5;
          }
          
          
            if (keyDown ("DOWN_ARROW")){
            astronaut.addAnimation("gymming", gym);
            astronaut.changeAnimation("gymming");
            astronaut.y = 350;
            astronaut.velocityY = 0;
            astronaut.velocityX = 0;
            }


             if (keyDown ("m")){
              astronaut.addAnimation("moving", move);
              astronaut.changeAnimation("moving");
              astronaut.velocityY = 1;
              astronaut.velocityX = 1;
              }
            }