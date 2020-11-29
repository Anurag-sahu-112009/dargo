//Create variables here
var dog, dogI, dogIH;
function preload()
{
  //load images here
  dogI = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,50,50)
  dog.addImage(dogI)
  dog.scale=0.25
}


function draw() {  
background("green")
  drawSprites();
  //add styles here

}



