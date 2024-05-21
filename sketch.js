function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
  }
  function draw() {
    circle(200,200,50);
  }
  function draw() {
    fill("red");
    circle(200,200,50);
  }
  let cor;
  
  function setup() {
    createCanvas(400, 400);
    background("white");
  }
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = "blue";
  }
  function draw() {
    fill(cor);
    circle(200,200,50);
  }
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = color(0, 255, 0);
  }
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), 0, 0);
  }
  function setup() {
    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
  let posicaohorizontal; // x
  let posicaovertical; // y
  
  function setup() {
    createCanvas(400, 400);
     background(color(100,0,0));
    cor = color(random(0,255), random(0,255), random(0,255));
    posicaohorizontal = 200;
    posicaovertical = 200;
  }
  
  
  function draw() {
    
    fill(cor);
    circle(posicaohorizontal,posicaovertical,50);
   
    
    
    if (mouseX < posicaohorizontal){
      posicaohorizontal =  posicaohorizontal - 1;
    }
    
    if (mouseX > posicaohorizontal){
      posicaohorizontal =  posicaohorizontal + 1;
    }
    
    if (mouseY < posicaovertical){
      posicaovertical--;
    }
      
    if (mouseY > posicaovertical){
      posicaovertical++;
    }
    
    if (mouseIsPressed){
      cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
    }
      
  }
  