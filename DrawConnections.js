class DrawConnections extends Connections{
    constructor(){
        super();
        this.points = []
        this.get_points()
    }

    get_points(){
        if( mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height){
            connections.add_point(createVector(mouseX, mouseY));
        }
    }

    add_point(point){
        this.points.push(point);
    }

    type(){
        return shapes.DRAW
    }
}
