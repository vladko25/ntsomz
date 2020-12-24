/*-----------------------*/
/*------MENU BURGER------*/
/*-----------------------*/

let burgerWrapper  = document.querySelector('.header__burger-wrapper');
let burger  = document.querySelector('.header__burger');
let listMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');

burger.addEventListener('click', function(event) {
	burgerWrapper.classList.toggle('active');
	burger.classList.toggle('active');
	listMenu.classList.toggle('active');
	body.classList.toggle('lock');
});
