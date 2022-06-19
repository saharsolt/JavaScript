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
