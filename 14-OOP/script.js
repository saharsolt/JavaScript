'use strict';
const Person = function (firstName, birthYear) {
  //console.log(this);
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //console.log(this);
  //Never do this
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
const sahar = new Person('Sahar', 1989);
console.log(sahar);

//1. New {} is created
//2. Function is called, this={}
//3. {} linked to prototype
//4. Constructor function automatically return {}

console.log(jonas instanceof Person); //true
