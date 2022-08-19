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

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
//jessica.hey();// wrong because static method is not in the prototype of instances

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
  //Instance method
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
  //Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
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

PersonCl.hey();

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

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven Nikolson';
steven.birthYear = 1990;
steven.calcAge(); //32

console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1978);
sarah.calcAge();

//Inheritance between classes
const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person1.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person1.call(this, firstName, birthYear);
  this.course = course;
};
//Linking prototypes
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //true
console.log(mike instanceof Person1); //true
console.log(mike instanceof Object); //true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //Person1{}

//Inheritance between classes: ES6
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
  calcAge() {
    console.log(
      `I am ${
        2022 - this.birthYear
      } years old, but a student I feel more like ${2022 - this.birthYear + 10}`
    );
  }
}
// const martha = new StudentCl('Helen Smith', 1990);
// console.log(martha);

const martha = new StudentCl('Helen Smith', 1990, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

//Inheritance between classes: Object.create

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}.`);
};

const joy = Object.create(StudentProto);
joy.init('Joy Keli', 1995, 'Computer Science');
joy.introduce();
joy.calcAge();

//Another class example
//1. Public fields
//2. Private fields
//3. Public methods
//4. Private methods
//(There is also a static method)
class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  //Public methods
  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposite(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  // _approveLoan(val) {
  //   return true;
  // }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log('Loan approved!');
    }
  }
  static helper() {
    console.log('helper');
  }
  //Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.#movements.push(250);//Not accessible from outside of class
// acc1.#movements.push(-140);
// acc1._approveLoan(1000);

acc1.deposite(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
//console.log(acc1.#movements);//Error
//console.log(acc1.#pin); //Error
//console.log(acc1.#approveLoan(1000)); //Error
Account.helper();
