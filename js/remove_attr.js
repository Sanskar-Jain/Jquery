$('#agree').change(function() {
	var checkbox = $('input[type="checkbox"]').is(":checked");
	if(checkbox==true)
		$('.continue').removeAttr('disabled');
	else
		$('.continue').attr('disabled','disabled');
});


