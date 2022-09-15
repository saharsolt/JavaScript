//Exporting module
console.log('Exporting modules');

const shippingCard = 10;
export const cart = [];

export const addToCart = function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart!`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quality) {
  cart.push({ product, quality });
  console.log(`${quality} ${product} added to cart!`);
}

console.log(cart);
