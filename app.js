"use strict";

var playerChoice;
// let playerChoice = prompt("Choose wisely", "").toUpperCase();
let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;

// if (playerChoice === "" || playerChoice === null) {
//   alert("Invalid input");
// } else playerChoice;

function getComputerChoice() {
  let rock = "ROCK";
  let scissors = "SCISSORS";
  let paper = "PAPER";

  let choices = parseInt(Math.random() * 4);

  if (choices == 1) {
    return rock;
  } else if (choices == 2) {
    return scissors;
  } else {
    return paper;
  }
}

function playRound(playerSelection, computerSelection) {
  const playerScoreBox = document.querySelector(".player-score");
  const computerScoreBox = document.querySelector(".computer-score");

  playerChoice = prompt("Choose wisely", "").toUpperCase();

  if (playerChoice === "" || playerChoice === null) {
    alert("Invalid input");
  } else playerChoice;

  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    playerScoreBox.textContent = `${playerScore}`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    computerScore++;
    computerScoreBox.textContent = `${computerScore}`;
  } else if (playerSelection === computerSelection) {
    alert("It's tie, replay");
  } else alert("Not a wise choice");

  return;
}

function game() {
  const roundsDisplay = document.querySelector(".rounds-left");
  const playerSelection = playerChoice;
  const computerSelection = getComputerChoice();

  for (let round = 0; round < 5; round++) {
    playRound(playerSelection, computerSelection);

    roundsLeft--;
    roundsDisplay.textContent = `${roundsLeft}`;
  }
}

// console.log(getComputerChoice());
// console.log(playerChoice);

game();
