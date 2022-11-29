let hoToSec = document.getElementById("hoToSec");
let secFromHou = document.getElementById("secFromHou");
let minToSec = document.getElementById("minToSec");
let secFromMin = document.getElementById("secFromMin");
let dtInSeconds = document.getElementById("dtInSeconds");
let currentSla = document.getElementById("currentSla");

const doIt = document.getElementById("doIt");
const runIt = document.getElementById("runIt");
const goBtn = document.getElementById("run");
const resetBtn = document.getElementById("resetBtn");

runIt.addEventListener("click", houToSecCalc);
doIt.addEventListener("click", minToSecCalc);
goBtn.addEventListener("click", slaCalc);
resetBtn.addEventListener("click", resetAll);

function houToSecCalc() {
  let secFromHour = hoToSec.value * 3600;
  secFromHou.innerHTML = secFromHour;
}

function minToSecCalc() {
  let sec = minToSec.value * 60;
  secFromMin.innerHTML = sec;
}

function slaCalc() {
  let a = 31536000 - dtInSeconds.value;
  let b = (a / 31536000) * 100;
  currentSla.innerHTML = b + " %";
  b >= 99.999 ? alert("Gabi is happy!") : alert("Your'e fired!");
}

function resetAll() {
  hoToSec.value = " ";
  secFromHou.innerHTML = 0;
  minToSec.value = " ";
  secFromMin.innerHTML = 0;
  dtInSeconds.value = " ";
  currentSla.innerHTML = 0;
}
