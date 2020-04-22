class CircleConnections extends Connections{
    constructor(){
        super();
        this.get_points()
    }

    get_points(){
        this.points = [];
        let scl = this.frequency
        let r = width / 2 - 10;
        for(let theta = 0; theta <= TWO_PI; theta += scl/200){
            let x = cos(theta) * r;
            let y = sin(theta) * r;
            this.points.push(createVector(x, y));
        }
    }

    type(){
        return shapes.CIRCLE
    }
}
