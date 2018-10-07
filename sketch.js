var anda,vira;//parametro para definir image()
var andando = [];//variavel do tipo array para armazenar as imagens virado para direita
var virando = [];//variavel do tipo array para armazenar as imagens virado para esquerda
var contframe = 2;//variavel que ira indicar o frame da animação
var teclad = false; //indica que a animação do personagem será para a direita
var teclaa = false; //indica que a animação do personagem será para a esquerda
var d = 30; // variavel que vai indicar a posição do personagem
var fogo,socando,fogox,socandox;// variaveis para guardar as imagens do disparo
var disparo = false;//indica se o disparo está ativo
var soco = false;//indica se a animação de atirar está ativa ou nao
var xd = d + 30;//indica a posição do disparo
var paradoa = false;//indica que o personagem estará virado para o lado esquerdo quando parado
var paradod = false;//indica que o personagem estará virado para o lado direito quando parado

function preload(){
  for(i = 1; i <=9 ; i++){
    andando[i] = loadImage("Untitled-"+i+".png");
  } // esse 'for' serve para preencher o array 'andando' com as imagens do personagem lado direito
  for(h = 1; h<=9; h++){
    virando[h] = loadImage("virado"+h+".png");
  }// esse 'for' serve para preencher o array 'andando' com as imagens do personagem lado esquerdo
  
  //variaveis armazenando imagens da animação relacionada ao disparo
  fogo = loadImage("fogo.png");
  socando = loadImage("socando.png");
  fogox = loadImage("fogox.png");
  socandox = loadImage("socandox.png");
} 

function setup() {
createCanvas(600,600);
frameRate(20);

}

function draw() {
background(0,173,239);//céu
fill(40,240,40);//cor Plataforma
rect(0,540,600,60);//Plataforma


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

//Disparo da Bola de fogo
if(keyIsDown(CONTROL) && disparo==false){
  disparo = true;
  soco = true;
  xd = d + 40;
}else{
  soco = false;
}

//Movimentação do disparo (Precisa corrigir uma falha na movimentação do disparo)
if(disparo == true && paradod == true){
  xd += 5;
  if(xd > 600){
    disparo = false;
    }
  }if(disparo == true && paradoa == true){
    xd -= 5;
    if(xd<0){
      disparo = false;
    }
  }
//Animação do disparo
if(disparo == true){
  if(paradod == true){
  image(fogo,xd,490,20,30);
  }else if(paradoa == true){
    image(fogox,xd,490,20,30);
  }
}

//Animação
if(teclad == true){
paradod = true;
  anda = andando[contframe];
image(anda, d, 460);
contframe++;
if(contframe >= 10){
  contframe = 2;
  }
}else if(teclaa == true){
 paradoa = true;
  vira = virando[contframe];
  image(vira, d, 460);
  contframe++;
  if(contframe>=10){
    contframe = 2;
  }
}else if(soco == true){
  image(socando, d, 460);
}else{
  if(paradod == true){
  anda = andando[1];
  image(anda, d, 460);
} else if(paradoa == true){
  vira = virando[1];
  image(vira,d,460);
}else{
  anda = andando[1];
  image(anda,d,460);
  }
}
}
