'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent + ' button clicked');
    modal.classList.remove('hidden');
  });
});
