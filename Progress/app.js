"use strict";

const progress = document.querySelector(".c-2");
let value = 630;
let value2 = 0;

const int = setInterval(function () {
  if (value <= 0) clearInterval(int);
  progress.style.strokeDashoffset = `${value}px`;
  value -= 6.3;
  value2 += 6.3;

  document.querySelector(".text").textContent = `${(
    (value2 / 630) *
    100
  ).toFixed(0)}%`;
}, 50);
