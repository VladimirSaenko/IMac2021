
"use strict";

let randomColor = 'rgb(' + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
// let randomColor2 = 'rgb(' + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
document.documentElement.style.setProperty('--one-color', `${randomColor}`);
document.documentElement.style.setProperty('--second-color', `${randomColor}`);
let colorInput = document.getElementById("colorInp");

colorInput.addEventListener('input', () => {
    document.documentElement.style.setProperty('--one-color', `${colorInput.value}`);
    document.documentElement.style.setProperty('--second-color', `${colorInput.value}`);
})

document.querySelector('.randomColorBtn').addEventListener('click', () => {
    randomColor = 'rgb(' + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
    document.documentElement.style.setProperty('--one-color', `${randomColor}`);
    document.documentElement.style.setProperty('--second-color', `${randomColor}`);
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
