'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Sahar Soltan Mohammadi',
  movements: [200, -200, 340, 700, 50],
  interestRate: 1.3,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayedMovements = function (movements) {
  containerMovements.innerHTML = ''; //It deletes the previous rows
  //.textContent = 0;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

displayedMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const input = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const output = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${input}€`;
  labelSumOut.textContent = `${Math.abs(output)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter((ints, i, arr) => {
      console.log(arr);
      return ints >= 1;
    })
    .reduce((acc, ints) => acc + ints, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1);
//console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const createUsername = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };
// console.log(createUsername('Steven Thomas Williams')); //stw
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts); //stw

//Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting: put parameter e in function
  e.preventDefault();
  //console.log('login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('login');
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    //Display movements
    displayedMovements(currentAccount.movements);
    //Display balance
    calcDisplayBalance(currentAccount.movements);
    //Display summary
    calcDisplaySummary(currentAccount);
  }
});
/////////////////////////////////////////////////
//Slice method
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //['c', 'd', 'e'];
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(1, -1)); // ['b', 'c', 'd']
console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
console.log([...arr]);

//Splice method
// console.log(arr.splice(2)); //['c', 'd', 'e']
// console.log(arr); //['a', 'b']
arr.splice(-1);
console.log(arr); //['a', 'b', 'c', 'd']
arr.splice(1, 2);
console.log(arr); //['a', 'd']

//Reverse method
//arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); //['f', 'g', 'h', 'i', 'j']

//Concat method
const letters = arr.concat(arr2);
console.log(letters); //['a', 'd', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]);

//Join method
console.log(letters.join(' - ')); //a - d - f - g - h - i - j

//at method
const ar = [23, 46, 72];
console.log(ar[0]); //23
console.log(ar.at(0)); //23
console.log(ar[-1]); //undefined

//Getting last array element
console.log(ar.at(-1)); //72
console.log(ar[ar.length - 1]); //72
console.log(ar.slice(-1)[0]); //72

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: Yow withdrew ${Math.abs(movement)}`);
  }
}

console.log('------ forEach ------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: Yow withdrew ${Math.abs(mov)}`);
  }
});

//0: function(200)
//1: function(450)
//2: function(-400)

//forEach on Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//forEach on Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'USD', 'EUR']);
console.log(currenciesUnique);
//currenciesUnique.forEach(function (value, key, Set)
//Set does not have keys
currenciesUnique.forEach(function (value, _, Set) {
  console.log(`${value}: ${value}`);
});

//bankist.netlify.app(using account name and pin)

//map method
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const movementUsd = movements.map(function (mov) {
  return mov * euroToUsd;
  //return 23;
});
//const movementUsd = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementUsd); // [23, 23, 23, 23, 23, 23, 23, 23]

//The same result as map with some differences
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * euroToUsd);
}
console.log(movementsUsdFor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);

//filter method
const deposites = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposites); //[200, 450, 3000, 70, 1300]

const depositesFor = [];
for (const mov of movements) if (mov > 0) depositesFor.push(mov);
console.log(depositesFor); //[200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
const withdrawals = movements.filter(mov => mov < 0); //[-400, -650, -130]
console.log(withdrawals);

//reduce method
//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); //3000

//PIPELINE
// const totalDepositeUsd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

const totalDepositeUsd = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr); //[-400, -650, -130]
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositeUsd);

//find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); //-400

const account = accounts.find(acc => acc.owner === 'Sahar Soltan Mohammadi');
console.log(account); //{owner: 'Sahar Soltan Mohammadi', movements: Array(5), interestRate: 1.3, pin: 5555, username: 'ssm'}
