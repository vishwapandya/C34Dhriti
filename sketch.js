
const Bodies =Matter.Bodies;
const World =Matter.World;
const Engine =Matter.Engine;
const Constraint = Matter.Constraint
var engine,world;




function setup() {
  createCanvas(3000,800);
 // createSprite(400, 200, 50, 50);


engine=Engine.create();
//my world is my engine's world
world=engine.world;
Engine.run(engine);
ball1=new Ball(300,200,60,60);
//String1=new Rope(ball1.body,{x:50,y:50});
 rope1 = new Rope(ball1.body,{x:100,y:50});
ground=new Ground(1500,580,width,20);


}

function draw() {
  background(255,255,255);  



ball1.display();
//String1.display();
rope1.display();
  ground.display();
}
