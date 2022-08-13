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

//ProtoTypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
jonas.calcAge();
sahar.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(sahar)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapines';
console.log(jonas.species, sahar.species);

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false
