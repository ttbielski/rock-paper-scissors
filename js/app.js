// Computer choice ///////////////////////
function computerPlay() {
  const shapes = ['rock', 'paper', 'scissors'];
  
  return shapes[Math.floor(Math.random() * shapes.length)];
}




// Player choice /////////////////////////
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function playerPlay() {

  rockBtn.addEventListener('click', e => {
    return 'rock';
  });

  paperBtn.addEventListener('click', e => {
    return 'paper';
  });

  scissorsBtn.addEventListener('click', e => {
    return 'scissors';
  });
}


// One round ///////////////////////////////
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

  playRound(playerPlay, computerPlay);
  
}



game();