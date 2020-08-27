const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var platform1;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(400,360,30,30);
  platform1 = new Ground(600,560,1200,20);
  slingshot = new SlingShot(box1.body,{x:200, y:50});
}

function draw() {
  background(255,255,255);  
platform1.display();
box1.display();
slingshot.display();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}