const playButtons = document.querySelectorAll('button');
const scoreDiv = document.querySelector('#score');
const resultDisplay = document.querySelector('#result');
let playerPoints = 0;
let computerPoints = 0;

// Computer choice ///////////////////////
function computerPlay() {
  const shapes = ['rock', 'paper', 'scissors'];
  
  return shapes[Math.floor(Math.random() * shapes.length)];
}

// One round /////////////////////////////
function playRound(playerSelection, computerSelection) {
  let result = '';

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = "You won! Rock beats Scissors";
    playerPoints++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = "You won! Paper beats Rock";
    playerPoints++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = "You won! Scissors beat Paper";
    playerPoints++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = "You lost! Paper beats Rock";
    computerPoints++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = "You lost! Scissors beat Paper";
    computerPoints++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = "You lost! Rock beats Scissors";
    computerPoints++;
  }

  
  resultDisplay.textContent = result;

  return result;
}

function game() {

  playButtons.forEach(button => {
    button.addEventListener('click', e => {
  
      playRound(button.getAttribute('id'), computerPlay());
      scoreDiv.textContent = `You ${playerPoints} - ${computerPoints} Computer`;
      
      if (playerPoints === 5) {
        resultDisplay.textContent = 'You won the game!';
      } else if (computerPoints === 5) {
        resultDisplay.textContent = 'Computer won the game!';
      }

    });
  });
  
}

game();
