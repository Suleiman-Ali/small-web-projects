"use strict";

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const rotate = (elem, ratio) =>
  (elem.style.transform = `translateX(-50%) rotate(${ratio * 360}deg)`);

function setClock() {
  const date = new Date();
  const secondsRatio = date.getSeconds() / 60;
  const minuteRatio = (secondsRatio + date.getMinutes()) / 60;
  const hoursRatio = (minuteRatio + date.getHours()) / 12;

  rotate(second, secondsRatio);
  rotate(minute, minuteRatio);
  rotate(hour, hoursRatio);
}

setInterval(setClock, 1000);
setClock();
