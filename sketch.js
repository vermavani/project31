var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){

plinkoImage=loadImage("plinko.jpg")

}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
 
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  


  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,300));
  }
  
  //create 4th row of plinko objects
  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,400));
  }
  

  //create particle objects
  for (var o = 20; o <=width; o=o+400) 
  {
    particles.push(new Particles(o,40));
  }
  
    
}
 


function draw() {
  background(plinkoImage);
 
  
 
  Engine.update(engine);
  textSize(30)
  text("PLAY PLINKO!!",20,40)
  fill("white")

  ground.display();
 
  fill("white")
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  fill("yellow")
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  //display the paricles 
  for (var o = 0; o < particles.length; o++){
    particles[o].display();
  }
  if(frameCount % 90===0){
    particles.push(new Particles(random(100,900),10,10))
    
    }
   
 
}
