var TYPE_SPIKE=0;
var TYPE_BOOSTER=1;

function EdgeObject(type){
    this.type=type;
    this.width=32;
    this.height=32;
    this.rotation;
    this.speed=Math.random()*4+1;
    
    this.velocity;
    this.point;
    this.image;
    if(type===TYPE_SPIKE){
        this.image=new Raster("images/spike.png");
    }else if(type===TYPE_BOOSTER){
        this.image=new Raster("images/hero.png");
    }
    
    //random place and right image rotation
    var rand=Math.random();
    if(rand<0.25){
        this.point=new Point(this.height/2, this.width/2+Math.random()*canvas.scrollHeight-this.width);
        this.image.rotate(-90);
        this.velocity=new Point(0, -this.speed);
    }else if(rand<0.50){
        this.point=new Point(canvas.scrollWidth-this.height/2, this.width/2+Math.random()*canvas.scrollHeight-this.width);
        this.image.rotate(90);
        this.velocity=new Point(0, this.speed);
    }else if(rand<0.75) {
        this.point=new Point(this.height/2+Math.random()*canvas.scrollWidth-this.height,this.height/2);
        this.image.rotate(0);
        this.velocity=new Point(this.speed, 0);
    }else{
        this.point=new Point(this.height/2+Math.random()*canvas.scrollWidth-this.height,canvas.scrollHeight-this.height/2);
        this.image.rotate(180);
        this.velocity=new Point(-this.speed, 0);
    }
    
    
    //direction
    var r=Math.random()
    this.clockwise=false;
    if(r<0.5){
        this.clockwise=true;
        
    }else{
        this.velocity=new Point(-this.velocity.x,-this.velocity.y);
    }
    
    
    this.image.position=this.point;
    
    
   
    
   
}

EdgeObject.prototype.update=function(){
    
    
    
    
    
    //calculate new position
    this.point=this.point.add(this.velocity);
    //this.point.x+=this.velocity.x;
    //this.point.y+=this.velocity.y;
    
    var turning=false;
    
    //turn when reach next edge
    if(this.point.x<this.width/2-1){
        this.point.x=this.width/2;
        turning=true;
    }else if(this.point.x>canvas.scrollWidth-this.width/2+1){
        this.point.x=canvas.scrollWidth-this.width/2;
        turning=true;
    }else if(this.point.y<this.height/2 -1){
        this.point.y=this.height/2;
        turning=true;
    }else if(this.point.y>canvas.scrollHeight-this.height/2+1){
        this.point.y=canvas.scrollHeight-this.height/2-1;
        turning=true;
    }
   
    this.image.position=this.point;
    
    if(turning){
        
        if(this.clockwise){
            this.velocity.angle+=90;
            this.image.rotate(90);
        }else{
            this.image.rotate(-90);
            this.velocity.angle-=90;
        }
    }
    
    
    
    
};


