class Rope{
    constructor(bodyX,pointY){
        var options={
            bodyA:bodyX, 
            pointB:pointY
        }
    this.rope=Constraint.create(options)
    this.pointB=pointY
    World.add(world,this.rope)
    }
display(){
    var pointA=this.rope.bodyA.position
    var pointB=this.pointB
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y) 
}
}
