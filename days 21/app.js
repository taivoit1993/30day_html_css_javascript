var color = document.querySelector(".color");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var eraser = document.querySelector(".eraser");
var save = document.querySelector(".save");
var clean = document.querySelector(".clean");
var size = document.querySelector(".size");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



var pos1 = {
    x: 0,
    y: 0
}

var pos2 = {
    x: 0,
    y: 0
}
var currentColor = '#000000';

var isDrawing = false;
var lineWidth = size.innerText;

canvas.addEventListener("mousedown", function (e) {
    var rect = this.getBoundingClientRect();
    isDrawing = true;
    lineWidth = size.innerText;
    pos1.x = e.clientX - rect.left;
    pos1.y = e.clientY - rect.top;
});

canvas.addEventListener("mousemove", function (e) {
    if (isDrawing) {
        let rect = e.target.getBoundingClientRect()
        pos2.x = e.clientX - rect.left;
        pos2.y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        // Draw the Path
        ctx.fillStyle = currentColor;
        ctx.strokeStyle = currentColor;
        ctx.stroke();
        // 
        ctx.beginPath();
        ctx.arc(pos1.x, pos1.y, lineWidth, 0, 2 * Math.PI);
        ctx.fill();
        pos1.x = pos2.x;
        pos1.y = pos2.y;
    }
});

canvas.addEventListener("mouseup", function (e) {
    isDrawing = false;
});
// tool
color.addEventListener("change", function (e) {
    currentColor = this.value;
    console.log(currentColor);
});

eraser.addEventListener("click", function (e) {
    currentColor = "#ffffff";
});

plus.addEventListener("click", function (e) {
    let currentValue = size.innerText;
    let afterValue = parseInt(currentValue) + 5;

    if (afterValue > 30) {
        size.innerText = 30;
    } else {
        size.innerText = afterValue;
    }
});

minus.addEventListener("click", function (e) {
    let currentValue = size.innerText;
    let afterValue = parseInt(currentValue) - 5;

    if (afterValue < 5) {
        size.innerText = 5;
    } else {
        size.innerText = afterValue;
    }
});

clean.addEventListener("click", function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

save.addEventListener("click", function(e){
    let myImage = canvas.toDataURL("image/png");
    save.href = myImage;
})