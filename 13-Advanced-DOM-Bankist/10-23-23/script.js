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

// const h1 = document.querySelector('h1');
// console.log(h1.children); // recommended
// console.log(h1.childNodes);
// console.log(h1.parentElement);
// console.log(h1.parentNode);
// console.log(h1.parentNode.children);
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// [...h1.parentNode.children].forEach(el => {
//   console.log(el);
// });

// Tabbed Component Operations

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations_tab');

tabsContainer.addEventListener('click', function (e) {
  // console.log(e.target);
  // console.log(e.target.closest('.btn'));
  const clickedTab = e.target.closest('.operations__tab');
  if (!clickedTab) return; // if click on the empty space between the buttons
  console.log(clickedTab.parentNode);

  clickedTab.classList.add('operations__tab--active');
});
