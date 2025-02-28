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

//scroll

const learnMoreBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

learnMoreBtn.addEventListener('click', function (e) {
  const sec1Coods = section1.getBoundingClientRect();

  //scroll
  // window.scrollTo(
  //   window.scrollX + sec1Coods.left,
  //   window.scrollY + sec1Coods.top
  // );

  // better way
  // window.scrollTo({
  //   left: window.scrollX + sec1Coods.left,
  //   top: window.scrollY + sec1Coods.top,
  //   behavior: 'smooth',
  // });

  //modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

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

// Attributes and dataset
// data-versioN-num="4.5"  data-Version-nUm="4.5" are the same
// let testimage = document.querySelector('.nav__logo');
// console.log(testimage.dataset);
// console.log(testimage.dataset.versionNum);

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
const tabs = document.querySelectorAll('.operations__tab');
const contents = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');
  if (!clickedTab) return; // if click on the empty space between the buttons

  //remove active classes for both tabs and contents
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });

  contents.forEach(content => {
    content.classList.remove('operations__content--active');
  });

  //activate tabs
  clickedTab.classList.add('operations__tab--active');

  // activate content
  let tabNum = clickedTab.dataset.tab;
  let selected = document.querySelector(`.operations__content--${tabNum}`);
  selected.classList.add('operations__content--active');
});

// Menu fade animation

const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');

// my way but not maintainable?
// nav.addEventListener('mouseover', function (e) {
//   let li = e.target.closest('.nav__item');
//   console.log(li);
//   if (!li) return;
//   li.closest('.nav')
//     .querySelectorAll('.nav__link')
//     .forEach(link => {
//       console.log(link);
//       if (link != e.target) {
//         link.style.opacity = 0.5;
//       }
//     });
// });

const handlehoover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const logo = link.closest('.nav').querySelector('.nav__logo');
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handlehoover.bind(0.5));
nav.addEventListener('mouseout', handlehoover.bind(1));

// saved for reference, should be two function mouseover and mouseout, refactor
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const logo = link.closest('.nav').querySelector('.nav__logo');
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;
//   }
// });

// Sticky navigation

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  //console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
