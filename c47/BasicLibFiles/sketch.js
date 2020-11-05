const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var ground,ball,holder;
var connector1,connector2,connector3;
function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world;
  ground=new Ground();
  holder=new Holder();
  ball1=new Ball(200,200,30);
  ball2=new Ball(400,200,30);
  ball3=new Ball(600,200,30);
  connector1 = new Connector({x:200,y:100},ball1.body);
  // connector2 = new Connector({x:400,y:100},ball2.body);
  // connector3 = new Connector({x:600,y:100},ball3.body);
}

function draw() {
  background(0);
  Engine.update(engine);
ground.display();
holder.display();
ball1.display();
ball2.display();
ball3.display();
connector1.display();
// connector2.display();
// connector3.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY})
}