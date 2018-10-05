var anda;//parametro para definir image()
var andando = [];//variavel do tipo array para armazenar as imagens
var contframe = 2;//variavel que ira indicar o frame da animação
var tecla = false; //indica personagem parado
var d = 100;

function preload(){
  for(i = 1; i <=9 ; i++){
    andando[i] = loadImage("Untitled-"+i+".png");
  } // esse 'for' serve para preencher o array 'andando' com as imagens do personagem

} 
function setup() {
createCanvas(600,600);
frameRate(15);


}

function draw() {
background(0,173,239);//céu
fill(40,240,40);//cor Plataforma
rect(0,540,600,60);//Plataforma

//Movimentação personagem

if(keyIsDown(65)){
  d -= 5; 
  tecla = true;//quando a tecla é acionada a animação de movimento é acionada(true)
}else{
  tecla = false;//tecla não acionada sprite parado
}
if(keyIsDown(68)){
 d += 5;
 tecla = true;
} else{
  tecla = false;
}


//Animação
if(tecla == true){
anda = andando[contframe];
image(anda, d, 460);
contframe++;
if(contframe >= 10){
  contframe = 2;
  }
} else{
  anda = andando[1];
  image(anda, d, 460);
}

}


