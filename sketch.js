function setup() {
  createCanvas(600, 400);
}
//variaveis da bola
let xbola = 300;
let ybola= 200;
let diametro= 20;

//velocidade da bola
let velocidadexbola= 6
let velocidadeybola=6


function draw(){
  
xbola = xbola+velocidadexbola;
ybola = ybola+velocidadeybola;
  
  
  
  background(0);
   // Draw a circle at location (30, 30) with a diameter of 20.
circle (xbola, ybola,diametro);

  
  if(xbola>width||xbola<0)velocidadexbola=velocidadexbola*-1}
 if(ybola>400||ybola<0){velocidadeybola=velocidadeybola*-1}





 


