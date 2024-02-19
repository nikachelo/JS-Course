'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// const renderCountryData = function (data, className = '') {
//   const html = `
//   <article class="country ${className} ">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
//   `;
//   countriesContainer.insertAdjacentHTML('afterbegin', html);
// };

// const renderError = function (message) {
//   countriesContainer.insertAdjacentText('afterend', message);
// };

// // const getCountries = function (country) {
// //   //AJAX call country 1
// //   const request = new XMLHttpRequest(); //Old way of doing that
// //   request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);

// //     // Render country 1
// //     renderCountryData(data);

// //     // Get neighbour country
// //     const [neighbour] = data.borders?.[0];
// //     const request2 = new XMLHttpRequest(); //Old way of doing that
// //     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load');
// //   });
// // };

// // getCountries('Georgia');
// const getCountries = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response =>
//       response
//         .json()
//         .then(data => {
//           renderCountryData(data[0]);
//           return fetch(
//             `https://restcountries.com/v2/alpha/${data[0].borders?.[0]}`
//           );
//         })
//         .then(response => response.json())
//         .then(data => renderCountryData(data, 'neighbour'))
//     )

//     .catch(error => renderError(error))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   getCountries('madagascar');
// });

// Challenge 1
const renderCountryData = function (data, className = '') {
  const html = `
  <article class="country ${className} ">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('afterbegin', html);
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('afterend', message);
};

const getCountries = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response =>
      response
        .json()
        .then(data => {
          renderCountryData(data[0]);
          return fetch(
            `https://restcountries.com/v2/alpha/${data[0].borders?.[0]}`
          );
        })
        .then(response => response.json())
        .then(data => renderCountryData(data, 'neighbour'))
    )

    .catch(error => renderError(error))
    .finally(() => (countriesContainer.style.opacity = 1));
};

let lat, lng;

btn.addEventListener('click', function () {
  console.log('clicked');
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    ({ latitude: lat, longitude: lng } = position.coords);
    console.log(lat, lng);
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    )
      .then(response => {
        if (!response.ok) throw new Error(`Some problem: ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log(data);
        getCountries(data.countryName);
      })
      .catch(error => console.error(error.message));
  });
});
