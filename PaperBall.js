class Paper{
constructor(x,y,Radius){
var option ={
    isStatic:false,
  restitution:0.3,
   density:1.2
}
this.body=Bodies.circle(x,y,Radius,option);
this.Radius=Radius;
  World.add(world,this.body);
}
display(){
    var pos=this.body.position
    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.Radius);

}

}