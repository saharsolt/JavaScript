'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  //destructuring obj
  orderDelivery: function ({
    starterMenuIndex = 1,
    mainMenuIndex = 0,
    address,
    time = '10:00',
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterMenuIndex]} with ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredienta) {
    console.log(mainIngredient);
    console.log(otherIngredienta);
  },
};

restaurant.orderDelivery({
  time: '20:30',
  address: 'Tapiola',
  mainMenuIndex: 2,
  starterMenuIndex: 2,
});

restaurant.orderDelivery({
  address: 'Tapiola',
  starterMenuIndex: 2,
});

//Destructuring Arrays
const arr = [4, 5, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
let [first, , second] = restaurant.categories;
console.log(first, second);

// //swap:first way
// let temp = second;
// second = first;
// first = temp;

console.log(first, second);
//second way
[first, second] = [second, first];
console.log(first, second);

//receive 2 return values from a function
//restaurant.order(2, 0);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested destructuring
const nested = [3, 5, [4, 7]];
//const [i, , j] = nested;
//console.log(i, j); //3, [4,7]
const [i, , [j, k]] = nested;
console.log(i, j, k); //3 4 7

//default values
// const [p, q, l] = [9, 10];
// console.log(p, q, l); //9 10 undefined

const [p = 1, q = 1, l = 1] = [9];
console.log(p, q, l); //9 1 1

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
//const { menu, starterMenu: starters = [] } = restaurant; //menu is undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a1 = 10;
let b1 = 999;
const obj = { a1: 22, b1: 79, c1: 100 };
({ a1, b1 } = obj);
console.log(a1, b1); //22 79

//nested objects
// const { fri } = openingHours;
const {
  fri: { open: o, close: c2 },
} = openingHours;
//console.log(fri); //{open: 11, close: 23}
//console.log(open, close); // 11 23
console.log(o, c2);

//Spread operators
const arry = [9, 10, 11];
//const badArray = [1, 2, arry[0], arry[1], arry[2]];
const badArray = [1, 2, arry];
console.log(badArray);

const newArray = [1, 2, ...arry];
console.log(newArray);
console.log(...newArray);
console.log(1, 2, 9, 10, 11);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Arrays
const newMenuCopy = [...restaurant.mainMenu];

//Join Arrays
const newMenuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenuJoin);

//Iterables: Arrays, Strings, Maps, Sets
const str = 'Sahar';
const newName = [...str, '.S'];
console.log(newName); //['S', 'a', 'h', 'a', 'r', '.S']
console.log(...str); //S a h a r
console.log('s', 'a', 'h');
//console.log(`${...str}`);//Error: We cannot use it

const ingredients = [
  prompt("Let's make delicious pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
  founderIn: 1989,
  ...restaurant,
  founder: 'Soltanmohammadi',
};
console.log(newRestaurant);

const RestaurantCopy = { ...restaurant };
RestaurantCopy.name = 'Restorantie Mala';
console.log(RestaurantCopy.name);
console.log(restaurant.name);

//1) Destructuring

//Spread operators is in the right side of =
const array1 = [1, 2, ...[3, 4, 5]];

//Rest operator is in the left side of =
const [ab, bc, ...others] = [1, 2, 3, 4, 5];
console.log(ab, bc, others);
//Arrays
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  console.log(numbers); //[2, 3]
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    console.log(sum);
  }
};

add(2, 3);
add(4, 1, 6, 9);
add(1, 3, 5, 7, 9, 11, 13, 17, 19);

const x1 = [2, 4, 6, 8];
console.log(...x1);
add(...x1);

restaurant.orderPizza(
  'mushrooms',
  'olive',
  'onion',
  'spinach',
  'loaf of bread'
);
restaurant.orderPizza('mushrooms');

//Use any data types, return any data types, short circuiting

console.log('-----OR-----');
console.log(3 || 'Sahar'); //3
console.log('' || 'Sahar'); //Sahar
console.log(true || 'Sahar'); //true
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || null || 23);

//restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 40;
console.log(guest2);

console.log('-----AND-----');
console.log(0 && 'Sahar');
console.log(7 && 'Sahar');
console.log(7 && 23 && null && 'Sahar');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Nullish
//?? not nullish value. Nullish values are null and undefined.(not 0 and '')
restaurant.numGuests = 0;

const guests = restaurant.numGuests ?? 40;
console.log(guests); //0

const rest1 = {
  name: 'Rax',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'HotBurger',
  owner: 'Masoud Shokrnezhad',
};
//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && 'Anonymous'; //Anonymous
// rest1.owner = rest1.owner && 'Anonymous'; //undefined

rest2.owner &&= 'Anonymous';
rest1.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2);

//Looping Arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

for (const item of menu1) {
  console.log(item);
}

//for (const item of menu1.entries()) {
for (const [i, el] of menu1.entries()) {
  //   console.log(item);
  //   console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i + 1}: ${el}`);
}
