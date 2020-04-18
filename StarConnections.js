class StarConnections extends Connections{
	constructor(){
		super();
		this.get_points()
	}

	get_points(){
		this.points = [];
		let scl = this.frequency
		for(let theta = 0; theta <= TWO_PI; theta += scl/200){
			let r = width / 4 - 10 + sin(theta * 5) * width / 4;
			let x = cos(theta) * r;
			let y = sin(theta) * r;
			this.points.push(createVector(x, y));
		}
	}

	type(){
		return shapes.STAR
	}
}
