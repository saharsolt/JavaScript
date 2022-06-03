'use strict';

const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentPlayer0El = document.getElementById('current--0');
const currentPlayer1El = document.getElementById('current--1');

//starting conditions
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//Rolling dice functionality
btnRollDice.addEventListener('click', function () {
  //Generatting a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    currentPlayer0El.textContent = currentScore; //change later
  } else {
    //switch to next player
  }
});
