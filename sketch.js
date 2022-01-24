var bg,bg2,form,system,code,security;
var database;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2= loadImage("aladdin_cave2.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  database = firebase.database();
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Pontuação: " + score, 450, 35);  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TESOURO DESBLOQUEADO",250, 200);
  }

  drawSprites()
}
