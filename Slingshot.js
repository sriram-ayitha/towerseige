class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB
    }
    display(){
        if(this.sling.bodyA){
            fill("black");
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        }
    
    fly(){
        this.sling.bodyA = null;
    }
    
}