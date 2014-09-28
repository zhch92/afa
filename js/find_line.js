requirejs.config({
	baseUrl: '../js/main',
	paths: {
		"jquery": "../libs/jquery"
	},
	skim: {

	}
});

requirejs(['jquery','roll' ,'fade', 'falseSelect', '../libs/jquery-ui.min', 'form', 'jquery_ui' ], function($, roll) {


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


	// 执行选择日期模块
	$('#travel_out_time').datepicker();
	$('#travel_in_time').datepicker();

	// 顶部滚动图 设置
	var find_line_roll_1 = {
		selector: "#find_line_roll_1",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};

	roll(find_line_roll_1);
});