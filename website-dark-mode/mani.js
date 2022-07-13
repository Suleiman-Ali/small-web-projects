"use strict";

const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
console.log(onBtn, offBtn);
onBtn.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "dark");
});
offBtn.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "light");
});
