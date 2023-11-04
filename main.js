function preload(){

}

function setup(){
    Canvas=createCanvas(600,400);
    Canvas.center();
    Video=createCapture(VIDEO)
    Video.hide()
    tintcolor=""

}
function draw(){
    image(Video,0,0,600,400)
   rect(20,10,120,40)
  square(250,340,120,40)
circle(410,300,80,80)
triangle(300, 100, 320, 100,)
}