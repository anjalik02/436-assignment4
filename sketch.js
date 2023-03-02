let button, img;

function preload() {
  img = loadImage('assets/castle.png');
}

function setup() {
  createCanvas(800, 800);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadCamera);
}

function loadCamera(){
  image(img, 0, 0);
}


function draw() {
  // put drawing code here
}
