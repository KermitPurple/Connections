class Connections{
    constructor(){
        this.frequency = 20;
        this.opposite_offset = 2;
        this.color = color_slider.value();
        this.is_white = color_checkbox.checked();
    }

    draw_points(){
        strokeWeight(5);
        for(let i = 0; i < this.points.length; i++){
            point(this.points[i])
        }
    }

    connect_points(){
        strokeWeight(1);
        for(let i = 0; i < this.points.length; i++){
            let opposite_index = (i + int(this.points.length / this.opposite_offset)) % this.points.length
            line(this.points[i].x, this.points[i].y, this.points[opposite_index].x, this.points[opposite_index].y)
        }
    }

    draw(){
        if(this.is_white){
            stroke(255)
        } else {
            stroke(this.color, 100, 100);
        }
        this.draw_points()
        this.connect_points()
    }
}
