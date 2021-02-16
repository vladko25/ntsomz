new Swiper('.top-posts__swiper', {
	loop: true,
	slidesPerView: 1,
	autoplay: true,
	speed: 500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
});
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

try {
	let titlePage = document.querySelector(".title-page");
	if (titlePage) {
		titlePage.textContent = document.title;
	}

	let str = document.location.href;
	let regexp = /\/([0-9-a-z-.]+)/g ;
	let matchAll = str.matchAll(regexp);
	matchAll = Array.from(matchAll); // теперь массив
	console.log(matchAll);
	for(i=0; matchAll.length > i;i++){
		console.log(matchAll[i][1]);
	}
} catch {

}
