var bullet, enemy;

function preload() {
  img7 = loadImage("assets/enemyPlane.png");

function setup() {
  createCanvas(800,400);  
  
  enemy = new enemy()
  enemy.addImage(loadImage("assets/enemyPlane.png"));
  
  bullet = createSprite(20, 20);
  bullet.addAnimation("normal", "assets/bullet1.png", "assets/bullet2.png");
  
  bullet.addAnimation("explode", "assets/bullet3.png", "assets/bullet4.png");
  
}


function draw() {
  background(255,255,255);  
  
  bullet.position.x = mouseX;
  bullet.position.y = mouseY;
  
  
  if(bullet.overlap(enemy))
    bullet.changeAnimation("explode");
  else
    bullet.changeAnimation("normal");
  
  
  bullet.collide(box);
  
  
  drawSprites();
}




// Enemy Plane Class
function enemy() {
 this.x = random(width);
 this.y = random(height);
 this.speed = (12);
 this.random2 = getRandomImage(images);
 
 this.move = function() { 
   if(this.x < -500) {
   this.x = width + random(width/10, width/4);
   this.y = random(height);
 }
 else {
   this.x = this.x - this.speed;
 }
  
   this.y = this.y;
 };
 
 this.display = function() {
    if(this.x < -500) {

    image(img, this.x, this.y, this.diameter, this.diameter/2);

    this.image = ("assets/enemyPlane.png");
   image("assets/enemyPlane.png", this.x, this.y, this.diameter, this.diameter/2);
    }
    else {
    image("assets/enemyPlane.png", this.x, this.y, this.diameter, this.diameter/2);
    }
 };
 
}