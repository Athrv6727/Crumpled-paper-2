class Dustbin{

    constructor(x,y){
       
        this.x=x
        this.y=y
        this.width=150
        this.height=300
        this.thickness=20
        this.angle=0
        this.bottombody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
        this.rightbody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
        this.leftbody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
        this.image = loadImage("dustbingreen.png")
        World.add(world,this.bottombody)
        World.add(world,this.rightbody)
        World.add(world,this.leftbody)

        }
        display(){
            var pos = this.body.position;
            var angle=this.body.angle
            push();
            translate(pos.x, pos.y)
            rotate(angle)
            imageMode(CENTER);
            image(this.image, 0,0, this.width, this.height)
            pop()
        }




}