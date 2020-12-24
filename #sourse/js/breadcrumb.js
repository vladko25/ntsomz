/*-----------------------*/
/*-------breadcrumb-------*/
/*-----------------------*/
function create_breadcrumb() {
	breadcrumb.main = [
		{
			"text": 'Главная',
			"link": '/',
			'class': 'breadcrumb-home'
		}
	],
	breadcrumb.element = 'ul',
	breadcrumb.build();
}
