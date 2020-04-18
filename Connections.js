class Connections{
	constructor(frequency){
		this.frequency = frequency;
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
			let opposite_index = (i + int(this.points.length / 2)) % this.points.length
			line(this.points[i].x, this.points[i].y, this.points[opposite_index].x, this.points[opposite_index].y)
		}
	}

	draw(){
		this.draw_points()
		this.connect_points()
	}
}
