function Player(){
    
    this.length=20;
    this.point=view.center;
    
    this.speed=3.5;
    this.velocity=new Point(0,-this.speed);
    this.width=15;
    this.height=15;
    
    this.path = new Path({
        strokeColor: 'black',
		
        strokeWidth: 20,
		// Select the path, so we can see its segment points:
	selected:false	
	});
    //this.image=new Image();
    //this.image.src="images/hero.png";
    this.image = new Path.Circle(this.point, this.width);
    this.image.selected=false;
    this.image.fillColor = 'red';
    //this.image.selected=true;
    //this.image=new Raster("images/hero.png");
    this.image.position=this.point;
    
    this.boosting=false;
    this.boostTime=0;
}

Player.prototype.getPoint=function(){
    return this.point;
};
Player.prototype.update=function(){
    
    
    
    
    
    if(window.keys[window.right]&&!this.boosting){
        this.velocity.angle+=3;
        
    }
    if(window.keys[window.left]&&!this.boosting){
        this.velocity.angle-=3;
       
        
    }
    //if boost button pressed start boost
    if(window.isPressed(window.boost)){
        this.boosting=true;
    }
    
    //if boosted this long then stop boost and reset timer
    if(this.boostTime>100){
        this.boostTime=0;
        this.boosting=false;
    }
    
    //change speed if boosting
    if(this.boosting===true){   
        this.velocity=this.velocity.normalize(this.speed*2);
        ++this.boostTime;
        
    }else{
        this.velocity=this.velocity.normalize(this.speed);
    }
    
    //calculate new position
    this.point=this.point.add(this.velocity);
  
    
    
    
    
    //bouncing of the walls
    if(this.point.x<=this.width/2 || this.point.x>=canvas.scrollWidth-this.width/2){
        this.velocity.x=-this.velocity.x;
        
    }
    if(this.point.y<=this.height/2 || this.point.y>=canvas.scrollHeight-this.height/2){
        this.velocity.y=-this.velocity.y;
        
    }
    this.path.insert(0,this.point);
    if(this.path.segments.length>this.length){
        this.path.removeSegment(this.path.segments.length-1);
    }
    /*var gradient = new Gradient(['black', 'white'], 'radial');
    var from = this.path.segments[0].point;
    var to = this.path.segments[this.path.segments.length-1].point;
    var gradientColor = new GradientColor(gradient, from, to); 
    this.path.strokeColor=gradientColor;*/
    if(this.boosting){
        this.path.strokeColor='red';
    }else{
        this.path.strokeColor='black';
    }
    this.image.position=this.point;
    
    
};

Player.prototype.handleLimits=function(){
    
};
Player.prototype.delete=function(){
    this.image.remove();
    this.path.remove();
    
};




