var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



function Game(){
    
    this.text = new PointText(new Point(200, 50));
    this.text.justification = 'center';
    this.text.fillColor = 'black';
    
    this.width=canvas.scrollWidth;
    this.height=canvas.scrollHeight;
    this.objects= new Array();
    this.stopped=false;
    this.player=new Player();
    
    for (var i = 0; i < 10; ++i) {
        this.objects[i]=new EdgeObject(TYPE_SPIKE);
    }
    
    this.booster=new EdgeObject(TYPE_BOOSTER);
    
    
    
    
    
    
};


Game.prototype.setX=function(x){
    this.x=x;
};

Game.prototype.viewX=function(){
    alert(this.x); 
};
 
Game.prototype.initListeners=function(){
    
    window.addEventListener("keydown", this.onKeyDown, true);
    window.addEventListener("keyup", this.onKeyUp, true);
};
var setX=function(x){
    alert("now here");
    this.x=x;
};

Game.prototype.onKeyDown=function(e){
    window.insertBoolean(e,true);
};

Game.prototype.onKeyUp=function(e,boolean){
    window.insertBoolean(e,false);
};




    



Game.prototype.init=function(){
    
};
Game.prototype.populate=function(){
    
};
Game.prototype.run=function(){
        //var now = Date.now();
	//var delta = now - then;
        
        this.update();
        this.render();
        
        //then = now;
        //requestAnimationFrame(this.run());
        
    
    
    
   
};



Game.prototype.update=function(){
    this.text.content = "Length: "+String(this.player.length);
    for (var index = 0; index < this.objects.length; ++index) {
        if(this.player.point.x<this.objects[index].point.x+this.objects[index].width/2+this.player.width/2&&
        this.player.point.x>this.objects[index].point.x-this.objects[index].width/2-this.player.width/2&&
        this.player.point.y<this.objects[index].point.y+this.objects[index].height/2+this.player.height/2&&
        this.player.point.y>this.objects[index].point.y-this.objects[index].height/2-this.player.height/2&&
        this.objects[index].type===TYPE_SPIKE)
        {
            this.player.delete();
            this.player=new Player();
        }
      
    }
    var hitOptions = {
	segments: true,
	stroke: false,
	fill: true,
	tolerance: 2
    };
    if(this.player.path.hitTest(this.player.point.add(this.player.velocity.normalize(3*this.player.speed)), hitOptions)){
            this.player.delete();
            this.player=new Player();
    }
        
    
    
    
    if(this.player.point.x<this.booster.point.x+this.booster.width/2+this.player.width/2&&
        this.player.point.x>this.booster.point.x-this.booster.width/2-this.player.width/2&&
        this.player.point.y<this.booster.point.y+this.booster.height/2+this.player.height/2&&
        this.player.point.y>this.booster.point.y-this.booster.height/2-this.player.height/2&&
        this.booster.type===TYPE_BOOSTER)
    {
        if(!this.player.dead){
            this.player.length+=20;
            this.player.speed+=0.1;
        }
        
        this.booster.image.remove();
        this.booster=new EdgeObject(TYPE_BOOSTER);
    }
    
    
    this.player.update();
    
    for (var index = 0; index < this.objects.length; ++index) {
        this.objects[index].update();
    }
    
    this.booster.update();
    
    window.updateKeys();
    
};

Game.prototype.render=function(){
    
    //clear
    
    view.draw();
    
    
};

Game.prototype.start=function(){
    var t = this;
    setInterval(function(){t.run();}, 1000/60);
};



