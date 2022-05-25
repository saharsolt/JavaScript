/* Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

/*
1. Understand the problem
---What is the X days? answer: index+1
---Array transformed to a string, seprated by ...
2. break it up into sub-problems
---transform array to string
---transform array into string with ºC
---have days(index+1) 
---Add ...
*/
const printForecast = function (arr) {
  let forecast = '...';
  const meature = {
    type: 'temp',
    unit: 'ºC',
    value: arr,
  };
  for (let i = 0; i < arr.length; i++) {
    forecast += `${meature.value[i]}${meature.unit} in ${i + 1} days...`;
    //console.log(forecast);
  }
  return forecast;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
