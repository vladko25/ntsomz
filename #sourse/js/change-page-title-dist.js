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
