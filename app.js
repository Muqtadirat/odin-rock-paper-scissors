"use strict";

function getComputerChoice() {
  let rock = "ROCK";
  let scissors = "SCISSORS";
  let paper = "PAPER";

  let choices = parseInt(Math.random() * 4);

  console.log(choices);

  if (choices == 1) {
    return rock;
  } else if (choices == 2) {
    return scissors;
  } else {
    return paper;
  }
}

console.log(getComputerChoice());
