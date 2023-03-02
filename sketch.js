let button, img, sel;

function preload() {
  img = loadImage('assets/Robot.png');
}

function setup() {
  createCanvas(1300, 800);

  // box 1
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadCamera);

  //box 2
  fill('white');
  textSize(32);
  text('What is your \nfavorite AI assistant?', 450, 49);
  sel = createSelect();
  sel.position(450, 150);
  sel.option('Select')
  sel.option('Alexa');
  sel.option('Siri');
  sel.option('Cortana');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  background('#1b1b1b'); 

  fill('white');
  textSize(32)
  text('What is your \nfavorite AI assistant?', 450, 49);
  
  if(sel.value() == "Select"){
    text("Please select", 450, 300)
  }
  else{
    text("Your favorite is \n" + sel.value(), 450, 300)
  }
}

function loadCamera(){
  image(img, 70, 20);
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
