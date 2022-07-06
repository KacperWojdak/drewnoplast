function changeBg() {
    var banner = document.getElementsByClassName('banner')[0];
    banner.style.backgroundImage = "url('/assets/img/bg.jpg')";
}
function changeBg2() {
    var banner = document.getElementsByClassName('banner')[0];
    banner.style.backgroundImage = "url('/assets/img/bg2.jpg')";
}
function changeBg3() {
    var banner = document.getElementsByClassName('banner')[0];
    banner.style.backgroundImage = "url('/assets/img/bg3.jpg')";
}
function activeSlider() {
var slider = document.getElementById("slider");
var circle = slider.getElementsByClassName("circle");
for (var i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
}