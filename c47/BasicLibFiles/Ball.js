class Ball{
    constructor(x,y,r){
        this.r=r;
        var options={
            restituition:0.8,
            friction:1,
            density:1
        }
        this.ball=Bodies.circle(x,y,r,options)
        World.add(world,this.ball);
    }
    display()
    {
        fill("blue");
        ellipseMode(RADIUS);
 ellipse(this.ball.position.x,this.ball.position.y,this.r,this.r)
    }
}