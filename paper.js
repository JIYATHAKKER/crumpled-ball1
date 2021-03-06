class Paper{
    constructor(x,y,radius){
        var option = {
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5
        }

        this.body=Bodies.circle(x,y,radius,option);
        this.radius=radius;
        World.add(world,this.body);
    }

        display(){
            var angle=this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill("purple");
            ellipse(0,0,this.radius,this.radius);
            pop();
        }

}