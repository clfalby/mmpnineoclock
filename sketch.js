//The setup function only happens once

var sandy=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(143,mouseX,166);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(50,255,127) // an RGB color for the circle's border
  strokeWeight(2);
  fill(255,255,127,sandy); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),100,40); // center of canvas, 20px dia
  fill(250,131,232);
  strokeWeight(0);
  rect(mouseX,mouseY,sandy,sandy);
  
  strokeWeight(3);
  stroke(sandy,250,sandy);
  line(75,75,400,sandy);
  
}

function mousePressed(){

  if (sandy>=255) {
    sandy=0;
  }else{
    sandy=sandy+5;
  }



}
