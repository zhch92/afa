requirejs.config({
	baseUrl: '../js/main',
	paths: {
		"jquery": "../libs/jquery"
	},
	skim: {

	}
});

requirejs(['jquery', 'roll', 'falseSelect', '../libs/jquery-ui.min', 'form', 'jquery_ui'], function($, roll) {

	// 执行选择日期模块
	$('#travel_out_time').datepicker();
	$('#travel_back_time').datepicker();
});