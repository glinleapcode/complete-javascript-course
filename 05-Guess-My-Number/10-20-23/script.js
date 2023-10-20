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

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', e => {
  let guess = Number(document.querySelector('.guess').value);

  if (guess === '' || isNaN(guess) || guess <= 0 || guess > 20) {
    document.querySelector('.message').textContent =
      '🏀 Invalid Number, must between 1-20';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👏 Correct Number!';
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low!';
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
  }
});
