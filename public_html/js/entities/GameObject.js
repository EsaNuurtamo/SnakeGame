function GameObject(point){
    this.point=point;
    this.speed;
    this.velocity;
    this.width;
    this.height;
    //this.image = new paper.Path.Circle(this.point, 32);
    this.image;
    
}

GameObject.prototype.update=function(){
    
    this.velocity=this.velocity.normalize(this.speed);
    
    //if boost is pressed then velocity increases
    if(window.keys[window.right]===true){
        this.velocity.angle+=3;
        
    }
    if(window.keys[window.left]===true){
        this.velocity.angle-=3;
       
        
    }
    if(window.isPressed(window.boost)){
        
        this.velocity=this.velocity.normalize(this.speed*2);
        
    }
    
    //calculate new position
    this.point=this.point.add(this.velocity);
    //this.point.x+=this.velocity.x;
    //this.point.y+=this.velocity.y;
    
    
    
    
    
   
    this.image.position=this.point;
    this.image.rotation=this.velocity.angle+90;
    
};

GameObject.prototype.getPoint=function(){
    return new Point(this.x,this.y);
};




