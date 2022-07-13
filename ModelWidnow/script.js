"use strict";

function show() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hide() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}

function esc_pressed(e) {
  if (e.key === "Escape")
    if (
      !model.classList.contains("hidden") ||
      !overlay.classList.contains("hidden")
    )
      hide();
}

const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btn_close = document.querySelector(".btn--close");
const btns_open = document.querySelectorAll(".btn--open");

for (let i = 0; i < btns_open.length; i++)
  btns_open[i].addEventListener("click", show);

btn_close.addEventListener("click", hide);
overlay.addEventListener("click", hide);

document.addEventListener("keydown", esc_pressed);
