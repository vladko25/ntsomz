
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