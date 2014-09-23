define(['jquery'], function($) {
	// 假的下拉选择框 赋值
	/*
	**data-select="true" 假的选择框
	**_goal="value" 结果值需要显示的地方 id
	**
	**
	*/
	var data_select = $('[data-select="true"]');

	data_select.change(function(event) {
		var _goal = $(this).attr('_goal'),
			value = $(this).val();

		value = $(this).find('[value=' + value + ']').html();

		$('#'+_goal).val(value);
	});

});