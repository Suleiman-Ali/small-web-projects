"use strict";

const imgs = document.querySelectorAll(".img");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    let img = entry.target;
    img.src = img.getAttribute("data-src");
    observer.unobserve(img);
  });
}, options);

imgs.forEach((img) => {
  observer.observe(img);
});
