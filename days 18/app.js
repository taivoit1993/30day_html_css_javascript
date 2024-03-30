
var countEl = document.querySelectorAll(".counter");



countEl.forEach((el, index) => {
    counter(el, index);
});

function counter(el, index){
    let numberEl = el.querySelector(".number");
    let count = 0;
    let to = numberEl.innerText;
    let times = 135;
    let step = to / times;

    let countNumber = setInterval(() => {
        count += Math.round(step);
        if(count >= to){
            numberEl.innerText = to;
            clearInterval(countNumber);
        } else{
            numberEl.innerText = count
        }
    },20);
}
