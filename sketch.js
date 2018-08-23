var frame = 0;
var translated = 0;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL)
}

function draw() {
  frame++
  background(255, 10)
  translate((-(width/2)-300)+frame,0)
  translated = (-(width/2)-300)+frame
  rotateZ(map(sin(frame/75),-1,1,-0.3,0.3))
  rotateY(map(sin(frame/100),-1,1,-0.3,0.3))
  rotateX(map(sin(frame/50),-1,1,-0.3,0.3))
  rotateY(frame/1000)
  rotateY(0.619)
  rotateX(0.785)
  // fill(0)
  noFill()
  box(300+(sin(frame/100)*100))
  if(translated > width-100){
    frame = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
