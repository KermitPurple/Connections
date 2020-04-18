class SquareConnections extends Connections{
	constructor(frequency){
		super(frequency);
		this.get_points()
	}

	get_points(){
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
}
