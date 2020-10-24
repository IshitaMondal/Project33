var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];   
var particle;
var plinkos = [];

var divisionHeight=300;
var score =0;
var count =0;

var gameState ="play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

       
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  

  //displaying the division score
  textSize(30);
  text("500",15, 600);
  text("500",95, 600);
  text("500",175, 600);
  text("500",255, 600);
  text("100",335, 600);
  text("100",415, 600);
  text("100",495, 600);
  text("200",575, 600);
  text("200",655, 600);
  text("200",735, 600);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
    
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   //SCORING SYSTEM

   if(particle != null){
     particle.display();

     if(particle.body.position.y>760){
       
      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(count>= 5){
          gameState = "end";
        }
      }
     }
   }

   if(particle != null){
    particle.display();

    if(particle.body.position.y>760){
      
     if(particle.body.position.x>301 && particle.body.position.x<600){
       score = score+100;
       particle = null;
       if(count>= 5){
         gameState = "end";
       }
     }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.y>760){
      
     if(particle.body.position.x>601 && particle.body.position.x<900){
       score = score+200;
       particle = null;
       if(count>= 5){
         gameState = "end";
       }
     }
    }
  }

  if(count >= 5){
    textSize(60);
    text("GameOver",250,245);
    gameState = "end";
  }

}

function mousePressed(){
  if(gameState !== "end"){
    count = count+1;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}