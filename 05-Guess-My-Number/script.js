'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏆 Correct Number!';
//console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);

  //document.querySelector('.message').textContent = '🏆 Correct Number!';

  //const guess = document.querySelector('.guess').value;
  //console.log(guess, typeof guess);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
