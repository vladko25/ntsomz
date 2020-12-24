/*-----------------------*/
/*----resize element-----*/
/*-----------------------*/
let header  = document.querySelector('.header');
let globeEl  = document.querySelector('.globe-container');
let heightHeader = header.offsetHeight;

if (globeEl) {

	globeEl.style.transform = "scale(calc(" + heightHeader + " * 0.0035))";

window.addEventListener('resize', function(event) {
	heightHeader = header.offsetHeight;
	globeEl.style.transform = "scale(calc(" + heightHeader + " * 0.0035))";
});

}
