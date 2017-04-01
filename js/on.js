/*$('.duplicate').on({
	click: function() {
	$(this).after('<input type="button" value="Click Me" class="duplicate" />');
	}
});*/
$(document).on('click','.duplicate', function(event) {
$(this).after('<input class="duplicate" type="button" value="Click">');
});