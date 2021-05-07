const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,block,slingshot,polygon;

function setup() {
       createCanvas(1200,800);
       engine=Engine.create();
       world =engine.world;

       ground = new Ground(600,700,1200,20);
       stand = new Ground(390,300,250,10);
       stand2=new Ground(700,200,200,10)
       
       block1 = new Block(300,275,30,40);
       block2 = new Block(330,275,30,40);
       block3 = new Block(360,275,30,40);
       block4 = new Block(390,275,30,40);
       block5 = new Block(420,275,30,40);
       block6 = new Block(450,275,30,40);
       block7 = new Block(480,275,30,40);
       block8 = new Block(330,235,30,40);
       block9 = new Block(360,235,30,40);
       block10 = new Block(390,235,30,40);
       block11= new Block(420,235,30,40);
       block12= new Block(450,235,30,40);
       block13 = new Block(360,195,30,40);
       block14 = new Block(390,195,30,40);
       block15= new Block(420,195,30,40);
       block16 = new Block(390,155,30,40);

       polygon = new Polygon(50,200,50,50);
       slingshot = new Slingshot(polygon.body,{x:100,y:200});

    }
    function draw(){
    background("grey");
    Engine.update(engine)
    
  

    stand.display();
    stand2.display();
    ground.display();
    
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("orange");
    block13.display();
    block14.display();
    block15.display();

    fill("red");
    block16.display();

    polygon.display();
    slingshot.display();
    
    textSize(20)    
    text("drag the polygon and release it towards the blocks",20,20)
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    slingshot.fly();
}
