class Slingshot {
constructor(body1, point) {
var options = {
    bodyA:body1,
    pointB:point,
    length:40,
    stiffness:1
}
this.Sling=Constraint.create(options)
World.add(world,this.Sling)
}
display(){
    if(this.Sling.bodyA)    {
var a = this.Sling.bodyA.position
var b = this.Sling.pointB
line(a.x,a.y,b.x,b.y)
    }

}
fly(){
this.Sling.bodyA=null
}
}
