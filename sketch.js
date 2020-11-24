
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render = Matter.Render;

var engine, world;
var paper1;
var ground;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground (width/2, 670, width, 20);
	
	paper1=new paper(200,450,40);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	})

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground.display();
  

 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper1.body, paper1.body.position,{x:85,y:-85});
	}
}



