const menuActive = document.querySelector('.header-menu'); 
const burger = document.querySelector('.burger'); 
const menuClose = document.querySelector('.menu-close');

let count = 1;

function chengFilter() {
    if (count % 2 == 0) {
        document.querySelector('.bord-shedow').style.filter = 'brightness(100%)';
    } else document.querySelector('.bord-shedow').style.filter = 'brightness(40%)';
    count++;
}

function toggleMenu() {
	menuActive.classList.toggle('hidden');
    chengFilter();
    
}

burger.addEventListener('click', toggleMenu); 
menuClose.addEventListener('click', toggleMenu); 