'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  //console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  //console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  //console.log('A key is pressed');
  //console.log(e);
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if (!modal.classList.contains('hidden')) {
    closeModel();
  }
});
