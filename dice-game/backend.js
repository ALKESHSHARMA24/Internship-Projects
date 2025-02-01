const RollDice = document.getElementById("roll-dice");
const holdTurn = document.getElementById("hold-turn");
const newGame = document.getElementById("new-game");
const image = document.getElementById("dice-img");
const p1Div = document.getElementById("player1-div");
const p2Div = document.getElementById("player2-div");
const p2_curVal = document.getElementById("player2-current-val");
const p1_curVal = document.getElementById("player1-current-val");

const p1_totalVal = document.getElementById("display-p1-total");
const p2_totalVal = document.getElementById("display-p2-total");

let turn = "p1";
let currentScores = 0;
let p1_totalScore = 0;
let p2_totalScore = 0;

document.addEventListener("DOMContentLoaded", function () {
  p1Div.style.backgroundColor = "rgba(217, 234, 253, 0.3)";

  //    Initalise the localStorage to hold the previous value if page gets load
  //Note:- Always set the value in the localstorage using .setItem.

  if (localStorage.p1Value) {
    p1_totalScore = Number(localStorage.p1Value); //get the value of variable from the localstorage using .operation
    p1_totalVal.innerText = p1_totalScore;
  } else {
    localStorage.setItem("p1Value", 0);
  }

  if (localStorage.p2Value) {
    p2_totalScore = Number(localStorage.p2Value);
    p2_totalVal.innerText = p2_totalScore;
  } else {
    localStorage.setItem("p2Value", 0);
  }
});

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

RollDice.addEventListener("click", function (e) {
  let val = getRandomIntInclusive(1, 6);
  image.src = `./dice-images/dice-${val}.png`;

  //if the current turn is of player1
  if (turn === "p1") {
    if (val !== 1) {
      p1Div.style.backgroundColor = "rgba(217, 234, 253, 0.3)";
      currentScores += val;
      p1_curVal.innerText = currentScores;
    }

    if (val === 1) {
      p1_curVal.innerText = 0;
      currentScores = 0;
      p1Div.style.backgroundColor = "";
      p2Div.style.backgroundColor = "rgba(217, 234, 253,0.3)";
      turn = "p2";
    }
  } else if (turn === "p2") {
    //if turns get change for player2
    if (val !== 1) {
      p2Div.style.backgroundColor = "rgba(217, 234, 253, 0.3)";
      currentScores += val;
      p2_curVal.innerText = currentScores;
      //   localStorage.p2Value += currentScores;
    }
    if (val === 1) {
      p2_curVal.innerText = 0;
      p2Div.style.backgroundColor = "";
      p1Div.style.backgroundColor = "rgba(217, 234, 253,0.3)";
      currentScores = 0;
      turn = "p1";
    }
  }
});

holdTurn.addEventListener("click", function (e) {
  if (turn === "p1") {
    p1_totalScore += currentScores;
    p1_totalVal.innerText = p1_totalScore;

    localStorage.setItem("p1Value", p1_totalScore);
    currentScores = 0;
    p1_curVal.innerText = 0;
    turn = "p2";

    p1Div.style.backgroundColor = "";
    p2Div.style.backgroundColor = "rgba(217, 234, 253,0.3)";
  } else {
    p2_totalScore += currentScores;
    p2_totalVal.innerText = p2_totalScore;
    localStorage.setItem("p2Value", p2_totalScore);
    // localStorage.setItem("p2_totalVal", localVar);

    currentScores = 0;
    p2_curVal.innerText = 0;
    turn = "p1";
    p2Div.style.backgroundColor = "";
    p1Div.style.backgroundColor = "rgba(217, 234, 253,0.3)";
  }
});

newGame.addEventListener("click", function () {
  turn = "p1";
  currentScores = 0;
  p1_totalScore = 0;
  p2_totalScore = 0;

  p1_totalVal.innerText = 0;
  p2_totalVal.innerText = 0;

  p1_curVal.innerText = 0;
  p2_curVal.innerText = 0;

  localStorage.setItem("p1Value", 0);
  localStorage.setItem("p2Value", 0);

  p1Div.style.backgroundColor = "rgba(217, 234, 253, 0.3)";
});

window.addEventListener("BeforeUnloadEvent", function () {
  localStorage.setItem("p1Value", p1_totalScore);
  localStorage.setItem("p2Value", p2_totalScore);
});

if (p1_totalScore === 100 || p2_totalScore === 100) {
  turn = "p1";
  currentScores = 0;
  p1_totalScore = 0;
  p2_totalScore = 0;

  p1_totalVal.innerText = 0;
  p2_totalVal.innerText = 0;

  p1_curVal.innerText = 0;
  p2_curVal.innerText = 0;

  localStorage.setItem("p1Value", 0);
  localStorage.setItem("p2Value", 0);

  p1Div.style.backgroundColor = "rgba(217, 234, 253, 0.3)";
}
