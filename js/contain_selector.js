$(document).ready(function() {
	$('#Text').keyup(function() {
		var name = $(this).val();
		
		$('#names li').removeClass('highlight');
		
		if(jQuery.trim(name)!='')
		$("#names li:contains(" + name + ")").addClass('highlight');
	});
});


