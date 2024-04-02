var typing = document.querySelector("h1");

var originText = typing.innerText;
var index = 0;
var forward = true;
var forwardTypingInterval = null;
var unforwardTypingInterval = null;

function forwardTyping(){
    if(forward){
        index ++;
        if(index >= originText.length){
            forward = false;
            unforwardTypingInterval = setInterval(unforwardTyping,50);
            clearInterval(forwardTypingInterval);
        }
        typing.innerText = originText.substring(0,index);
    }
}

function unforwardTyping(){
    if(!forward){
        index --;
        if(index <= 0){
            forward = true;
            forwardTypingInterval = setInterval(forwardTyping,200);
            clearInterval(unforwardTypingInterval)
        }
        typing.innerText = originText.substring(0,index);
    }
}

function initTyping(){
    if(forward){
        forwardTypingInterval = setInterval(forwardTyping,200);
    }else{
        unforwardTypingInterval = setInterval(unforwardTyping,50);
    }
}

initTyping();