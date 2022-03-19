function computerPlay() {
  const shapes = ['rock', 'paper', 'scissors'];

  return shapes[getRandomInt(3)];
}

function playerPlay() {
  let playerShape = prompt('Enter your choice:').toLowerCase();
  
  return playerShape;
}

function playRound(playerSelection, computerSelection) {
  let result = '';

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = "You won! Rock beats Scissors";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "You won! Paper beats Rock";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = "You won! Scissors beat Paper";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "You lost! Paper beats Rock";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = "You lost! Scissors beat Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = "You lost! Rock beats Scissors";
  }

  console.log(result)

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerPlay(), computerPlay());
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

game();