/*Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀*/
'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = game.players[0];
// const players2 = game.players[1];

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2);
// console.log(fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
// const{odds : {team1,x:draw,team2}}=game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored!`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('team1 is likely to win!');
team2 < team1 && console.log('team2 is likely to win!');

/*
Challenge#2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/

//1.
//for (const [i,player] of game.scored.entries())
for (const player of game.scored.entries()) {
  console.log(`Goal ${player[0] + 1}: ${player[1]}`);
}

//2.
let sum = 0;
let counter = 0;
//for(const odd of object.values(game.oddds))
for (const [key, value] of Object.entries(game.odds)) {
  sum += value;
  counter++;
}
console.log(sum / counter);

//3.
//const{team1:game.team1,x:draw, team2:}=game.odds;
for (const [key, value] of Object.entries(game.odds)) {
  const str = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${str}: ${value}`);
}

//4.
let scorers = {};
const entry = Object.values(game.scored);
for (const elPlayer of game.scored.values()) {
  let count = 0;
  for (let i = 0; i < entry.length; i++) if (entry[i] === elPlayer) count++;

  scorers = { [`${elPlayer}`]: count, ...scorers };
  console.log(scorers);
}
console.log(scorers);

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/* Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:⚽GOAL
GOOD LUCK 😀*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `"An event happened, on average, every ${90 / gameEvents.size} minutes"`
);
const time1 = [...gameEvents.keys()].pop();
console.log(time1); //92
console.log(
  `"An event happened, on average, every ${time1 / gameEvents.size} minutes"`
); //9.2

//4.
for (const [min, event] of gameEvents.entries()) {
  const half = min < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${min}: ${event}`);
}

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  //console.log(document.querySelector('textarea').value);
  const name = document.querySelector('textarea').value.split('\n');
  //console.log(name);
  let nameArray = [];
  for (const variable of name.values()) {
    const variableLower = variable.toLowerCase();
    const index = variable.indexOf('_') + 1;
    //console.log(index);
    const nameChanged =
      variableLower.slice(0, index) +
      variableLower[index].toUpperCase() +
      variableLower.slice(index + 1);
    //console.log(nameChanged);
    const camelcaseName = nameChanged.replace('_', '');
    //console.log(camelcaseName);
    nameArray.push(camelcaseName);
  }
  //console.log(nameArray);
  let addedCheckedName = [];
  for (let i = 0; i < nameArray.length; i++) {
    const newItem = nameArray[i] + ' ' + '✅'.repeat(i + 1);
    //console.log(newItem);
    addedCheckedName.push(newItem);
  }
  //console.log(addedCheckedName);
  const finalResult = addedCheckedName.join('\n');
  console.log(finalResult);
});

//How teacher did the challenge
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

//Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//🔴 Delayed Departure from FAO to TXL (11h25)
//             Arrival from BRU to FAO (11h45)
//🔴 Delayed Arrival from HEL to FAO (12h05)
//           Departure from FAO to LIS (12h30)

//How I did the practice
const dashlessFlights = flights.replaceAll('_', ' ');
const splittedFlights = dashlessFlights.split('+');
for (let i = 0; i < splittedFlights.length; i++) {
  const splittedName = splittedFlights[i].split(';');
  //console.log(splittedName);
  const [m, n, l, p] = [...splittedName];
  const fromWhere = [n.toUpperCase().slice(0, 3)];
  const toWhere = [l.toUpperCase().slice(0, 3)];
  const timeTable = [p.replace(':', 'h')];
  let strFinal = '';
  const str = `${m} from ${fromWhere} to ${toWhere} (${timeTable})`.trim();
  if (str.startsWith('Delayed')) {
    strFinal = `🔴 ${str}`;
    //console.log(strFinal);
  } else {
    strFinal = `${str}`;
  }
  console.log(strFinal.padStart(44, ' '));
}

//How the teacher did
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flightt of flights.split('+')) {
  //console.log(flightt);
  const [type, from, to, time] = [...flightt.split(';')];
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
