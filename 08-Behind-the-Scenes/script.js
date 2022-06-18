'use strict';
// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   //console.log(firstName);
//   // console.log(lastName);  ReferenceError: lastName is not defined

//   function printAge() {
//     //Creating new variable with same name as outer scope's variable
//     const firstName = 'Masoud';

//     let output = `${firstName},You are ${age}, born in ${birthYear}`;

//     //Reassigning outer scope's variable
//     output = 'New Output!';

//     //console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you are a millenial, ${firstName}!`;
//       //console.log(str);
//       var millenial = true;

//       function add(a, b) {
//         return a + b;
//       }
//       //const output = 'New Output!';
//     }
//     //console.log(str);       ReferenceError
//     //console.log(millenial); //it is declared var
//     //add(4, 5);    //ReferenceError: add is not defined
//     //console.log(add(4,5)); // it is true if we do not use strict mode
//     //console.log(output);
//   }
//   //printAge();

//   ////return age;
// }

// const firstName1 = 'Sahar';
// //calcAge(1989);
// //console.log(age);     ReferenceError
// //printAge();       ReferenceError

// //Variables
// //console.log(me); //undefined
// //console.log(job); //ReferenceError: Cannot access 'job' before initialization
// //console.log(year);

// var me;
// const job = 'teacher';
// let year = 1989;

// //Functions

// console.log(addDecl(2, 4)); //6
// // console.log(addExpr(2, 4)); //ReferenceError: Cannot access 'addExpr' before initialization
// // console.log(addArrow(2, 4)); //ReferenceError: Cannot access 'addExpr' before initialization

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //var is undefined and undefined(2,4) is not a function
// // console.log(addExp(2, 4)); //addExp is not a function
// // console.log(addArrw(2, 4));

// var addExp = function (a, b) {
//   return a + b;
// };

// var addArrw = (a, b) => a + b;

// //Example
// //console.log(numProduct); //undefined
// if (!numProduct) deleteShoppingCard(); //All products are deleted
// var numProduct = 10;

// function deleteShoppingCard() {
//   console.log('All products are deleted');
// }

// //varibales with var make properity in window object

// var x = 3;
// let y = 4;
// const z = 5;

// //console.log(x === window.x); //true
// //console.log(y === window.y); //false
// //console.log(z === window.z);

// //this keyword

// //console.log(this); //window object

// const calcAge1 = function (birthYear) {
//   console.log(2022 - birthYear);
//   //console.log(this); //undefined
// };

// //calcAge1(1989);

// const calcAge2 = birthYear => {
//   //console.log(2022 - birthYear);
//   //console.log(this); //window   this in arrow function uses its parent feature
// };

// //calcAge2(1989);

// //method
// const sahar = {
//   year: 1989,
//   calcAge: function () {
//     console.log(this); //object
//     console.log(2022 - this.year);
//   },
// };

// sahar.calcAge();

// const neda = {
//   year: 1987,
// };
// //borrow method
// neda.calcAge = sahar.calcAge;

// neda.calcAge(); //35

// //const f = sahar.calcAge;

// //f(); //undefined; //cannot read the properties of year

// var firstName = 'Sahar';

// const narges = {
//   firstName: 'Narges',
//   year: 1982,
//   calcAge: function () {
//     //console.log(this);
//     //console.log(2022 - this.year);

//     //Solution1
//     // const self = this; //first way to solve the problem with this

//     // const isMillenial = function () {
//     //   console.log(self); //object
//     //   console.log(self.year >= 1980 && self.year <= 1989); //true

//     //   // console.log(this); //undefined
//     //   // console.log(this.year >= 1980 && this.year <= 1989);//cannot read the property
//     // };

//     //Solution2(arrow function)
//     const isMillenial = () => {
//       console.log(this); //object
//       console.log(this.year >= 1980 && this.year <= 1989); //true
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this); //window: arrow function
//     //console.log(`Hey ${this.firstName}`); //undefined because there is no firstName in window object
//     //but when we define var firstName it is different because var own a property in window(Sahar)
//   },
// };
// narges.greet();
// narges.calcAge();

// //arguments keyword

// const addex = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addex(3, 7);
// addex(3, 7, 1, 5, 2);

// var addarow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// //addArrow(3, 7); //arguments is not true for arrow function

//primitive vs. reference types
let age = 33;
let oldAge = age;
age = 34;

console.log(oldAge);
console.log(age);

const me = {
  firstName: 'Sahar',
  age: 30,
};

const friend = me;
console.log(me);
console.log(friend);
friend.age = 34;
console.log(me);
console.log(friend);

//primitive types
let lastName = 'Soltanmohammadi';
let oldLastName = lastName;
lastName = 'Shokrnezhad';

console.log(oldLastName, lastName);

//refrence types
const sahar = {
  firstName: 'Sahar',
  lastName: 'Soltanmohammadi',
  age: 33,
};

const marriedSahar = sahar;
marriedSahar.lastName = 'Shokrnezhad';

console.log('Before marriage', sahar);
console.log('After marriage', marriedSahar);
//marriedSahar = {}; //Assignment to constant variable

//copying object
const sahar1 = {
  firstName: 'Sahar',
  lastName: 'Soltanmohammadi',
  age: 33,
  family: ['Sahar', 'Masoud', 'Aahoo'],
};

//shallow copy
const copiedSahar = Object.assign({}, sahar1);
copiedSahar.lastName = 'Shokrnezhad';

copiedSahar.family.push('Aanna');
copiedSahar.family.push('Aalam');

console.log('Before marriage', sahar1);
console.log('After marriage', copiedSahar);
