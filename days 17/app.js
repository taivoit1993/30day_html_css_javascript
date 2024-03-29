
var animateElement = document.querySelectorAll(".left-to-right, .right-to-left, .zoom-in")

window.onscroll = function () {
    animateElement.forEach((e) => {
        onToScroll(e);
    })
}

 function onToScroll(element){
    let rectElement = element.getClientRects()[0];
    var heightScreen = window.innerHeight;
    if(!(rectElement.bottom < 0 || rectElement.top > heightScreen)){
        element.classList.add("start");
    }else{
        element.classList.remove("start");
    }
 }