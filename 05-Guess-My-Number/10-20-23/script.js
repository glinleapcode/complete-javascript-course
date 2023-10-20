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

document.querySelector('.check').addEventListener('click', function(e) => {
  console.log(this);
  let guessNumber = document.querySelector('.guess').value;
  console.log(guessNumber);
});
