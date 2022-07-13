"use strict";

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  document.querySelector(btn.dataset.target).classList.toggle("hidden");
});

document
  .querySelector(btn.dataset.target)
  .addEventListener("click", function (e) {
    if (!e.target.classList.contains("model")) {
      this.classList.toggle("hidden");
    }
  });
