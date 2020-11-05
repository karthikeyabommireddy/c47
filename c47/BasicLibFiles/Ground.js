class Ground{
    constructor(){
        var options={
            isStatic:true
        }
this.ground=Bodies.rectangle(400,390,800,20,options);
World.add(world,this.ground);
    }
    display(){
        fill("red");
        rectMode(CENTER);
 rect(this.ground.position.x,this.ground.position.y,800,20);
    }

}