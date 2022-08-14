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

console.log(jonas.__proto__);
//Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor); //return the function itself
console.dir(Person.prototype.constructor); //Inspect the function

const arr = [3, 5, 6, 7, 1, 8, 3, 5]; //new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

//It is good not to use it in practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); //[3, 5, 6, 7, 1, 8]

const h1 = document.querySelector('h1'); //HTMLHeadingElement prototype
console.dir(x => x + 1); //Function prototype

//Class expression
// const PersonCl = class{};

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullname!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1987);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are not hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

const walter = new PersonCl('Walter', 1989); //It doesn't have fullName
const walter1 = new PersonCl('Walter White', 1980);

//getter and setter
const account = {
  owner: 'Sahar',
  movements: [300, -20, 450, -289, 300],

  get latest() {
    return account.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
