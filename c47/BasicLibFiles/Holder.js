class Holder{
    constructor(){
        var options={
            isStatic:true
        }
this.holder=Bodies.rectangle(400,100,600,10,options);
World.add(world,this.holder);
    }
    display(){
        fill("pink");
        rectMode(CENTER);
 rect(this.holder.position.x,this.holder.position.y,600,10);
    }

}