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
  
  //database = firebase.database();
  
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

  display(){
    this.button1.mousePressed(()=>{
     if(system.authenticate(accessCode1,this.access1.value())){
       this.button1.hide();
       this.access1.hide();
       score++;
     }
    });

    //this.button2.mousePressed(()=>{
      //if(system.authenticate(accessCode2,this.access2.value())){
        //this.button2.hide();
        //this.access2.hide();
        //score++;
      //}
     //});

     //this.button3.mousePressed(()=>{
      //if(system.authenticate(accessCode3,this.access3.value())){
        //this.button3.hide();
        //this.access3.hide();
        //score++;
      //}
     //});

  }
}

function clues(){
 //CÓDIGO
  fill("white");
  textSize(15);

  //Code 1
   text("R E V B A I L A", 100,50);

  //Code 2
   text("C U T N I F O N", 700,150);

  //Code 3
   text("A T E D A S B A", 100,250);

 //DICA
  fill("lightblue");

  //Code 1
   text("Dica: Sempre mudando, não constante", 100,70);

  //Code 2
   text("Dica: Executa uma tarefa determinada",700,170);

  //Code 3
   text("Dica: Armazena todas as informações",100,270);
}