requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		
	},
	skim: {

	}
});


requirejs(['jquery'], function($) {
	var indexTimer = null;

	indexTimer = setTimeout(function() {
		$('#first-screen').animate({
			opacity: '0',
			display: 'none',
			zIndex: '20'
		}, 1000);
	}, 3000);
});