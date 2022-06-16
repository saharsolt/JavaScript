'use strict';
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName);
  // console.log(lastName);  ReferenceError: lastName is not defined

  function printAge() {
    //Creating new variable with same name as outer scope's variable
    const firstName = 'Masoud';

    let output = `${firstName},You are ${age}, born in ${birthYear}`;

    //Reassigning outer scope's variable
    output = 'New Output!';

    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}!`;
      console.log(str);
      var millenial = true;

      function add(a, b) {
        return a + b;
      }
      //const output = 'New Output!';
    }
    //console.log(str);       ReferenceError
    console.log(millenial); //it is declared var
    //add(4, 5);    //ReferenceError: add is not defined
    //console.log(add(4,5)); // it is true if we do not use strict mode
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Sahar';
calcAge(1989);
//console.log(age);     ReferenceError
//printAge();       ReferenceError

//Variables
console.log(me); //undefined
//console.log(job); //ReferenceError: Cannot access 'job' before initialization
//console.log(year);

var me;
const job = 'teacher';
let year = 1989;

//Functions

console.log(addDecl(2, 4)); //6
// console.log(addExpr(2, 4)); //ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 4)); //ReferenceError: Cannot access 'addExpr' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//var is undefined and undefined(2,4) is not a function
// console.log(addExp(2, 4)); //addExp is not a function
// console.log(addArrw(2, 4));

var addExp = function (a, b) {
  return a + b;
};

var addArrw = (a, b) => a + b;
