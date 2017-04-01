$(document).ready(function() {
	$('#text').scroll(function() {
		current_pos=$(this).scrollTop();
		scroll_height=$(this)[0].scrollHeight-$(this).innerHeight();
		if(current_pos==scroll_height)
			$('#box').removeAttr('disabled');
	});
});