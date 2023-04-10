
// Define constants
const home = document.getElementById("tiger--score");
const visit = document.getElementById("visitor--score");
const breaks = document.getElementById("break--b--h");
const breaksBtn = document.getElementById("b-btn-h");
const leftArrow = document.getElementById("arrow__left");
const breaksA = document.getElementById("break--b--a");
const breaksBtnA = document.getElementById("b-btn-a");
const rightArrow = document.getElementById("arrow__right");
const foulH = document.getElementById("foul-num-h");
const foulHbtn = document.getElementById("foul-btn");
const foulA = document.getElementById("foul-num-a");
const foulAbtn = document.getElementById("foul-btn-a");
const foulTotal = document.getElementById("foul-total");
const playerNum = document.getElementById("player-num");
const savedScore = document.getElementById("home--last--score");
const savedScoreVisit = document.getElementById("visit--last--score");
const period = document.getElementById("period");
const homeWin = document.getElementById("home-win");
const visitWin = document.getElementById("visit-win");
const pauseTimer = document.getElementById("pause");

// Define variables
let scoreH = 0;
let scoreA = 0;
let homeValue = [];
let visitValue = [];
let foulHScore = 0;
let foulAScore = 0;
let playerTotalFoul = 0;
let perNum = 1;
let sumH = 0;
let sumA = 0;

// Define functions using function declarations
function add1H() {
  home.textContent = scoreH += 1;
  homeValue.push(scoreH);
}

function add2H() {
  home.textContent = scoreH += 2;
  homeValue.push(scoreH);
}

function add3H() {
  home.textContent = scoreH += 3;
  homeValue.push(scoreH);
}

function add1A() {
  visit.textContent = scoreA += 1;
  visitValue.push(scoreA);
}

function add2A() {
  visit.textContent = scoreA += 2;
  visitValue.push(scoreA);
}

function add3A() {
  visit.textContent = scoreA += 3;
  visitValue.push(scoreA);
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5;
  var display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);
};






