const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var wreckB, Chain, gnd;

var qwerty, off;

function setup(){

  off = Engine.create();

  qwerty = off.World;

  createCanvas(800, 600);

  gnd = new ground(400 ,300 , 800, 25);

}

function draw() {
  background(255);  

  Engine.update(off);
  
  gnd.display();
  
  drawSprites();

}