class Polygon{
    constructor(x,y,width,height){
        var options={
            'restitution':1.0,
            'friction':0.01
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.img = loadImage("polygon.png");


    }
    display(){
        image(this.img,this.body.position.x,this.body.position.y,50,50);
    }
}