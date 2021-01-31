/*-----------------------*/
/*------MENU BURGER------*/
/*-----------------------*/

try {
	let burgerWrapper  = document.querySelector('.top-header__burger-wrapper');
	let burger  = document.querySelector('.top-header__burger');
	let listMenu = document.querySelector('.top-header__menu');
	let body = document.querySelector('body');

	burger.addEventListener('click', function(event) {
		burgerWrapper.classList.toggle('active');
		burger.classList.toggle('active');
		listMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
} catch {

}
