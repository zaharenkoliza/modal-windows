'use strict';

const btns = document.querySelectorAll('.show-modal-window');
console.log(btns);

const closeOrOpenWindow = function(){
   document.querySelector('.modal-window').classList.toggle('hidden');
   document.querySelector('.overlay').classList.toggle('hidden');
}

for (let i = 0; i < 3; i++){
   btns[i].addEventListener('click', closeOrOpenWindow)
   document.querySelector('.close-modal-window').addEventListener('click', closeOrOpenWindow)
   document.querySelector('.overlay').addEventListener('click', closeOrOpenWindow)
   console.log(btns[i]);
}

document.addEventListener('keydown', function(e){
   if (e.key === 'Escape'){
      closeOrOpenWindow();
   }
})