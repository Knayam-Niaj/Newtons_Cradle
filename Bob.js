

class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':1.2,
          'friction':0.4,
          'density':2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.image = loadImage("marble.png");
      this.image.scale = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      push();

      translate(pos.x, pos.y);

      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*4, this.radius*4);

      //fill("silver");
      //ellipseMode(RADIUS);
      //circle(0, 0, this.radius);      

      pop();
    }
  }; 