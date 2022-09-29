const burger = document.getElementsByClassName('burger__btn')[0];
const left_nav = document.getElementsByClassName('left__nav')[0];
burger.onclick = function () {
    left_nav.classList.toggle('active');
};