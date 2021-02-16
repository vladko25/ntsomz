//@prepros-append burger-menu.js
//@prepros-append change-page-title.js
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