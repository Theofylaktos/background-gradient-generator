var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var randomButton = document.querySelector("button");
window.addEventListener("DOMContentLoaded", startup, false);

function startup() {
    setGradient();
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
}

function colorsUpdate() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", colorsUpdate);



