"use strict";

const imgs = document.querySelectorAll(".container__img");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentImg = 0;

function moveDot() {
  dots.forEach((dot) => dot.classList.remove("dot--active"));
  dots[currentImg].classList.add("dot--active");
}

function changeImgsCoords() {
  for (let i = 0; i < imgs.length; i++)
    imgs[i].style.transform = `translateX(-${currentImg * 100}%)`;
}

function goNext() {
  if (currentImg === imgs.length - 1) {
    currentImg = 0;
    changeImgsCoords();
    moveDot();
    return;
  }

  currentImg++;
  changeImgsCoords();
  moveDot();
}

function goPrev() {
  if (currentImg === 0) {
    currentImg = imgs.length - 1;
    changeImgsCoords();
    moveDot();

    return;
  }

  currentImg--;
  changeImgsCoords();
  moveDot();
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
