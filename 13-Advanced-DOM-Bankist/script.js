'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////
//Selecting elements

console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message'); //in oreder to show the element on DOM

//message.textContent ='We used cookies for improved functionality and analytics';
message.innerHTML =
  'We used cookied for improved functionality and analytics. <button class ="btn btn--close--cookie"> Got it! </button>';
//header.prepend(message); //to put the element in header element
header.append(message);
//header.append(message.cloneNode(true)); //copy the element and all of its children

//header.before(message);
//header.after(message);

//Delete elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });
