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
