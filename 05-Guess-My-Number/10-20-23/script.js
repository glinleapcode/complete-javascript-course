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

document.querySelector('.check').addEventListener('click', e => {
  const guess = Number((guessNumber = document.querySelector('.guess').value));
  let secretNumber = Math.random() * 20 + 1;
  let message = document.querySelector('.message').textContent;
  document.querySelector('.number').textContent = secretNumber;
  if (isNaN(guess)) {
    message = '🏀 No A Number!';
  }
});
