
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,350,1200,10);
  dustbin = new Dustbin(850,300,10,100);
  dustbin1 = new Dustbin(1050,300,10,100);
  dustbin2 = new Dustbin(945,345,200,10);


	Engine.run(engine);
  paper=new Paper(80,200,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
  }

}



