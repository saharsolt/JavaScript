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
console.log(flight); //LH843
console.log(sahar); //{name: 'Ms.Sahar Soltanmohammadi', passport: 8378738675}

//Is the same as doing ...
const flightNum = flight;
const passenger = sahar;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(sahar);
checkIn(flight, sahar);
