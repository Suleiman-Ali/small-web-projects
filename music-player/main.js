"use strict";

const prev = document.querySelector(".btn-backward");
const play = document.querySelector(".btn-play");
const next = document.querySelector(".btn-forward");
const replay = document.querySelector(".btn-replay");
const audio = document.getElementById("audio");
const progreesBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const timeBegin = document.querySelector(".time__left");
const timeEnd = document.querySelector(".time__right");

function addPlayIcon() {
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
}

function addPauseIcon() {
  play.classList.add("fa-play");
  play.classList.remove("fa-pause");
}

function goBack5s() {
  audio.currentTime = audio.currentTime - 5;
}

function goForward5s() {
  if (audio.currentTime === audio.duration) {
    replaySong();
    return;
  }
  audio.currentTime = audio.currentTime + 5;
}

function replaySong() {
  audio.currentTime = 0;
  audio.play();
}

function pauseSong() {
  audio.classList.remove("playing");
  audio.pause();
  play.classList.add("fa-play");
  play.classList.remove("fa-pause");
}

function playSong() {
  audio.classList.add("playing");
  audio.play();
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
}

function playControl() {
  if (audio.currentTime === audio.duration) {
    replaySong();
    return;
  }
  if (audio.classList.contains("playing")) pauseSong();
  else playSong();
}

function handleTimeFormat(duration, currentTime) {
  const array = [];
  let seconds = "00";
  let minutes = "00";
  let seconds2 = "00";
  let minutes2 = "00";

  if (Math.trunc(currentTime / 60) >= 10)
    minutes = `${Math.trunc(currentTime / 60)}`;
  else minutes = `0${Math.trunc(currentTime / 60)}`;

  if (Math.trunc(currentTime % 60) >= 10)
    seconds = `${Math.trunc(currentTime % 60)}`;
  else seconds = `0${Math.trunc(currentTime % 60)}`;

  if (Math.trunc(duration / 60) >= 10)
    minutes2 = `${Math.trunc(duration / 60)}`;
  else minutes2 = `0${Math.trunc(duration / 60)}`;

  if (Math.trunc(duration % 60) >= 10)
    seconds2 = `${Math.trunc(duration % 60)}`;
  else seconds2 = `0${Math.trunc(duration % 60)}`;

  const finalCurrent = minutes + ":" + seconds;
  const finalDuration = minutes2 + ":" + seconds2;
  array.push(finalCurrent, finalDuration);
  return array;
}

function handleTimeLine(e) {
  let zero1 = "0";
  let zero2 = "0";
  const { duration, currentTime } = e.target;
  timeBegin.textContent = handleTimeFormat(duration, currentTime)[0];
  timeEnd.textContent = handleTimeFormat(duration, currentTime)[1];

  progress.style.width = `${(currentTime / duration) * 100}%`;
}

function handleProgressChange(e) {
  let pos =
    ((e.pageX - progreesBar.getBoundingClientRect().x) /
      progreesBar.offsetWidth) *
    100;

  let time = (pos * audio.duration) / 100;

  progress.style.width = pos + "%";
  audio.currentTime = time;
}

prev.addEventListener("click", goBack5s);
next.addEventListener("click", goForward5s);
replay.addEventListener("click", replaySong);
audio.addEventListener("timeupdate", handleTimeLine);
play.addEventListener("click", playControl);
progreesBar.addEventListener("click", handleProgressChange);
