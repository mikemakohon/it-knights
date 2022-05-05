"use strict";

const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
let i = 0;
const images = [];

images[0] = "./img/0.jpg";
images[1] = "./img/1.jpg";
images[2] = "./img/2.jpg";
images[3] = "./img/3.jpg";

document.slide.src = images[i];

function slideRight() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  document.slide.src = images[i];
}

function slideLeft() {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
  document.slide.src = images[i];
}

buttonLeft.addEventListener("click", slideLeft);
buttonRight.addEventListener("click", slideRight);
