requirejs.config({
	baseUrl: '../js/main',
	paths: {
		"jquery": "../libs/jquery"
	},
	skim: {

	}
});

requirejs(['jquery', 'roll'], function($, roll) {

	/*
	 ***绑定图片滚动事件
	 ***
	 ***
	 */
	var roll_obj_1 = {
		selector: "#afa_m_roll_1",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var roll_obj_2 = {
		selector: "#afa_m_roll_2",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var roll_obj_3 = {
		selector: "#afa_m_roll_3",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var roll_obj_4 = {
		selector: "#afa_m_roll_4",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var roll_obj_5 = {
		selector: "#afa_m_roll_5",
		left_btn_class: ".roll-btn-left",
		right_btn_class: ".roll-btn-right"
	};
	var Roll = roll;

	Roll(roll_obj_1);
	Roll(roll_obj_2);
	Roll(roll_obj_3);
	Roll(roll_obj_4);
	Roll(roll_obj_5);

});