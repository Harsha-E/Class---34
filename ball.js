class ball{
    
    constructor(x, y, width, height){
var options = {
    density : 1,
    frictionAir : 0.005,
}
        
    this.body = Bodies.rectangle(x, y, width, height , options);
    this.width = width;
    this.height = height;
    World.add(qwerty, this.body);

    }
     display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipse(0 ,0 , this.width,this.height);
        pop();
    }

}