//key values
window.left=0;
window.right=1;
window.boost=2;
window.down=3;


//list of current and previous keystates
window.keys=new Array();
window.prevKeys=new Array();


window.updateKeys=function(){
    for( var i=0; i<window.keys.length;++i){
        window.prevKeys[i]=window.keys[i];
    }
    
};

//checks if spesific key was just pressed on this tick
window.isPressed=function(keyValue){
    return window.keys[keyValue]&&!window.prevKeys[keyValue];
};

window.insertBoolean=function(e, boolean){
    //D
    if(e.keyCode === 68){
        window.keys[window.right]=boolean;
    }
    //A
    if(e.keyCode ===65){
        window.keys[window.left]=boolean;
    }
    //Shift-L
    if(e.keyCode ===16){
        window.keys[window.boost]=boolean;
    }
};




