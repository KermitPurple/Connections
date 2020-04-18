class Connections{
	constructor(frequency){
		this.frequency = frequency;
		this.points = [];
		for(let i = 20; i < width; i+= 20){
			this.points.push(createVector(i, 20))
		}
		for(let i = 40; i < height - 20; i+= 20){
			this.points.push(createVector(width - 20, i))
		}
		for(let i = height - 20; i > 20; i -= 20){
			this.points.push(createVector(i, height - 20))
		}
		for(let i = height - 20; i > 20 ; i -= 20){
			this.points.push(createVector(20, i))
		}
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
