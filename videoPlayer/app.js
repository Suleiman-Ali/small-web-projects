"use strict";

const container = document.querySelector(".container");
const video = document.querySelector("#video");
const fullScreen = document.querySelector(".full-screen");
const playBtn = document.querySelector("#play");
const currentTime = document.querySelector(".current-time");
const finalTime = document.querySelector(".final-time");
const videoBar = document.querySelector(".bar__movement");
const volumeBtn = document.querySelector("#volume");
const volumeBar = document.querySelector(".bar--small__movement");
const controls = document.querySelector(".controls");

function playOrPause() {
  video.paused ? playVideo() : pauseVideo();
}

function playVideo() {
  video.play();
  playBtn.classList.add("fa-pause");
  playBtn.classList.remove("fa-play");
}

function pauseVideo() {
  video.pause();
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
}

function handleTime(elem, factor) {
  // prettier-ignore
  let minutes = Math.floor(video[factor] / 60) >= 10 ? Math.floor(video[factor] / 60)
      : "0" + Math.floor(video[factor] / 60);

  // prettier-ignore
  let seconds = Math.floor(video[factor] % 60) >= 10 ? Math.floor(video[factor] % 60) 
    : '0' + Math.floor(video[factor] % 60);

  elem.textContent = `${minutes}:${seconds}`;
}

function handleBar() {
  videoBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
}

function muteUnmute() {
  video.volume <= 0 ? videoUnMute() : videoMute();
}

function videoMute() {
  volumeBar.style.width = "0";
  video.volume = 0;
  volumeBtn.classList.remove("fa-volume-up");
  volumeBtn.classList.add("fa-volume-mute");
}

function videoUnMute() {
  volumeBar.style.width = "100%";
  video.volume = 1;
  volumeBtn.classList.add("fa-volume-up");
  volumeBtn.classList.remove("fa-volume-mute");
}

function handleProgressChange(e) {
  let pos =
    ((e.pageX - videoBar.parentElement.getBoundingClientRect().x) /
      videoBar.parentElement.offsetWidth) *
    100;

  let time = (pos * video.duration) / 100;

  videoBar.style.width = `${pos}%`;
  video.currentTime = time;
}

function handleVolume(e) {
  let pos =
    (e.pageX - volumeBar.parentElement.getBoundingClientRect().x) /
    volumeBar.parentElement.offsetWidth;

  if (pos < 0.1) {
    pos = 0;
    videoMute();
  }

  if (
    pos >= 0.1 &&
    pos <= 0.9 &&
    volumeBtn.classList.contains("fa-volume-mute")
  ) {
    volumeBtn.classList.add("fa-volume-up");
    volumeBtn.classList.remove("fa-volume-mute");
  }

  if (pos > 0.9) {
    pos = 1;
    videoUnMute();
  }

  video.volume = pos;
  volumeBar.style.width = `${pos * 100}%`;
}

function goFullScreen() {
  container.classList.contains("opened") ? closeFullscreen() : openFullscreen();
}

function openFullscreen() {
  if (container.requestFullscreen) container.requestFullscreen();
  else if (container.webkitRequestFullscreen)
    container.webkitRequestFullscreen();
  else if (container.msRequestFullscreen) container.msRequestFullscreen();
  container.classList.add("opened");
}

function closeFullscreen() {
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();
  container.classList.remove("opened");
}

video.addEventListener("click", playOrPause);
playBtn.addEventListener("click", playOrPause);
video.addEventListener("timeupdate", function () {
  handleTime(currentTime, "currentTime");
  handleTime(finalTime, "duration");
});
video.addEventListener("timeupdate", handleBar);
volumeBtn.addEventListener("click", muteUnmute);
volumeBar.style.width = `${video.volume * 100}%`;
videoBar.parentElement.addEventListener("click", handleProgressChange);
volumeBar.parentElement.addEventListener("click", handleVolume);
video.addEventListener("ended", function () {
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  currentTime.textContent = finalTime.textContent = "00:00";
  video.currentTime = 0;
});
fullScreen.addEventListener("click", goFullScreen);
controls.addEventListener("mouseover", () => (controls.style.opacity = 1));
controls.addEventListener("mouseout", () => (controls.style.opacity = 0));
