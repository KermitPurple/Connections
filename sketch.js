let frequency_slider;
let offset_slider;
let star_point_slider;
let color_slider;
let color_checkbox;
const shapes = {
    NONE: null,
    SQUARE: "square",
    CIRCLE: "circle",
    STAR: "star",
}

function setup(){
    createCanvas(600, 600).parent('cnvs');
    stroke(255);
    colorMode(HSB);
    createP("Frequency").parent('controls');
    frequency_slider = createSlider(1, 50, 27).parent('controls');
    createP("Offset").parent('controls');
    offset_slider = createSlider(1.1, 5, 2, 0.01).parent('controls');
    createP("Color").parent('controls');
    color_checkbox = createCheckbox('White', true).parent('controls');
    color_div = createDiv().parent('controls');
    color_slider = createSlider(0, 360, 180, 1).parent(color_div);
    color_div.style('display', 'none');
    star_div = createDiv().parent('controls');
    createP("Points on star").parent(star_div);
    star_point_slider = createSlider(1, 15, 5).parent(star_div);
    star_div.style('display', 'none');
    connections = new SquareConnections();
    update_screen()
}

function draw(){
    background(0);
    if(connections.type() == shapes.CIRCLE || connections.type() == shapes.STAR){
        translate(width / 2, height / 2);
    }
    connections.draw()
    noLoop();
}

function mouseClicked(){
    update_screen()
}

function mouseDragged(){
    update_screen()
}

function update_screen(){
    let new_freq = 51 - frequency_slider.value()
    if(new_freq != connections.frequency_offset){
        connections.frequency = new_freq;
        connections.get_points();
    }
    if(offset_slider.value() != connections.opposite_offset){
        connections.opposite_offset = offset_slider.value();
    }
    if(connections.type() == shapes.STAR){
        star_div.style('display', 'block');
        connections.number_of_star_points = star_point_slider.value();
    }else{
        star_div.style('display', 'none');
    }
    if(connections.color != color_slider.value()){
        connections.color = color_slider.value();
    }
    if(color_checkbox.checked()){
        connections.is_white = true;
        color_div.style('display', 'none');
    }else{
        connections.is_white = false;
        color_div.style('display', 'block');
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
