class rope {
    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 250,
            Stiffness : 0.2,
        }

        this.rope = Matter.Constraint.create(options);
        
        this.pointB = pointB;
        
        World.add(qwerty, this.rope);

    }
    
    attach(body){
        
        this.rope.bodyA = body;

    }

    fly(){

        this.rope.bodyA = null;
    
    }

    display(){

        if(this.rope.bodyA){
                var pointA = this.rope.bodyA.position;

                var pointB = this.pointB;

                push();
                
                stroke(48,22,8);

                strokeWeight(5);

                line(pointB.x, pointB.y, pointA.x, pointA.y)

                pop();

        }

    }

}
