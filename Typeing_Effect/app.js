"use strict";

const text = document.getElementById("text");
const array = ["Suleiman Ali.", "Web developer!", "Designer!"];

let letters = "";
let letterIndex = 0;
let wordIndex = 0;
let lettersLength = 0;
let currentWord = "";

function type() {
  lettersLength = letters.length;
  currentWord = array[wordIndex];

  if (lettersLength === currentWord.length) {
    letters = "";
    letterIndex = 0;
    wordIndex++;
  }

  if (wordIndex === array.length) wordIndex = 0;

  letters = array[wordIndex].slice(0, letterIndex++);
  text.textContent = letters;
}

setInterval(type, 200);
