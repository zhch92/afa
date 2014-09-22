define(['jquery'], function($) {

	var myfade = $('[data-role="fade"]'),
		myfade_img_item = myfade.find('.img-item'),
		i = 0;

	var init = function() {
		myfade_img_item.not(myfade_img_item[i]).hide();
	};
	init();

	var changeImgTimer = setInterval(function() {
		var old_i = i;
		if (i < myfade_img_item.length - 1) {
			i++;
		} else {
			i = 0;
		}
		myfade_img_item.eq(i).fadeIn('slow');
		myfade_img_item.eq(old_i).fadeOut('slow');

		myfade.find('.control-view a').attr('class', '').eq(i).addClass('current');
	}, 10000);

});