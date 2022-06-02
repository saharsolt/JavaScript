'use strict';

const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//starting conditions
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');
