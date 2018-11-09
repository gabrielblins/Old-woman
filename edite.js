var anda,vira,soca,pulae,pulad;//parametro para definir image()
var andando = [];//variavel do tipo array para armazenar as imagens virado para direita
var virando = [];//variavel do tipo array para armazenar as imagens virado para esquerda
var pulandod = [];
var pulandoe = [];
var contframe = 2;//variavel que ira indicar o frame da animação
var contpulo = 1;
var cont = 0;
var teclad = false; //indica que a animação do personagem será para a direita
var teclaa = false;//indica que a animação do personagem será para a esquerda
var pulo = false;
var d = 30; // variavel que vai indicar a posição do personagem eixo x
var h = 460; //variavel que vai indicar a posição do personagem eixo y
var hp = 0;
var fogo,socando,fogox,socandox;// variaveis para guardar as imagens do disparo
var disparo = false;//indica se o disparo está ativo
var soco = false;//indica se a animação de atirar está ativa ou nao
var xd = d + 30;//indica a posição do disparo
var paradoa = false;//indica que o personagem estará virado para o lado esquerdo quando parado
var paradod = false;//indica que o personagem estará virado para o lado direito quando parado
var delta = 0;
var contsoco = 2;
var cadeira;
var xcad = 300;
var larcad = 60;
var altcad = 1.65*larcad;
var quentinha;
var xquent = 207;
var yquent = 222.5;
var larquent = 40;
var altquent = 0.75*larquent;
var idosa;
var larid = 200;
var altid = 1.38*larid;

function preload(){
  for(i = 1; i <=10 ; i++){
    andando[i] = loadImage("Andando/Untitled-"+i+".png");
    virando[i] = loadImage("Virando/virado"+i+".png");
    pulandod[i] = loadImage("Pulando/Pulando"+i+".png");
    pulandoe[i] = loadImage("Pulando/Pulandov"+i+".png");
  } // esse 'for' serve para preencher os arrays com as respectivas imagens

  //variaveis armazenando imagens da animação relacionada ao disparo
  fogo = loadImage("Variados/fogo.png");
 // socando = loadImage("socando.png");
  fogox = loadImage("Variados/fogox.png");
 // socandox = loadImage("socandox.png");
  cadeira = loadImage("Variados/cadeira.png");
  quentinha = loadImage("Variados/quentinha.png");
  idosa = loadImage("Variados/idosa.png");

} 

function setup() {
createCanvas(600,600);
frameRate(20);

}

function draw() {
background(0,173,239);//céu
fill(40,240,40);//cor Plataforma
rect(0,540,600,60);//Plataforma
image(quentinha,xquent,yquent,larquent,altquent);
image(idosa,100,-20,larid,altid);

//Movimentação personagem

if(keyIsDown(65)){
  d -= 5; //incremento na posição do personagem
  teclaa = true;//quando a tecla é acionada a animação de movimento é acionada(true)
  paradod = false;
}else{
  teclaa = false;//tecla não acionada sprite parado
}
if(keyIsDown(68)){
  d += 5;
  teclad = true;
  paradoa = false;
}else{
  teclad = false;
}
if(keyIsDown(87) && !pulo){
  pulo = true;
  cont = 0;
}
if(pulo){
  cont++
  hp = 0.5*cont*(cont-30);
  if(hp>0){
    pulo = false;
    hp = 0;
  }
}

//Disparo da Bola de fogo
if(keyIsDown(CONTROL) && disparo==false){
  disparo = true;
  soco = true;
  if(paradod == true){
    xd = d + 50;  
    delta = 5;
  } else if(paradoa == true) {
      xd = d - 11;
      delta = -5;
  } else{
    disparo = false;
    soco = false;
  }
}else{
  soco = false;
}

//Movimentação do disparo
if(disparo == true){
  xd = xd + delta;
  if(delta > 0){
   if(xd > 600){
    disparo = false;
    }
  }else{
   if(xd<0){
      disparo = false;
    }
  }
} 
//Animação do disparo
if(disparo == true){
  if(delta>0){
  image(quentinha,xd,495,larquent,altquent);
  }else {
    image(fogox,xd,495,20,30);
  }
}

//Animação personagem
if(teclad && !pulo){
paradod = true;
  anda = andando[contframe];
image(anda, d, h);
contframe++;
if(contframe >= 10){
  contframe = 2;
  }
}else if(teclaa && !pulo){
 paradoa = true;
  vira = virando[contframe];
  image(vira, d, h);
  contframe++;
  if(contframe>=10){
    contframe = 2;
  }
}else if(soco == true){
  if(delta>0){
    soca = andando[contsoco];
    image(soca, d, h);
    contsoco = contsoco + 8;
    if(contsoco>10){
      contsoco = 2;
    }
  } else{
    soca = virando[contsoco];
    image(soca, d, h);
    contsoco = contsoco + 8;
    if(contsoco>10){
      contsoco = 2;
    }
  }
}else if(pulo){
  pulad = pulandod[contpulo];
  contpulo++
  image(pulad,d,h+hp);
  if(contpulo>10){
    contpulo=1;
  }
}else{
  if(paradod == true){
  anda = andando[1];
  image(anda, d, h);
} else if(paradoa == true){
  vira = virando[1];
  image(vira,d,h);
}else{
  anda = andando[1];
  image(anda,d,h);
  }
}
//Movimentação cadeira
image(cadeira,xcad,480,larcad,altcad);
xcad -= 5;
if(xcad<-80){
  xcad = random(650, 1000);
}
}
