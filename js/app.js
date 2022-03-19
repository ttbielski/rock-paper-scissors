function computerPlay() {
  const shapes = ['rock', 'paper', 'scissors'];

  return shapes[getRandomInt(3)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
