"use strict";

// NOTE Vars
const containers = document.querySelector(".containers");
const addBookmark = document.querySelector(".heading");
const model = document.querySelector(".model");
const inputName = document.getElementById("name");
const inputUrl = document.getElementById("url");
const saveModel = document.querySelector(".model__save");
const closeModel = document.querySelector(".model__close");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

if (bookmarks) {
  let el = "";
  bookmarks.forEach((obj) => {
    try {
      el = createElement(obj.url, obj.name);
      addOneBookmark(el);
    } catch (err) {
      console.error(err);
    }
  });
}

// NOTE Helper Functions
function createElement(urlValue, nameValue) {
  const elemnt = document.createElement("div");
  const i = document.createElement("i");
  const a = document.createElement("a");
  elemnt.classList.add("container");
  i.classList.add("fas", "fa-times", "container__remove");
  a.setAttribute("href", `${urlValue}`);
  a.classList.add("container__link");
  a.textContent = `${nameValue}`;
  elemnt.appendChild(i);
  elemnt.appendChild(a);

  return elemnt;
}

function addToStorage(obj) {
  localStorage.setItem("bookmarks", JSON.stringify(obj));
}

function clearInputs() {
  inputName.value = "";
  inputUrl.value = "";
}

function showModel() {
  model.classList.remove("hidden");
}

function hideModel() {
  model.classList.add("hidden");
  clearInputs();
}

function addOneBookmark(elemnt) {
  containers.insertAdjacentElement("beforeend", elemnt);
}

function saveBookmark() {
  let nameValue = "";
  let urlValue = "";
  let elemnt = "";

  if (inputName.value.length > 0 && inputUrl.value.length > 0) {
    if (!inputUrl.value.includes("http://", "https://"))
      urlValue = `https://${inputUrl.value}`;
    nameValue = inputName.value;

    elemnt = createElement(urlValue, nameValue);
    addOneBookmark(elemnt);
    clearInputs();
    bookmarks.push({ name: nameValue, url: urlValue });
    localStorage.removeItem("bookmarks");
    addToStorage(bookmarks);
  }
}

function removeBookmark(e) {
  const target = e.target;
  const container = e.target.closest(".container");
  const link = container.children[1].getAttribute("href");
  const name = container.children[1].textContent;

  if (target.classList.contains("fa-times")) {
    containers.removeChild(container);

    bookmarks.forEach((el, i) => {
      try {
        if (el.name === name && el.url === link) {
          delete bookmarks[i];
          localStorage.removeItem("bookmarks");
          addToStorage(bookmarks);
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
}

// NOTE Logic
addBookmark.addEventListener("click", showModel);
closeModel.addEventListener("click", hideModel);
saveModel.addEventListener("click", saveBookmark);
containers.addEventListener("click", removeBookmark);
