class DrawConnections extends Connections{
    constructor(){
        super();
        this.get_points()
    }

    get_points(){
        this.points = [];
    }

    type(){
        return shapes.DRAW
    }
}
