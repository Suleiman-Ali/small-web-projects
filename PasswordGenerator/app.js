"use strict";

const generatedPassword = document.querySelector("h1");
const form = document.getElementById("form");
const rangeInput = document.getElementById("range");
const numberInput = document.getElementById("number");
const includeUpperInput = document.getElementById("upper");
const includeNumbersInput = document.getElementById("numbers");
const includeSymbolsInput = document.getElementById("symbols");
const generatBtn = document.getElementById("submit");
const LOWER_CASE_CHARS = fromLowToHigh(97, 122);
const UPPER_CASE_CHARS = fromLowToHigh(65, 90);
const NUMBER_CHARS = fromLowToHigh(48, 57);
const SYMBOLS_CHARS = [...fromLowToHigh(33, 47), ...fromLowToHigh(58, 126)];

function fromLowToHigh(low, high) {
  let arr = [];
  for (let i = low; i <= high; i++) arr.push(i);
  return arr;
}

function linkBothInputs(e) {
  let value = e.target.value;
  rangeInput.value = value;
  numberInput.value = value;
}

function generatePassword(amount, isUpper, isNumbers, isSymbols) {
  let arrCharCodes = LOWER_CASE_CHARS;
  let password = [];
  if (isUpper) arrCharCodes = [...arrCharCodes, ...UPPER_CASE_CHARS];
  if (isNumbers) arrCharCodes = [...arrCharCodes, ...NUMBER_CHARS];
  if (isSymbols) arrCharCodes = [...arrCharCodes, ...SYMBOLS_CHARS];

  for (let i = 0; i < amount; i++) {
    // prettier-ignore
    let index =   Math.floor(Math.random() * arrCharCodes.length);
    password.push(String.fromCharCode(arrCharCodes[index]));
  }

  generatedPassword.textContent = password.join("");
}

rangeInput.addEventListener("input", linkBothInputs);
numberInput.addEventListener("input", linkBothInputs);
generatBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let amountOfChars = rangeInput.value;
  let includeUpper = includeUpperInput.checked;
  let includeNumbers = includeNumbersInput.checked;
  let includeSymbols = includeSymbolsInput.checked;
  generatePassword(amountOfChars, includeUpper, includeNumbers, includeSymbols);
});
