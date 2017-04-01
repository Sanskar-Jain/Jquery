$(document).ready(function() {
	$('input[type="text"]').focus(function() {
		minlength=$(this).attr('minlength');	
		length=$(this).val().length
		
		if(minlength>=0 && minlength>length)
			$(this).after(' <span> ' + minlength + ' characters required. </span>');
	}).keyup(function() {
		if($(this).val().length()>=minlength)
			$(this).next().remove();
		
	}).blur(function() {
		$(this).next().remove();
		
	});
	
});