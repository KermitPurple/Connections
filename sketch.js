let frequency_slider;
let offset_slider;
const shapes = {
	NONE: null,
	SQUARE: "square",
	CIRCLE: "circle",
	STAR: "STAR",
}

function setup(){
	createCanvas(600, 600).parent('cnvs');
	stroke(255);
	createP("Frequency").parent('controls');
	frequency_slider = createSlider(3, 50, 20);
	frequency_slider.parent('controls');
	createP("Offset").parent('controls');
	offset_slider = createSlider(1.1, 5, 2, 0.01);
	offset_slider.parent('controls');
	connections = new SquareConnections();
}

function draw(){
	background(0);
	if(connections.type() == shapes.CIRCLE || connections.type() == shapes.STAR){
		translate(width / 2, height / 2);
	}
	connections.draw()
	noLoop();
}

function mousePressed(){
	update_screen()
}

function mouseDragged(){
	update_screen()
}

function update_screen(){
	if(frequency_slider.value() != connections.frequency_offset){
		connections.frequency = frequency_slider.value();
		connections.get_points();
	}
	if(offset_slider.value() != connections.opposite_offset){
		connections.opposite_offset = offset_slider.value();
	}
	loop();
}

function swap_shapes(){
	if(connections.type() == shapes.SQUARE){
		connections = new CircleConnections();
	}else if(connections.type() == shapes.CIRCLE){
		connections = new StarConnections();
	}else{
		connections = new SquareConnections();
	}
	update_screen();
}
