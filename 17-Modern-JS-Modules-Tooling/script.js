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
