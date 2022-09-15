//Exporting module
console.log('Exporting modules');

const shippingCard = 10;
const cart = [];

export const addToCart = function (product, quality) {
  cart.push({ product, quality });
  console.log(`${product} has ${quality}`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
