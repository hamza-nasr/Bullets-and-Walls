
var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(400,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
  thickness=random(22,83);
}

function draw() {
  background("black");  

  if(wall.x = bullet.x<(wall.width + bullet.width)/2){
    bullet.velocityX = 0;
    deformation =0.5*weight*speed*speed/22500;
    if(deformation<180){
      bullet.shapeColor = (255,0,0);
    } 
    if(deformation<180 && deformation>100 ){
      bullet.shapeColor = (230,230,0);
    }   
    if(deformation<100){
      bullet.shapeColor = (0,255,0);
    }
  }
  drawSprites();
}

//why is the wall on the right