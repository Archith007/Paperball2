class Garbage {
    constructor(x, y, width ,height) {
      var options = {
        'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      

    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke("white")
      imageMode(CENTER);
      fill("white");
      image(this.image, 0, 0, this.width, this.height);    
      pop();
    }
}