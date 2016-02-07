var plane;
var enemy;
var system;
var d1;
var d2;
var angle;
var angle2;
var cloud1;  
var cloud2;
var cloud3;
var cloud4;
var cloud5;
var cloud6;
var cloud7;
var speed;
var x;
var y;
var images;
var random2;

function preload() {
	img = loadImage("assets/plane.png");
	img1 = loadImage("assets/cloud1.png");
	img2 = loadImage("assets/cloud2.png");
	img3 = loadImage("assets/cloud3.png");
	img4 = loadImage("assets/cloud4.png");
	img5 = loadImage("assets/cloud5.png");
	images = [img1, img2, img3, img4, img5];
  img6 = loadImage("assets/enemyPlane.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  x = width;
  y = height/ 2;
  plane = new Plane(); 

  enemy = createSprite(200, 200);
  enemy.addAnimation("normal", "assets/enemyPlane.png");
  enemy.addAnimation("explode", "assets/explode1.png", "assets/explode2.png", "assets/explode3.png", "assets/explode4.png", "assets/explode5.png", "assets/explode6.png");
  
  system = new ParticleSystem(createVector(width/3.75,y));
  cloud1 = new Cloud();
  cloud2 = new Cloud();
  cloud3 = new Cloud();
  cloud4 = new Cloud();
  cloud5 = new Cloud();
  cloud6 = new Cloud();
  cloud7 = new Cloud();
  angle = 0;
  angle2 = 0;
  random2 = getRandomImage(images);
  noCursor();
}

function draw() {
  background('#66ccff');
  cloud1.move();
  cloud1.display();
  cloud2.move();
  cloud2.display();
  cloud3.move();
  cloud3.display();
  cloud4.move();
  cloud4.display();
  cloud5.move();
  cloud5.display();
  cloud6.move();
  cloud6.display();
  cloud7.move();
  cloud7.display();
  plane.move();
  plane.display();
  system.addParticle();
  system.run();


  //collision detection for enemy planes
 if(enemy.overlap(bullet))
    enemy.changeAnimation("explode");
  else
    enemy.changeAnimation("normal");
  
  enemy.collide(box);
  
  drawSprites();

}
  // Plane class
function Plane() {
  this.x = width/ 5;
  this.y = height/ 2;
  this.diameter = width / 10;
  this.speed = 1;
  this.move = function() {
  d1 = mouseY + (sin(angle) * this.y/8);
  this.y = d1;
  angle += 0.02;
  };
  this.display = function() {
    image(img, this.x, this.y, this.diameter, this.diameter/2);
  };
}


  //Enemy Plane Class

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
 


  // Cloud class
function Cloud() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(width/5, width/2);
  this.speed = random(3, 10);
  this.random2 = getRandomImage(images);
  
  this.move = function() { 
    if(this.x < -1000) {
    this.x = width + random(width/5, width/2);
    this.y = random(height);
  }
  else {
    this.x = this.x - this.speed;
  }
   
    this.y = this.y;
  };
  
  this.display = function() {
	if(this.x < -1000) {
	this.random2 = getRandomImage(images);
    image(this.random2, this.x, this.y, this.diameter, this.diameter/2);
	}
	else {
	image(this.random2, this.x, this.y, this.diameter, this.diameter/2);
	}
  };
  
}
  
// Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.01);
  this.velocity = createVector(random(-5, -1), random(-1, 1));
  this.position = position.copy();
  this.lifespan = 100.0;
};
Particle.prototype.run = function() {
  this.update();
  this.display();
  
};
// Method to update position
Particle.prototype.update = function(){
 
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};
// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(0);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};
// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};
var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};
ParticleSystem.prototype.addParticle = function() {
  d2 = mouseY + height/30 + (sin(angle) * this.origin.y/8);
  this.origin.y = d2;
  angle2 += 0.02;
  this.particles.push(new Particle(this.origin));
};
ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

function getRandomImage(array) {
    var num = Math.floor(Math.random() * array.length);
    var img = array[num];
    return img;
}

