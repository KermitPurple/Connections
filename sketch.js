let frequency_slider;
let offset_slider;

function setup(){
	createCanvas(600, 600).parent('cnvs');
	stroke(255);
	button = createButton('Swap shape');
	button.parent('controls')
	createP("Frequency").parent('controls')
	frequency_slider = createSlider(1, 20, 2)
	frequency_slider.parent('controls')
	createP("Offset").parent('controls')
	offset_slider = createSlider(2, 10, 2, 0.3)
	offset_slider.parent('controls')
	connections = new SquareConnections(20);
}

function draw(){
	background(0);
	connections.draw()
	noLoop();
}

function mousePressed(){
	updateScreen()
}

function mouseDragged(){
	updateScreen()
}

function updateScreen(){
	connections.frequency = frequency_slider.value();
	connections.opposite_offset = offset_slider.value();
	loop();
}
