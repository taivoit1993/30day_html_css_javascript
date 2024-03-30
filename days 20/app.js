var input = document.querySelector(".switch input");
var body = document.querySelector("body");
var content = document.querySelector(".content");
var darkSecondary = getComputedStyle(document.documentElement).getPropertyValue('--dark-secondary');
var lightSecondary = getComputedStyle(document.documentElement).getPropertyValue('--light-secondary');
input.addEventListener("change", function(e){
    changeTheme(this,this.checked);
});

function changeTheme(el,isDark){
    if(isDark){
        el.parentElement.style.backgroundColor = darkSecondary;
        body.classList.add("dark");
        content.classList.add("dark");
    }else{
        el.parentElement.style.backgroundColor = lightSecondary;
        body.classList.remove("dark");
        content.classList.remove("dark");
    }
}