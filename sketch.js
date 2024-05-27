let Bolinha=100;
let yBolinha=200;
let diametro=22;
let rio=22;
let locidadeXBolinha=6;
let velocidadeYBolinha=6;
let xRaquete=5;
let yRaquete=150;
let raqueteComprimento=10;
let raqueteAltura=90;
let colidiu=false;
}
functon setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
}
mostraBolinha();
movimentaBolinha();
verificaColisaoBorda();
mostraRaquete();
movimentaMinhaRaquete();
colisaoMinhaRaqueteBiblioteca();
}
functio mostraBolinha(){
circle(xBolinha,yBolinha,diametro);
  }
function movimentaBolinha(){
xBolinha+=velocidadeXBolinha;
ybolinha+=velocidadeYBolinha;
}
funtion verificaColisaoBorda();
if(xBolinha+raio≥width||xBolinha-raio≤0){
velocidadeYBolinha*=-1;
}
if(yBolinha+raio≥height||yBolinha-raio≤0){
velocidadeYBolinha*=-1;
 }
}
function mostraRaquete(){
 rect(xRaquete,yRaquete,raqueteComprimento,
raqueteAltura);
}

function movimentaMinhaRaquete(){
 if(keylsDown(UP_ARROW)){
yRaquete-=10;
}
if(keylsDown(DOWN_ARROW)){
  yRaquete+=10;
 }
}

function verificaColisaoRaquete(){
  if(xBolinha-raio≤xRaquete+
raqueteComprimento&&yBolinha+raio≥yRaquete
+raqueteAltura&&yBolinha+raio≥yRaquete){
velocidadeXBolinha*=-1;
 }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu=collideRectCircle(xRaquete,yRaquete,
raqueteComprimento,raqueteAltura,xBolinha,
yBolinha,raio);
if(colidiu){
velocidadeXBolinha*=-1;
 }
}
  