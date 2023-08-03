'use strict';

// массив с кнопками
const btns = document.querySelectorAll('.show-modal-window');

// метод, скрывающий или показывающий модальное окно
const closeOrOpenWindow = function(){
   document.querySelector('.modal-window').classList.toggle('hidden');
   document.querySelector('.overlay').classList.toggle('hidden');
}

// цикл, проходящий по кнопкам из массива
for (let i = 0; i < 3; i++){
   // открывает модальное окно
   btns[i].addEventListener('click', closeOrOpenWindow)
   // закрывает модальное окно
   document.querySelector('.close-modal-window').addEventListener('click', closeOrOpenWindow)
   document.querySelector('.overlay').addEventListener('click', closeOrOpenWindow)
}

// при нажатии на Escape модальное окно закрывается
document.addEventListener('keydown', function(e){
   if (e.key === 'Escape'){
      closeOrOpenWindow();
   }
})