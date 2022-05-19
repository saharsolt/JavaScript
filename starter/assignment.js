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

//LECTURE: Taking Decisions: if / else Statements
//population = 13000000;
//population = 130000000;
if (population > 33000000) {
  console.log(`${country}'s population is above average! `);
} else {
  console.log(`${country}'s population is ${33000000 - population} below average`);
}

//LECTURE: Type Conversion and Coercion
/*1. Predict the result of these 5 operations without executing them:
'9' - '5';       answer: 4
'19' - '13' + '17';   answer: '617'
'19' - '13' + 17;   answer: 23
'123' < 57;      false
5 + 6 + '4' + 9 - 4 - 2;    answer: '1143'
2. Execute the operations to check if you were */
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//LECTURE: Equality Operators: == vs. ===
//let numNeighbours = prompt("How many neighbour countries does your country have");
//if (numNeighbours == 1) console.log("Only 1 border!"); //loose
/*let numNeighbours = Number(prompt("How many neighbour countries does your country have")); // it is necessary because prompt answer is string and strict equality does not support type coersion
if (numNeighbours === 1) console.log("Strict equality");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders"); //this is the result when we enter 1 because of strict equality */

//LECTURE: Logical Operators
if (population < 50000000 && language === "English" && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :('`);
}

/*LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'*/
//const Language = "chinese" || "mandarin";
const Language = "persian";
switch (Language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

/* LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original*/

population > 33000000
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
console.log(`${country}'s population is ${population > 33000000 ? "above" : "below"} average`);
