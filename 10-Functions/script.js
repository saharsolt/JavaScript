'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};
createBooking('LH241');
createBooking('LH849', 2, 800);
createBooking('LH377', 3);
createBooking('LH347', undefined, 900);

const flight = 'LH843';
const sahar = {
  name: 'Sahar Soltanmohammadi',
  passport: 8378738675,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH635';
  passenger.name = 'Ms.' + passenger.name;

  if (passenger.passport === 8378738675) {
    alert('Checked in!');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, sahar);
// console.log(flight); //LH843
// console.log(sahar); //{name: 'Ms.Sahar Soltanmohammadi', passport: 8378738675}

//Is the same as doing ...
// const flightNum = flight;
// const passenger = sahar;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(sahar);
checkIn(flight, sahar);

//First-class VS. Higher-order functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher-order function: transformer
//Call back function: fn
const transformer = function (str, fn) {
  console.log(`The original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callback all the time
const high5 = function (str) {
  console.log('😜');
};
document.body.addEventListener('click', high5);
['Sahar', 'Masoud', 'Neda', 'Meghdad'].forEach(high5);

//Function returning function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeting = greet('Hey');
greeting('Sahar');
greeting('Masoud');

greet('Hello')('Sahar');

const lufthansa = {
  airline: 'Lufthansa',
  aitaCode: 'LH',
  booking: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.aitaCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.aitaCode}${flightNum}`, name });
  },
};
lufthansa.book('345', 'Sahar Soltanmohammadi');
lufthansa.book('678', 'Masoud Shokrnezhad');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  aitaCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
//Does not work
// book(345, 'Sahar Soltanmohammadi'); //Cannot read properties of undefined. Because of this.
book.call(eurowings, 23, 'Sahar Soltanmohammadi'); //Sahar Soltanmohammadi booked a seat on undefined flight EW23
book.call(lufthansa, 456, 'Masoud Shokrnezhad');
console.log(eurowings);

//Apply method
const flightData = [456, 'Neda ghiasi'];
//book.apply(lufthansa, flightData);
book.call(lufthansa, ...flightData); //Neda ghiasi booked a seat on Lufthansa flight LH456

//bind method

//book.call(eurowings, 23, 'Sahar Soltanmohammadi');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(367, 'Narges Soltani');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Sahar Soltani');
bookEW23('Ehsan Shokrnezhad');

//withEventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //NaN
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //301

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(100)); //123
console.log(addVAT(40)); //49.2

const addTaxRate = function (rate) {
  return function (value) {
    console.log(`${value + value * rate}`);
  };
};
const addVAT2 = addTaxRate(0.23);
addVAT2(100); //123

const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again!');
  const isPrivate = 23;
})();

// console.log(isPrivate);//isPrivate is not defined
(() => console.log('This will never Also run again'))();
{
  const isPrivate = 47;
  var isPrime = 100;
}
// console.log(isPrivate);
console.log(isPrime);
