/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

"use strict";
function describeCountry(country, population, capitalcity) {
  return `${country} has ${population} million people and its capital city is ${capitalcity}`;
}
const firstCountry = describeCountry("Iran", 80, "Tehran");
const secondCountry = describeCountry("Germany", 45, "Berlin");
const thirdCountry = describeCountry("Sweden", 5, "Stockholm");
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);

/*LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) */

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentageCountry1 = percentageOfWorld1(80);
const percentageCountry2 = percentageOfWorld1(50);
const percentageCountry3 = percentageOfWorld1(7);
console.log(percentageCountry1, percentageCountry2, percentageCountry3);
const percIran = percentageOfWorld2(80);
const percGermany = percentageOfWorld2(50);
const percFinland = percentageOfWorld2(7);
console.log(percIran, percGermany, percFinland);

/*LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percCountry1 = percentageOfWorld3(80);
console.log(percCountry1);

/* LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice*/

function describePopulation(country, population) {
  const percentagePopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentagePopulation} of the world.`;
}
console.log(describePopulation("Iran", 80));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Finland", 5));
