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

	// 顶部滚动图 设置
	var fs_roll_01 = {
		selector: "#fs_roll_01",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var fs_roll_02 = {
		selector: "#fs_roll_02",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var fs_roll_03 = {
		selector: "#fs_roll_03",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};


	roll(fs_roll_01);
	roll(fs_roll_02);
	roll(fs_roll_03);
});