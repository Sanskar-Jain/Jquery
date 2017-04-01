$(document).ready(function() {
	$('.hover').mousemove(function(e) {
		var text=$(this).attr('hovertext');
		$('#hoverdiv').html(text);
		$('#hoverdiv').css('top',e.clientY + 10).css('left',e.clientX + 10);
		$('#hoverdiv').show();
	});
	
	$('.hover').mouseout(function() {
		$('#hoverdiv').hide();
	});
});