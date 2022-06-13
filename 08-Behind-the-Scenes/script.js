'use strict';
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName);
  // console.log(lastName);  ReferenceError: lastName is not defined

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Sahar';
calcAge(1989);
