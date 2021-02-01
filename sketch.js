const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite;
var paperball;
var leftside,rightside;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	paperball = new Paper (100,600,45);

	
    groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor= "brown";
	
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);


	leftside= Bodies.rectangle(930,465,10,200, {isStatic:true});
	leftside.image = loadImage("dustbingreen.png");
	World.add(world,leftside);

	rightside= Bodies.rectangle(1120,465,10,200, {isStatic:true});
	rightside.image = loadImage("dustbingreen.png");
	World.add(world,rightside);

	dustbin = new Dustbin (900,365,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperball.display();
  
  groundSprite.display();
  
  image (leftside.image,leftside.position.x,leftside.position.y,10,200);
  image (rightside.image,rightside.position.x,rightside.position.y,10,200);

  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperball.body, paperball.body.position, {x:115,y:-115});
}

}

