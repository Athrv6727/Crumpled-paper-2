class Paperclass{

constructor(x,y,r){
 var options={
   isStatic:true,
   restitution:0.3,
   friction:0.5,
   density:1.2

}
this.x=this.x
this.y=this.y
this.r=this.r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.image = loadImage("paper.png")
World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    imageMode(CENTER);
    image(this.image, 0,0, this.width, this.height)
    pop()
}

}