"use strict";

let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;
// let playerChoice = prompt("Choose wisely", "").toUpperCase();

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

  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    playerScoreBox.textContent = `${playerScore}`;
    alert("You win");
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    computerScore++;
    computerScoreBox.textContent = `${computerScore}`;
    alert("You lose");
  } else if (playerSelection === computerSelection) {
    alert("It's tie, replay");
  } else alert("Not a wise choice");

  return;
}

function game() {
  const roundsDisplay = document.querySelector(".rounds-left");
  const computerSelection = getComputerChoice();

  for (let round = 0; round < 5; round++) {
    let playerSelection = prompt("Choose wisely", "").toUpperCase();

    if (playerSelection === "" || playerSelection === null) {
      alert("Invalid input");
      round--;
    }

    playRound(playerSelection, computerSelection);

    roundsLeft--;
    roundsDisplay.textContent = `${roundsLeft}`;
  }
}

document.querySelector(".play").addEventListener("click", game);
