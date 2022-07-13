"use strict";

function display_overlay() {
  overlay.classList.remove("hidden");
}

function remove_overlay() {
  overlay.classList.add("hidden");
}

const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", display_overlay);
overlay.addEventListener("click", remove_overlay);
