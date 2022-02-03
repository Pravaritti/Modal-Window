'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log('a key was pressed.');
  console.log(e); //event happened when key is pressed
  console.log(e.key);

  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) closeModal();
  //   }
  // });

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// const modal = document.querySelector('.modal');
// console.log(modal);
// // const modal2 = document.querySelector('.modal hidden');
// // console.log(modal2);
// const overlay = document.querySelector('.overlay');
// const btnsCloseModal = document.querySelectorAll('.close-modal');

// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   //console.log(btnsOpenModal[i].textContent);
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
//}
