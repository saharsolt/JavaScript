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
