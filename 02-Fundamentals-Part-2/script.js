"use strict";

let hasDrivingLicense = false;
const testPass = true;

//if (testPass) hasDrivingsLicense = true; //When using strict mode it shows the error: hasDrivingsLicense is not defined
if (testPass) hasDrivingLicense = true;
if (hasDrivingLicense) console.log("You can drive :D");

// const interface = "Audio"; //Unexpected strict mode reserved word
// const private = 123; //Unexpected strict mode reserved word
//LECTURE: Functions
function logger() {
  console.log("I am Sahar");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); //built-in functions
const num = Number("23");

//Function Declaration
function calcAge(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge(1989);
console.log(age1);
//Function Expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1989);
console.log(age1, age2);

//Arrow Function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65;
  //return retirement - age;
  return `${firstName} retires in ${retirement - age} years`;
};
const yearRetirement = yearsUntilRetirement(1989, "Sahar");
console.log(yearRetirement);

//Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 5;
  //return fruit * 3;
}

function fruitProcessor1(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(applePieces, orangePieces);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor1(2, 3));

//Review functions
const calcAge1 = function (birthYear) {
  return 2022 - birthYear;
};
const yearsUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge1(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement1(1989, "Sahar"));
console.log(yearsUntilRetirement1(1950, "Ali"));

//Introduction to Arrays