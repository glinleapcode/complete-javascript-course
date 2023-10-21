'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👏 Correct Number!';
document.querySelector('.btn.check').addEventListener('click', e => {
  let guessNumber = document.querySelector('.guess').value;
  console.log(guessNumber);
});
document.querySelector('.number').textContent = 27;
document.querySelector('.score').textContent = 89;
*/

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', e => {
  console.log(secretNumber);
  let guess = Number(document.querySelector('.guess').value);

  if (guess === '' || isNaN(guess) || guess <= 0 || guess > 20) {
    document.querySelector('.message').textContent =
      '🏀 Invalid Number, must between 1-20';
  } else if (guess === secretNumber) {
    // win the game
    document.querySelector('.message').textContent = '👏 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '28rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset the game if Again button clicked
document.querySelector('.again').addEventListener('click', e => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(secretNumber);
});
