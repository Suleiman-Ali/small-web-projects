"use strict";

const quoteContiner = document.querySelector(".quote");
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");
const btnNew = document.querySelector(".btn-new");
const btnTweet = document.querySelector(".btn-tweet");
const loadingWheel = document.querySelector(".loader");
let data;
let currentQuoteText;
let currentQuoteAuthor;

function loadingQuote() {
  loadingWheel.style.display = "block";
  quoteContiner.style.display = "none";
}

function complateLodaingQuote() {
  loadingWheel.style.display = "none";
  quoteContiner.style.display = "flex";
}

async function getQuotes() {
  try {
    loadingQuote();
    const response = await fetch("https://type.fit/api/quotes");
    data = await response.json();
    newQuote();
  } catch (err) {
    getQuotes();
  }
}

function newQuote() {
  const { text, author } = data[Math.floor(Math.random() * data.length)];
  if (!author) author = "Unknown!";
  currentQuoteText = text;
  currentQuoteAuthor = author;
  displayQuote();
}

function displayQuote() {
  quoteText.innerHTML = `<i class="las la-quote-left quote__mark"></i>
  ${currentQuoteText}`;
  quoteAuthor.textContent = currentQuoteAuthor;
  complateLodaingQuote();
}

function tweetTheQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${currentQuoteText} - ${currentQuoteAuthor}`;
  window.open(tweetUrl, "_blank");
}

btnNew.addEventListener("click", getQuotes);
btnTweet.addEventListener("click", tweetTheQuote);
