var img1;
var img2;
var img3;
var img4;
var img5;
var img6;


function preload(){
img1 = loadimage(txt.jpg);
img2 = loadimage(soobin.jpg);
img3 = loadimage(yeonjun.jpg);
img4 = loadimage(beomgyu.jpg);
img5 = loadimage(taehyun.jpg);
img6 = loadimage(hueningkai.jpg)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  Image(img1, 0, 0, mouseX * 2, mouseY * 2);
}