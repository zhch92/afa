define(['jquery'], function($) {

	function do_fade(fade) {


		var myfade_img_item = fade.find('.img-item'),
			control_view = fade.find('.control-view a'),
			i = 0,
			new_i = null;

		var init = function() {
			myfade_img_item.not(myfade_img_item[i]).css('opacity', '0');
		};
		init();

		var changeImg = function() {
			myfade_img_item.eq(i).stop(true, true).animate({
				opacity: '0'
			}, 2000);
			myfade_img_item.eq(new_i).stop(true, true).animate({
				opacity: '1'
			}, 2000);
			control_view.eq(i).attr('class', '');
			control_view.eq(new_i).attr('class', 'current');
			i = new_i;
		}

		var changeImgTimer = setInterval(function() {
			if (i < myfade_img_item.length - 1) {
				new_i = i + 1;
			} else {
				new_i = 0;
			}
			changeImg();
		}, 10000);

		control_view.click(function(event) {
			new_i = $(this).index();
			changeImg();

			return false;
		});

	}


	var myfade = $('[data-role="fade"]');

	for (var i = 0, len = myfade.length; i < len; i++) {
		do_fade(myfade.eq(i));
	}



});