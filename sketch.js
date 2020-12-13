
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,body,ground,bodies,paperBall,dustbin;
/*function preload()
{
	
}*/

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground=new Ground(600,390,100,20);


   paperBall=new Paper(50,290,55);

   Engine.run(engine);
  
}


function draw() {
	background(255);
	Engine.update(engine);
	//paperBall.x=paperBall.x
	//paperBall.y=paperBall.y
 // rectMode(CENTER);
 ground.display();
  paperBall.display();
    
  drawSprites();
 
}



