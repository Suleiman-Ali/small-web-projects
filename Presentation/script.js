"use strict";

function hideCurrent() {
  if (current) {
    current.classList.add("hidden");
    current.classList.add("none");
  }
}

function displayCurrent() {
  if (current) {
    current.classList.remove("none");
    setTimeout(() => current.classList.remove("hidden"), 0);
  }
}

const sections = document.querySelectorAll(".section");
sections.forEach((sec) => sec.classList.add("hidden"));
sections.forEach((sec) => sec.classList.add("none"));

const btnQ = document.querySelector(".btn--q");
const btnF = document.querySelector(".btn--f");
const btnHtml = document.querySelector(".img--html");
const btnCss = document.querySelector(".img--css");
const btnJs = document.querySelector(".img--js");
const btnGit = document.querySelector(".img--git");

const questionsSection = document.querySelector(".section--questions");
const htmlSection = document.querySelector(".section--web--html");
const cssSection = document.querySelector(".section--web--css");
const jsSection = document.querySelector(".section--web--js");
const frameSection = document.querySelector(".section--web--frame");
const gitSection = document.querySelector(".section--web--git");
const buttonsContainer = document.querySelector(".buttons");

let current = null;
let wasClicked = null;

buttonsContainer.addEventListener("click", function (e) {
  if (e.target === buttonsContainer) return;
  if (e.target === wasClicked) return;

  if (e.target === btnQ) {
    hideCurrent();
    current = questionsSection;
    displayCurrent();
    wasClicked = btnQ;
  } else if (e.target === btnF) {
    hideCurrent();
    current = frameSection;
    displayCurrent();
    wasClicked = btnF;
  } else if (e.target === btnHtml) {
    hideCurrent();
    current = htmlSection;
    displayCurrent();
    wasClicked = btnHtml;
  } else if (e.target === btnCss) {
    hideCurrent();
    current = cssSection;
    displayCurrent();
    wasClicked = btnCss;
  } else if (e.target === btnJs) {
    hideCurrent();
    current = jsSection;
    displayCurrent();
    wasClicked = btnJs;
  } else if (e.target === btnGit) {
    hideCurrent();
    current = gitSection;
    displayCurrent();
    wasClicked = btnGit;
  }
});
