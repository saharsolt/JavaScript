// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 5;

const calcAge = birthYear => 2022 - 1989;

console.log(calcAge(1989));

/* // Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//What is temperature amplitude? answer: subtract of highest and lowest temperature
//What is error? and what should we do with it?
//How to compute the Highest and lowest temperature?

// 2) Breaking up into sub-problems
// How to ignore error input
// How to find max
// How to find min
// Subtract min form max and return it

const calcTempratureAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > max) {
      max = temp[i];
    }
    if (temp[i] < min) {
      min = temp[i];
    }
    //if(typeof temp[i] !== 'number')
    if (temp[i] === 'error') {
      continue;
    }
  }
  return max - min;
};
calcTempratureAmplitude(temperatures);
console.log(calcTempratureAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// With 2 arrays, should I do the same functions twice? answer: No, just merge them

// 2) Breaking up into sub-problems
// Merging 2 arrays
