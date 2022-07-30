'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-07-28T17:01:17.194Z',
    '2022-07-29T11:00:17.929Z',
    '2022-07-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2022-07-25T18:49:59.371Z',
    '2022-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Sahar Soltanmohammadi',
  movements: [5070, -140, 790, 310, -2000, -800, 300],
  interestRate: 1.5,
  pin: 3333,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-04-24T14:43:26.374Z',
    '2022-07-29T18:49:59.371Z',
    '2022-07-30T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'fa-IR',
};
const accounts = [account1, account2, account3];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const day = `${date.getDate()}`.padStart(2, 0);

  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//Experimenting API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   min: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };
// const locale = navigator.language;
// console.log(locale); //en-US
// // labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);//As of 7/30/2022
// // labelDate.textContent = new Intl.DateTimeFormat('en-GB', options).format(now); //As of 30/07/2022
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
// //labelDate.textContent = new Intl.DateTimeFormat('fa-IR', options).format(now); //As of ۱۴۰۱/۵/۸

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale); //en-US
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // labelDate.textContent = now;
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0); //true

//Base 10 - 0 to 9 => 0.1 = 1/10 or 3/10 = 0.3333333
//Binary base 2 - 0 1
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//Conversion
console.log(Number('23')); //23
console.log(+'23'); //23

//Parsing
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('e23')); //NaN
console.log(Number.parseInt('30.5rem')); //30
console.log(Number.parseFloat('30.5rem')); //30.5

console.log(Number.parseFloat('  30.5rem   ')); //30.5

//Check if a value is not a number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20x')); //true
console.log(Number.isNaN(20 / 0)); //false

//Checking if a value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite(+'20x')); //false
console.log(Number.isNaN(20 / 0)); //false

//
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.0)); //true
console.log(Number.isInteger(20 / 0)); //false

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(5, 18, 23, 10, 6)); //23
console.log(Math.max(5, 18, '23', 10, 6)); //23
console.log(Math.max(5, 18, '23px', 10, 6)); //NaN

console.log(Math.min(2, 18, 23, 10, 6)); //2
console.log(Math.PI * Number.parseFloat('9px') ** 2); //254.46900494077323
console.log(Math.trunc(Math.random() * 6) + 1); //[1,6]

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
//0....1 => 0....(max-min) => min....(max-min+min) => min...max
console.log(randomInt(10, 20));

//Rounding Integers
console.log(Math.trunc(23.5)); //23

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.9')); //23

console.log(Math.trunc(23.3)); //23
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

//Rounding decimals
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35

//Remainder operator
console.log(5 % 2); //1
console.log(5 / 2); //2.5

console.log(8 % 3); //2
console.log(8 / 3); //2.6

console.log(6 % 2); //0
console.log(6 / 2); //3

console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(23)); //false
console.log(isEven(514)); //true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//Numeric separators 287,456,231,000
const diameter = 287_456_231_000;
console.log(diameter);

const priceCent = 203_90;
console.log(priceCent);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
//const PI = 3._14_15;//It is not valid
console.log(PI); //3.1415

console.log(Number('23456')); //23456
console.log(Number('234_56')); //NaN

console.log(parseInt('234_56')); //234

//BIGINT
console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4); //unsafe numbers

console.log(7834976527564298409385948287n);
console.log(7834976527564298409385948287); //7.834976527564298e+27
console.log(BigInt(7834976)); //7834976n
console.log(BigInt(7834976527564298409385948287)); //7834976527564297923758915584n

//Operations on BigInt
console.log(10000n + 20000n); //30000n
console.log(7834976527564298409385948287n * 1000000n); //7834976527564298409385948287000000n

const huge = 736876421n;
const num = 23;
//console.log(huge * num);//Cannot mix
console.log(huge * BigInt(num)); //16948157683n
//console.log(Math.sqrt(huge));//Cannot convert
//Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(20n == 20); //true
console.log(20n == '20'); //true

console.log(huge + ' is really big!');

//Devisions
console.log(10n / 3n); //3n
console.log(10 / 3); //3.33
console.log(12n / 3n); //4n

//Create a date
const now1 = new Date();
console.log(now1);

console.log(new Date('Fri Jul 29 2022'));
console.log(new Date('December 24,2015'));
console.log(new Date(account2.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(2037, 10, 31)); //Dec 01 //month is zero-based and Nov is 30 days
console.log(new Date(0)); //1970 first Jan
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //4th Jan

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.getTime()); //2142249780000
console.log(new Date(2142249780000)); //Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Standard Time)
console.log(future.toISOString()); //2037-11-19T13:23:00.000Z

console.log(Date.now());

future.setFullYear(2024);
console.log(future);

//Operations with dates
//const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future)); //1732022580000 mS
console.log(+future);

// const calcDaysPassed = (date1, date2) => date2 - date1;
// const day1 = calcDaysPassed(new Date(2022, 7, 19), new Date(2022, 7, 29));
// console.log(day1);//864000000mS
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const day1 = calcDaysPassed(new Date(2022, 7, 19), new Date(2022, 7, 29));
console.log(day1); //10 days

//International numbers
const num1 = 8743767346.23;
const options = {
  style: 'currency', //could be percent,unit,currency
  unit: 'mile-per-hour',
  currency: 'EUR',
  useGrouping: false,
};

console.log('US', new Intl.NumberFormat('en-US', options).format(num1)); //8,743,767,346.23
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num1)); // 8.743.767.346,23
console.log('Iran', new Intl.NumberFormat('fa-IR', options).format(num1)); //Iran ۸٬۷۴۳٬۷۶۷٬۳۴۶٫۲۳
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num1)
); //en-US 8,743,767,346.23
