class SquareConnections extends Connections{
    constructor(){
        super();
        this.get_points()
    }

    get_points(){
        this.points = [];
        let scl = this.frequency
        for(let i = scl; i < width; i+= scl){
            this.points.push(createVector(i, scl))
        }
        for(let i = 2 * scl; i < height - scl; i+= scl){
            this.points.push(createVector(width - scl, i))
        }
        for(let i = height - scl; i > scl; i -= scl){
            this.points.push(createVector(i, height - scl))
        }
        for(let i = height - scl; i > scl ; i -= scl){
            this.points.push(createVector(scl, i))
        }
    }

    type(){
        return shapes.SQUARE
    }
}
