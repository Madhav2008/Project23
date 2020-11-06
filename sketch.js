const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground1, ground2, ground3, ball, helicopter;

function setup() {
    createCanvas(1535, 710);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(width / 2, 700, width, 20, ground_options);
    World.add(world, ground);

    var ball_options = {
        restitution: 1.0
    }

    ball = Bodies.circle(width / 2, 100, 20, ball_options);
    World.add(world, ball);
    console.log(ground);

}

function draw() {
    background("yellow");
    Engine.update(engine);

    helicopter = createSprite(width / 2, 200, 500, 20);
    helicopter.shapeColor = "green";

    ground1 = createSprite(width / 2, 680, 200, 20);
    ground1.shapeColor = "red";

    ground2 = createSprite(ground1.x - 100, 640, 20, 100);
    ground2.shapeColor = "red";

    ground3 = createSprite(ground1.x + 100, 640, 20, 100);
    ground3.shapeColor = "red";

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER);
    rect(ground1.position.x, ground1.position.y, width, 20);

    drawSprites();

}