var range = document.querySelector(".range");
var slider = document.querySelector(".slider span");
var text = document.querySelector(".slider small");
var body = document.querySelector("body")

range.addEventListener("mousemove", function (e) {
    let alpha = (e.clientX - this.offsetLeft) / this.offsetWidth;
    body.style.backgroundColor = `rgba(34, 40, 49,${alpha})`;
    percent = Math.round(alpha * 100);
    text.innerText = percent + "%";
    slider.style.width = `${percent}%`;
});