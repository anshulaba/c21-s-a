var canvas;
var fixedRect,movingRect;

function setup()
{
 canvas=createCanvas(800,800);
 fixedRect=createSprite(200,200,50,50);
 fixedRect.shapeColor="blue";
 fixedRect.debug="true";

 movingRect=createSprite(300,200,50,50);
 movingRect.shapeColor="blue";
 movingRect.debug="true";

 gameObject1= createSprite(400,200,50,50);
 gameObject1.shapeColor="blue";
 gameObject2= createSprite(500,200,50,50);
 gameObject2.shapeColor="blue";
 gameObject3= createSprite(600,200,50,50);
 gameObject3.shapeColor="blue";
 gameObject4= createSprite(700,200,50,50);
 gameObject4.shapeColor="blue";

}


function draw()
{
background("gold");
movingRect.x= World.mouseX;
movingRect.y= World.mouseY;

if(isTouching(movingRect,gameObject3))
{
  gameObject3.shapeColor="red";
  movingRect.shapeColor="red";
}

else
{
  gameObject3.shapeColor="blue";
  movingRect.shapeColor="blue";
}

drawSprites();
}

