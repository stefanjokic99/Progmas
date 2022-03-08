/*###ELEMENTS###*/
let btnRed = document.querySelector('.sign-red');
let btnBlue = document.querySelector('.sign-blue');
let btnClose = document.querySelector('.close-modal');
let btnConfirm = document.querySelector('.confirm');
let btnExit = document.querySelector('.exit-modal');
let btnCloseMessage = document.querySelector('.exit-message');

let mainModal = document.querySelector('.hidden-first');
let secondModal = document.querySelector('.hidden-second');

function showFirstModal() {
    mainModal.classList.remove('hidden-first');
}
function showSecondModal() {
    mainModal.classList.add('hidden-first');
    secondModal.classList.remove('hidden-second');
}
function hideFirstModal() {
    mainModal.classList.add('hidden-first');
}
function hideSecondModal() {
    secondModal.classList.add('hidden-second');
}
window.onclick = function(event) {
    if(event.target === mainModal) {
        hideFirstModal();
    } else if(event.target === secondModal) {
        hideSecondModal();
    }
}
window.onkeydown = function(event) {
    if(event.keyCode == 27) {
        hideFirstModal();
        hideSecondModal();
    }
}

btnRed.addEventListener('click', showFirstModal);
btnBlue.addEventListener('click', showFirstModal);
btnConfirm.addEventListener('click', showSecondModal);
btnClose.addEventListener('click', hideFirstModal);
btnExit.addEventListener('click', hideFirstModal);
btnCloseMessage.addEventListener('click', hideSecondModal);