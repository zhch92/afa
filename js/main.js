requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		main: '../main',
		btn: '../main/btn'
	},
	skim: {

	}
});

requirejs(['jquery', 'main'], function($, main) {

	alert('nimei meimei');

	console.log('today is beauty day !');

	//mothod1();

	//mothod2();

	console.log(main);

});



requirejs(['btn'], function(btn) {

	console.log('nimei');

	btn.mothod1();
});


requirejs(['../main/alert'], function(alert) {

	alert.meg_one();


	alert.meg_two();

});