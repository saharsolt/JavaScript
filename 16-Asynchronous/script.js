// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.entries(data.languages)[0][1]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.entries(data.currencies)[0][1]['name']
      }</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
// ///////////////////////////////////////
// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();
// //   console.log(request.responseText);

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     //console.log(Object.entries(data.currencies)[0][1]['name']);

// //     //console.log(data.languages);
// //     const html = `<article class="country">
// //   <img class="country__img" src="${data.flags.png}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name.common}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${(
// //       +data.population / 1000000
// //     ).toFixed(1)} people</p>
// //     <p class="country__row"><span>🗣️</span>${
// //       Object.entries(data.languages)[0][1]
// //     }</p>
// //     <p class="country__row"><span>💰</span>${
// //       Object.entries(data.currencies)[0][1]['name']
// //     }</p>
// //   </div>
// // </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // // getCountryData('portugal');
// // // getCountryData('usa');
// // // getCountryData('iran');

// // ////////////////////////////////////////////

// // const getCountryDataAndNeighbours = function (country) {
// //   //AJAX call country 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();
// //   console.log(request.responseText);

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     //Render country 1
// //     renderCountry(data);

// //     //Get neighbour country(2)
// //     const neighbour = data.borders?.[0];
// //     //AJAX call country 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();
// //     console.log(request2.responseText);

// //     request2.addEventListener('load', function () {
// //       //console.log(this.responseText);
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryDataAndNeighbours('portugal');
// // getCountryDataAndNeighbours('usa');
// // getCountryDataAndNeighbours('iran');

// //For example of call back hell
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 seconds passed');
// //       setTimeout(() => {
// //         console.log('4 seconds passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// ///////////////////////////
// //Used to be
// // const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// // const request = fetch('https://restcountries.com/v3.1/name/portugal');
// // console.log(request);
// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //Country1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');
//       //Country2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//       console.error(`${error} 💥💥💥💥!`);
//       renderError(`Something went wrong 💥💥💥${error.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// // const getCountryData = function (country) {
// //   //Country1
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = 'fdsdggh';

// //       if (!neighbour) return;
// //       //Country2
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);
// //       return response.json();
// //     })
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(error => {
// //       console.error(`${error} 💥💥💥💥!`);
// //       renderError(`Something went wrong 💥💥💥${error.message}. Try again!`);
// //     })
// //     .finally(() => (countriesContainer.style.opacity = 1));
// // };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
//   // getCountryData('iran');
// });

// // getCountryData('fdsdggh');
// //getCountryData('australia');

// //Event loop
// console.log('Test start!');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolve promise 1').then(res => console.log(res));

// Promise.resolve('Resolve promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end!');

// //Building a simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening🔃');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// //For example of call back hell
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 seconds passed');
// //     setTimeout(() => {
// //       console.log('3 seconds passed');
// //       setTimeout(() => {
// //         console.log('4 seconds passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(err => console.error(err));

// /////////////////////
// //Promisifying the geolocation API
// navigator.geolocation.getCurrentPosition(
//   possiton => console.log(possiton),
//   err => console.error(err)
// );
// // console.log('First happened');

const getPosition = function () {
  return new Promise(function (resolve, rejcet) {
    // navigator.geolocation.getCurrentPosition(
    //   possiton => resolve(possiton),
    //   err => rejcet(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, rejcet);
  });
};

// // getPosition().then(pos => console.log(pos));

// const whereAmI2 = function () {
//   getPosition()
//     .then(pos => {
//       console.log(pos);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=265340248874529326221x46774`
//       );
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(
//           `Something is wrong with Geocoding(${response.status})`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('Country not found');
//       return response.json();
//     })
//     .then(data => renderCountry1(data[0]))
//     .catch(err => console.error(`${err.message} 💥💥💥`));
// };

// btn.addEventListener('click', whereAmI2);

// //Consuming promise with async and await

// fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//   console.log(res)
// );

const whereAmI3 = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=265340248874529326221x46774`
    );
    if (!resGeo) throw new Error(`Problem geting location data`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res) throw new Error(`Problem geting country`);
    //console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something is wrong 💥💥 ${err.message}`);
  }
};
whereAmI3();
whereAmI3();
whereAmI3();
whereAmI3();
console.log('First');

// try {
//   let y = 1;
//   const x = 3;
//   x = 1;
// } catch (err) {
//   alert(err.message);
// }
