const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var polygon1;
var slingShot;
var polygon1Img;
function preload(){
  polygon1Img = loadImage("polygon.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  stand = new ground(390, 270, 150, 20);
  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 155, 30, 40);

  polygon1 = Bodies.circle(100, 200, 20);
  polygon1.addImage(polygon1Img);
  World.add(world, polygon1);

  slingShot = new SlingShot(this.polygon1, {x :100, y :200});

  //imageMode(CENTER);
  //image(polygon1Img, polygon1.position.x, polygon1.position.y, 40, 40);

}


function draw() {
  background(0,255,255);  
  Engine.update(engine);
  
  //polygon1.display();
  stand.display();

  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

 

  slingShot.display();

  mouseDragged();

  mouseReleased();

  keyPressed();

  drawSprites();
}
function mouseDragged(){
  
  Matter.Body.setPosition(this.polygon1.body, {x : mouseX , y : mouseY});

}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
if(keyCode === 32) {
  slingShot.attach(polygon1.body)

}

}