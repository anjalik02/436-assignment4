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
  for (var x = 0; x < width; x += width / 3) {
		for (var y = 0; y < height; y += height / 2) {
			stroke(51);
			strokeWeight(5);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}
