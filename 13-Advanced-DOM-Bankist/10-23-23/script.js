'use strict';
/////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// // event propagation
// const randomNumber = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(
//     0,
//     255
//   )})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log(this);
//   this.style.backgroundColor = randomColor();
//   console.log(e.eventPhase);
//   console.log('LINK');
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log(this);
//   this.style.backgroundColor = randomColor();
//   console.log(e.eventPhase);
//   console.log('Nav links');
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log(this);
//   this.style.backgroundColor = randomColor();
//   console.log(e.eventPhase);
//   console.log('Nav');
// });

// Dom traversal

const h1 = document.querySelector('h1');
console.log(h1.nextSibling);
