//JavaScript Fundamentals – Part 1
//LECTURE: Values and Variables
let country = "Iran";
let continent = "Asia";
let population = 80000000;

console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types
let isIsland = false;
//let language;
const language = "Persian";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//LECTURE: let, const and var
//language = "Farsi"; Error: Assignment to constant variable.

//LECTURE: Basic Operators
const firstSplitPopulation = population / 2;
const secondSplitPopulation = population / 2;
console.log(firstSplitPopulation, secondSplitPopulation);

console.log(population++); //80000000
population++;
console.log(population); //80000002

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

const description =
  country + " is in " + continent + ", and is " + population + " people speak " + language + ".";
console.log(description);

//LECTURE: Strings and Template Literals
const descriptionNew = `${country} is in ${continent}, and is ${population} people speak ${language}.`;
console.log(descriptionNew);
