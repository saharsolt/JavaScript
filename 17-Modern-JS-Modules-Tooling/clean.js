'strict mode'

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = (limits,user) => limits?.[user] ?? 0;

const addExpense = function (state, limit, value, description, user = 'jonas') {
  // if (!user) user = 'jonas';

  //Pure function :D
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits ?. [user] ?? 0;

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  return value <= getLimit(limits,cleanUser) ? [...state,{ value: -value, description, user: cleanUser }] : state ;

  // if (value <= getLimit(cleanUser)) {
  //   return [...state,{ value: -value, description, user: cleanUser }];
    // budget.push({ value: -value, description, user: cleanUser });
    // budget.push({ value: -value, description: description, user: user });
};

const newBudget1 = addExpense(budget,spendingLimits,10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1,spendingLimits,100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2,spendingLimits,200, 'Stuff', 'Jay');

// const checkExpenses2 = function (state,limits) {
//   return state.map(entry => { return entry.value < -getLimit(limits,entry.user) ? {...entry,flag = 'limit'} : entry});
//   // const limit = spendingLimits[user] ? spendingLimits[entry.user] : 0;
//   // let lim;
//   // if (spendingLimits[el.user]) {
//   //   lim = spendingLimits[el.user];
//   // } else {
//   //   lim = 0;
//   // }

//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits,entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state,limits) => state.map(entry => entry.value < -getLimit(limits,entry.user) ? {...entry,flag = 'limit'} : entry);

const finalBudget = checkExpenses(newBudget3,spendingLimits);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of newBudget3) {
    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   if (entry.value <= -bigLimit) {
  //     output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  //   }
  // }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(100);
