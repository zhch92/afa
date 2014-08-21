define(
	function() {
		return {
			mothod1: function() {
				console.log("this is mothod one");
			},
			mothod2: function() {
				console.log('this is mothod two');
			}
		}
	}
);



define(['jquery'], function($) {

	$('body div').css('background', '#f34');

});