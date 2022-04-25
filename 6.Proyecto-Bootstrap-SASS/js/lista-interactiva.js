var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var ovelay = document.getElementById('overlay').src;

var img1 = "./assets/img/listView.svg";
var img2 = "./assets/img/boardView.svg";
var img3 = "./assets/img/track_main.svg";
var img4 = "./assets/img/actionView.svg";
var img5 = "./assets/img/mindMapView.svg";

//var img1Absoluta = new URL(img1,document.baseURI).href;

function lista(){
  overlay.src = rutaAbsoluta(img1);
}
function board(){
  overlay.src = rutaAbsoluta(img2);
}
function task(){
  overlay.src = rutaAbsoluta(img3);
}
function sheet(){
  overlay.src = rutaAbsoluta(img4);
}
function map(){
  overlay.src = rutaAbsoluta(img5);
}

btn1.addEventListener('click',lista);
btn2.addEventListener('click',board);
btn3.addEventListener('click',task);
btn4.addEventListener('click',sheet);
btn5.addEventListener('click',map);

function rutaAbsoluta(relativa){
  var absoluta = new URL(relativa,document.baseURI).href;
  return absoluta;
}






// function hoverIn(){
//   btn1.classList.add('hover-simulado');
// }
// function hoverOut(){
//   btn1.classList.remove('hover-simulado');
// }
// for (let i=0; i<5; i++) {
//   if(i==5){i=0;}
//   hoverOut (i);
// }
// function task(i) {
//  setTimeout(function() {

//      console.log(i);
//  }, 2000 * i);
// }
