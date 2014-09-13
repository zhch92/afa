define(['jquery'], function($) {

	function Roll_img(obj) {
		/*
		 ***selector id
		 ***left_btn_class
		 ***right_btn_class
		 */
		console.log(obj);

		var can_click = true;
		var wrapper = $(obj.selector);
		var l_btn = wrapper.find(obj.left_btn_class);
		var r_btn = wrapper.find(obj.right_btn_class);
		var roll_list = wrapper.find('.roll-list');

		var wrapper_W = wrapper.width();

		console.log(wrapper_W);
		var img_length = wrapper.find('.roll-item').length;

		roll_list.find('.roll-item').width(wrapper_W);
		roll_list.width(img_length * wrapper_W);

		l_btn.click(function(event) {
			if (!can_click) {
				return false;
			}
			event.preventDefault();
			var list_left = roll_list.css('left'),
				n_left = parseFloat(list_left) - 960 + "px";
			if (parseFloat(list_left) === (-960 * (img_length - 1))) {
				return false;
			}
			roll_list.animate({
				left: n_left
			}, 500);

			can_click = false;
			setTimeout(function() {
				can_click = true;
			}, 500);

		});
		r_btn.click(function(event) {
			if (!can_click) {
				return false;
			}

			event.preventDefault();
			var list_left = roll_list.css('left'),
				n_left = parseFloat(list_left) + 960 + "px";
			if (parseFloat(list_left) === 0) {
				return false;
			}

			roll_list.animate({
				left: n_left
			}, 500);
			can_click = false;
			setTimeout(function() {
				can_click = true;
			}, 500);
		});


	}


	return Roll_img;


});