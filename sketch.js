// universe - earth - humans
// engine - world - bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var obj;

function setup() {
 createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  } 

obj = Bodies.rectangle(200,380,200,50,options);
World.add(world,obj);

console.log(obj);


}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,200,50);
  
}