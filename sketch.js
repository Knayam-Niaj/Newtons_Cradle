
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(700, 100, 800, 20);

	bob1 = new Bob(700, 700, 50);
	bob2 = new Bob(800, 700, 50);
	bob3 = new Bob(900, 700, 50);
	bob4 = new Bob(600, 700, 50);
	bob5 = new Bob(500, 700, 50);

	rope1 = new Rope(bob1.body, roof.body, -5, 0);
	rope2 = new Rope(bob2.body, roof.body, 90, 0);
	rope3 = new Rope(bob3.body, roof.body, 190, 0);
	rope4 = new Rope(bob4.body, roof.body, -100, 0);
	rope5 = new Rope(bob5.body, roof.body, -200, 0);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	if(keyDown("left_arrow")){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-100, y:0})
	}

  drawSprites();
 
}



