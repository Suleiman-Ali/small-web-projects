"use strict";

const URL = "https://source.unsplash.com/random";
const container = document.querySelector(".container");

async function loadImgs(size = 5) {
  for (let i = 0; i < size; i++) {
    let reponse = await fetch(URL);
    let img = document.createElement("img");
    img.src = reponse.url;
    img.classList.add("img");
    container.appendChild(img);
  }
}

function loadMore(e) {
  // prettier-ignore
  if ( window.scrollY + window.innerHeight >=  document.documentElement.scrollHeight - 100 )
    loadImgs();
}

loadImgs();
window.addEventListener("scroll", loadMore);
