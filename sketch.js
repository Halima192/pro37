const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops=100;
var drop1;

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
 for(var i=0;i<maxDrops;i++){
     drop.push(new createdrop(random(0,400),random(0,400)) );
 }   
    var canvas = createCanvas(400,1200);
    drop1=new drop(200,200,20,20)
}

function draw(){
    
    drop1.display();
}   

