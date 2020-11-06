
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

var bin;

block1;
block2;
block3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bin = loadImage("sprites/dustbingreen.png");
	paper = new Paper(200,200,30);
	ground = new Ground(400,700,800,10);
	block1 = new Bin(600,660,150,20);
	block2 = new Bin(665,600,20,110);
	block3 = new Bin(537,600,20,120);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  paper.display();
  image(bin,520,540,160,134);
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW);
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-180})
	}
}


