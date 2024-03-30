var box = document.querySelectorAll(".box");
var targetList = document.querySelectorAll(".target");

var currentTarget = null;

targetList.forEach(target => {
    target.addEventListener("dragstart", function(e){
        this.classList.add("draging");
        currentTarget = this;
    });
    
    target.addEventListener("dragend", function(e){
        this.classList.remove("draging");
    });
});



box.forEach((el) => {
    el.addEventListener("dragover", function(e){
        e.preventDefault();
        if(!this.querySelector(".target")){
            this.appendChild(currentTarget);
        }
    })

    el.addEventListener("drop", function(e){
        if(!this.querySelector(".target")){
            this.appendChild(currentTarget);
        }
    });
})