"use strict";

const drag = document.querySelector(".dragable");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dragDrop);
  box.addEventListener("dragleave", dragLeave);
});

function dragOver(e) {
  e.preventDefault();
  let box = e.target;
  box.classList.add("hoverd");
}

function dragDrop(e) {
  e.preventDefault();
  let box = e.target;
  box.classList.remove("hoverd");
  box.appendChild(drag);
}

function dragLeave(e) {
  e.preventDefault();
  let box = e.target;
  box.classList.remove("hoverd");
}
