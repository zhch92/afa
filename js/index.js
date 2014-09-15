requirejs.config({
	baseUrl: './js/main',
	paths: {
		jquery:"../libs/jquery"
	},
	skim: {

	}
});


requirejs(['jquery'],function($) {

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
		active_item = null;

	var init_img = function(arr) {
		var i = 0,
			length = img_item.length;
		for (i; i < length; i++) {
			img_item.eq(i).find('img').attr('src', arr[i]);
		}
	}


	var show_this_item = function(item) {

		var this_item = item;

		console.log(this_item.width());
		console.log(this_item);

		this_item.find('.cover').hide();

		this_item.animate({
			width: '480px'
		}, 500, function() {

		});
	};

	//导航图 初始化
	init_img(nav_img_arr);

	img_item.click(function(event) {

		var i_click_item = $(this);

		var b_change = function() {
			i_click_item.find('b').animate({
				fontSize: '50px'
			});
		}

		console.log(i_click_item);

		console.log(event);

		if (i_click_item.width() == 480) {
			return null;
		}

		img_item.find('.cover').show();

		show_this_item(i_click_item);
		b_change();

		if (active_item == null) {
			img_item.not(i_click_item).animate({
				width: '80px'
			}, 500);
		} else {
			img_item.eq(active_item).animate({
				'width': '80px'
			}, 500);

			img_item.eq(active_item).find('b').animate({
				fontSize: '24px'
			}, 500);
		}

		active_item = img_item.index(i_click_item);
	});


});