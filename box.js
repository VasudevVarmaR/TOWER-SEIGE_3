class Box {
  constructor(x, y, width, height) 
  {
    var options =
    {
        'friction':1.0,
        'density':1.0,
        'isStatic':false,
    }
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display()
  {
    if(this.body.speed<3)
    {
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("white");
    strokeWeight(4);
    stroke("red");
    rect(0, 0, this.width, this.height);
    pop();
    }
    else
    {
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      pop();
    }
  }

  score()
 {
   if(this.visibility<0 && this.visibility>-6)
   {
     score++;
   }
 }
} 