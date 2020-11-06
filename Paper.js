class Paper 
{
    constructor(x,y,radius)
    {

     var options =
     {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
     }

     this.image = loadImage("sprites/paper.png");
     this.body = Bodies.circle(x,y,radius,options)

     World.add(world,this.body)

     this.r = radius
     this.w = width;
     this.h = height;
    }

    display()
    {
        pos = this.body.position;

     var pos = this.body.position;
     //circle(pos.x,pos.y,this.r)
     image(this.image,pos.x,pos.y + -14,50,50)
    }
}