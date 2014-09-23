requirejs.config({
	baseUrl: '../js/main',
	paths: {
		"jquery": "../libs/jquery"
	},
	skim: {

	}
});

requirejs(['jquery', 'fade', 'falseSelect', '../libs/jquery-ui.min'], function($) {


	var open_gaoji = $('#open_gaoji');
	open_gaoji.click(function(event) {
		var open = $('.high-grade-content').attr('data-open');
		if (open == "true") {
			$('.high-grade-content').slideUp('slow');
			$(this).attr('class', 'icon icon-open open-gaoji');
			$('.high-grade-content').attr('data-open', 'false');
		} else {
			$('.high-grade-content').slideDown('slow');
			$(this).attr('class', 'icon icon-close open-gaoji');
			$('.high-grade-content').attr('data-open', 'true');
		}
	});

	$('#travel_out_time').datepicker();
	$('#travel_in_time').datepicker();
});