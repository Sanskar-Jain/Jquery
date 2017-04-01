$(document).ready(function() {
	
	setInterval(function() {
	var time=$.now();
	$('#divid').text(Math.floor(time/1000));
	},1);
});