requirejs.config({
	baseUrl: './js/main',
	paths: {
		jquery: "../libs/jquery"
	},
	skim: {

	}
});

requirejs(['jquery'], function($) {

	//welcome change page
	var indexTimer = null;

	var nav_img_arr = ['./img/b01.jpg', './img/b02.jpg', './img/b03.jpg', './img/b04.jpg', './img/b05.jpg', './img/b06.jpg', './img/b07.jpg']

	indexTimer = setTimeout(function() {
		$('#first-screen').animate({
			opacity: '0',
			display: 'none',
			zIndex: '20'
		}, 1000);
	}, 3000);


	// 首页图片导航
	var img_list = $('#img_menu_wrapper'),
		img_item = $('.img-item'),
		active_item = null,
		mouse_time = null;

	var init_img = function(arr) {
		var i = 0,
			length = img_item.length;
		for (i; i < length; i++) {
			img_item.eq(i).find('img').attr('src', arr[i]);
		}
	}

	//导航图 初始化
	init_img(nav_img_arr);

	var item_mouse_in = function() {
		var i_hover_item = $(this);
		mouse_time = setTimeout(function() {
			if (active_item == null) {
				console.log(active_item);
				img_item.not(i_hover_item).stop(true, true).animate({
					width: '80px',
					zIndex: '5'
				}, 500);
			} else {
				console.log(active_item);

				img_item.eq(active_item).find('.cover').show();
				img_item.eq(active_item).find('.text').hide();
				img_item.stop(true, true).eq(active_item).animate({
					width: '80px',
					zIndex: '5'
				}, 500);
			}
			i_hover_item.find('.cover').hide();
			i_hover_item.stop(true, true).animate({
				width: '480px',
				zIndex: '10'
			}, 500).find('.text').show("slow");

			active_item = img_item.index(i_hover_item);

			console.log(active_item + "in****");
		}, 100);
	}
	var item_mouse_out = function() {
		console.log(active_item + "out**********");
		clearTimeout(mouse_time);
		return null;
	};
	img_list.hover(function() {}, function() {
		clearTimeout(mouse_time);
		img_item.stop(true, true).animate({
			"width": "137px"
		}, 500);
		img_item.find('.cover').show();
		img_item.find('.text').hide();
		active_item = null;
	});
	img_item.hover(item_mouse_in, item_mouse_out);
});