'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const getCountryData = function (country) {
//   // create a request object
//   const request = new XMLHttpRequest();
//   // open method is used to specify the type of request we want to make and the URL we want to make it to
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   // send method is used to send the request
//   request.send();

//   // load event is fired as soon as the data arrives successfully
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     // destructuring the data and extracting the first element of the array [data]
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // console.log(data.currencies.EUR.name);
//     // console.log(data.languages.por);
//     renderCountry(data);
//   });
// };

// getCountryData('portugal');

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('portugal');
