const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ball;
var garbagecan;

function setup(){
    var canvas = createCanvas(800,750);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(650,750,200,50);
    box2 = new Box(545,690,15,100);
    box3 = new Box(745,690,15,100)
    ground = new Ground(400,height,802,20)
    ball = new Paper(50,375,50,50)
    garbagecan = new Garbage(650,650,175,175)
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(ball.body.position.x);
    console.log(ball.body.position.y);
    console.log(ball.body.angle);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    ball.display();
    garbagecan.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball.body, ball.body.position, {x:100,y:-100})
    }
    
}