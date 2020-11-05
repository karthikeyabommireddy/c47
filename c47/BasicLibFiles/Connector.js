class Connector{
    constructor(pointA,bodyB){
        var options={
            pointA: pointA,
            bodyB: bodyB,
            stifness:0.004,
            length:100
        }
        this.pointA=pointA
        this.string=Constraint.create(options);
        World.add(world,this.string)
    }
    display(){
        push();
        stroke("green");
        line(this.pointA.x,this.pointA.y,this.string.bodyB.position.x,this.string.bodyB.position.y);
        pop();
    }
}