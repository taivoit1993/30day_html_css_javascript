var imageList = document.querySelectorAll(".img-list img");
var imgFeature = document.querySelector(".slide-img img");
var prev = document.querySelector(".slide-img .prev");
var next = document.querySelector(".slide-img .next");
var currentIndex = 0;
imageList.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        currentIndex = index;
        
        setImageSource(index);
    });
});

next.addEventListener("click",(e) => {
    if(currentIndex == imageList.length - 1){
        currentIndex = 0;
    } else{
        currentIndex++;
    }
    setImageSource(currentIndex);
});

prev.addEventListener("click",(e) => {
    if(currentIndex == 0){
        currentIndex = imageList.length - 1;
    } else{
        currentIndex = 0;
    }
    setImageSource(currentIndex);
})

function removeListActive() {
    imageList.forEach((img) => {
        img.parentElement.classList.remove("active");
    });
}

function setImageSource(index) {
    removeListActive();
    let src = imageList[index].src;
    imageList[index].parentElement.classList.add("active");
    imgFeature.style.animation = "";

    setTimeout(() => {
        imgFeature.src = src;
        imgFeature.style.animation = "slideShow 1.5s ease-in-out";
    }, 400);
}

setImageSource(currentIndex);