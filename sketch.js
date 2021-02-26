var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    Redsurface = createSprite(100,590,200,20)
    Redsurface.shapeColor = "red"
    bluesurface = createSprite(300,590,200,20)
    bluesurface.shapeColor = "blue"
    greensurface = createSprite(500,590,200,20)
    greensurface.shapeColor = "green"
    pinksurface = createSprite(700,590,200,20)
    pinksurface.shapeColor = "pink"

    //create box sprite and give velocity
    box = createSprite(700,30,20,20)
    box.shapeColor="white"
    box.velocityY= 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  createEdgeSprites();
box.bounceOff(Redsurface)
box.bounceOff(bluesurface)
box.bounceOff(greensurface)
box.bounceOff(pinksurface)

    //add condition to check if box touching surface and make it box
if (Redsurface.isTouching(box)&& box.bounceOff(Redsurface)){
    box.shapeColor="red"
}
if (bluesurface.isTouching(box)&& box.bounceOff(bluesurface)){
    box.shapeColor="blue"
}
if (greensurface.isTouching(box)&& box.bounceOff(greensurface)){
    box.shapeColor="green"
}
if (pinksurface.isTouching(box)&& box.bounceOff(pinksurface)){
    box.shapeColor="pink"
}
    drawSprites()
}
