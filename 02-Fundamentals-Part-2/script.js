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

const friend1 = "Rezvan";
const friend2 = "Negar";
const friend3 = "Nasim";
//1
const friends = ["Rezvan", "Negar", "Nasim"];
console.log(friends);
//2
const years = new Array(2021, 1989, 2011, 1800);
console.log(years);

console.log(friends[0]);
console.log(years.length);
console.log(friends[friends.length - 1]);

friends[1] = "Farzaneh";
console.log(friends);

//friends = ["a", "b", "c"];// Error: Assignment to constant variable.
//console.log(friends);
const firstName = "Sahar";
const Sahar = [firstName, "Soltanmohammadi", 2022 - 1989, "student", friends];
console.log(Sahar);

//exercise
const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};
const year = [1989, 1950, 2011, 2009];
//console.log(calculateAge(year)); //NaN
const ageA = calculateAge(year[0]);
const ageB = calculateAge(year[1]);
const ageC = calculateAge(year[year.length - 1]);
console.log(ageA, ageB, ageC);

const ages = [calculateAge(year[0]), calculateAge(year[1]), calculateAge(year[year.length - 1])];
console.log(ages);

//Basic Array Operations (Methods)
const myFriends = ["Rezvan", "Negar", "Nasim"];
//Adding in Array
const newFriends = myFriends.push("Farzaneh");
console.log(myFriends);
console.log(newFriends); //4

const newFriend = myFriends.unshift("Parisa");
console.log(myFriends);
console.log(newFriend);

//Removing from Array
myFriends.pop();
myFriends.shift();
console.log(myFriends);
const myNewFriends = myFriends.shift();
console.log(myFriends);
console.log(myNewFriends);

console.log(myFriends.indexOf("Rezvan"));
console.log(myFriends.indexOf("Nasim"));

myFriends.push(23);
console.log(myFriends.includes("Nasim"));
console.log(myFriends.includes("Rezvan"));
console.log(myFriends.includes("23")); //false
console.log(myFriends.includes(23)); //true

if (myFriends.includes("Nasim")) {
  console.log("You have a friend called Nasim");
}

//Introduction to Objects
const saharArray = [
  "Sahar",
  "Soltanmohammadi",
  2022 - 1989,
  "Student",
  ["Rezvan", "Nasim", "Negar"],
];
console.log(saharArray);

const saharObject = {
  firstName: "Sahar",
  lastName: "Soltanmohammadi",
  age: 2022 - 1989,
  job: "Student",
  friends: ["Rezvan", "Nasim", "Negar"],
};
console.log(saharObject);

//Dot vs. Bracket Notation

console.log(saharObject.firstName);
console.log(saharObject["firstName"]);
console.log(saharObject.lastName);
console.log(saharObject["lastName"]);

const newName = "Name";
console.log(saharObject["first" + newName]);
console.log(saharObject["last" + newName]);

//console.log(saharObject.'last'+newName);//Error: we cannot write dot with expression

const interestedIn = prompt(
  "What do you want to know about Sahat? Choose between firstName, lastname, age, job, friends"
);
console.log(interestedIn);
//console.log(saharObject.interestedIn);//undefined
if (saharObject[interestedIn]) {
  console.log(saharObject[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastname, age, job, friends ");
}
saharObject.location = "Finland";
saharObject["LinkedIn"] = "@saharsolt";

console.log(saharObject);
//challenge
//"Sahar has 3 friends, and Rezvan is her best friend."
console.log(
  `${saharObject["firstName"]} has ${saharObject.friends.length} friends, and ${saharObject["friends"][0]} is her best friend. `
);

//Object Methods
const sahar = {
  firstName: "Sahar",
  lastName: "Soltanmohammadi",
  birthYear: 1989,
  job: "Student",
  friends: ["Rezvan", "Nasim", "Negar"],
  hasDriverLicense: false,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license`;
  },
};
console.log(sahar.calcAge());
//console.log(sahar["calcAge"](1989));
console.log(sahar.age);
console.log(sahar.age);
console.log(sahar.age);

//challenge
//'Sahar is a 33-year old student, and he has a driver's license.'
// console.log(
//   `${sahar.firstName} is a ${sahar.calcAge()}-year old ${sahar.job}, and he has ${
//     sahar.hasDriverLicense ? "a" : "no"
//   } driver's license`
// );
console.log(sahar.getSummary());

//Iteration: The for Loop
// console.log("1. you rock it 👏");
// console.log("2. you rock it 👏");
// console.log("3. you rock it 👏");
// console.log("4. you rock it 👏");
// console.log("5. you rock it 👏");
// console.log("6. you rock it 👏");
// console.log("7. you rock it 👏");
// console.log("8. you rock it 👏");
// console.log("9. you rock it 👏");
// console.log("10. you rock it 👏");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`${rep}. You rock it 👏`);
}
//Looping Arrays, Breaking and Continuing

const Neda = [
  "Neda",
  "Soltanmohammadi",
  2022 - 1987,
  "accountant",
  ["Masoumeh", "Fatemeh", "Aazita"],
  true,
];
const types = [];
// console.log(Neda[0]);
// console.log(Neda[1]);
// ...
// console.log(Neda[4]);

for (let i = 0; i < Neda.length; i++) {
  console.log(Neda[i], typeof Neda[i]);
  //types[i] = typeof Neda[i];
  types.push(typeof Neda[i]);
}
console.log(types);

const yers = [1989, 2010, 1980, 1999];
const theirAge = [];

for (let i = 0; i < yers.length; i++) {
  theirAge.push(2022 - yers[i]);
}
console.log(theirAge);

//continue and break
console.log("--Only Strings--");
for (let i = 0; i < Neda.length; i++) {
  if (typeof Neda[i] !== "string") continue;
  console.log(Neda[i], typeof Neda[i]);
}

console.log("--Break--");
for (let i = 0; i < Neda.length; i++) {
  if (typeof Neda[i] === "number") break;
  console.log(Neda[i], typeof Neda[i]);
}
//Looping Backwards and Loops in Loops
//0,1,2,3,4
//4,3,2,1,0

for (let i = Neda.length - 1; i >= 0; i--) {
  console.log(i, Neda[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting ${exercise} weight repetition ${rep}`);
  }
}

//The While loop

let rep = 1;
while (rep <= 10) {
  console.log(`${rep}. You rock it!`);
  rep++;
}
//rolling dice randomly
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled dice number ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log("Loop is about to end ...");
  }
}
