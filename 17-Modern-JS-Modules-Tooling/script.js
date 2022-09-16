//Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCard.js';
console.log('Importing modules');

// console.log(shippingCard);
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCard.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add,{
//       addToCart,
//       totalPrice as price,
//       totalQuantity,
//     } from './shoppingCard.js';
//     console.log(price);

import add, { cart } from './shoppingCard.js';
add('pizza', 2);
add('bread', 5);
add('pizza', 2);
add('pasta', 1);
console.log(cart);

//Top level await

console.log('Start to fetch');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
console.log(res);
const data = await res.json();
console.log(data);
console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

//No clean code
lastPost.then(last => console.log(last));

//Better way
const lastPost2 = await getLastPost();
console.log(lastPost2);
