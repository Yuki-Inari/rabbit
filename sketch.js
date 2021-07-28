var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImage
var leaf
var leafImage
var orangeleafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
  orangeleafImage = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
 rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  drawSprites();

   var num = Math.round(random(1,3));
   if (frameCount % 80 == 0) {
     if (num ==1) {
       createApple();
     }
     else if (num == 2) {
       createGreen ();
     }
     else if  (num == 3) { 
       createOrange();
     }
   }
}


   

   function createApple (){
    apple = createSprite (600,100,40,10)
    apple.velocityY = 3
    apple.addImage (appleImage)
    apple.scale = 0.07
    apple.x = Math.round (random(50,350)); 
    
   }

   function createGreen () {
    leaf = createSprite (600,100,40,10)
    leaf.velocityY = 3
    leaf.addImage (leafImage)
    leaf.scale = 0.07
    leaf.x = Math.round (random(50,350));
   }
   function createOrange () {
    leaf = createSprite (600,100,40,10)
    leaf.velocityY = 3
    leaf.addImage (orangeleafImage)
    leaf.scale = 0.07
    leaf.x = Math.round (random(50,350));
   }