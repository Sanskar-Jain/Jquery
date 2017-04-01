$(document).ready(function() {
	var evtime = Math.floor((Date.parse('01 February 2016'))/1000);
	setInterval(function () {
		var time = $.now();
		time = Math.floor(time/1000);
		totsec = evtime - time;
		totdays = Math.floor(totsec/(60*60*24));
		totsec = totsec%(60*60*24);
		tothours = Math.floor(totsec/(60*60));
		totsec = totsec%(60*60);
		totmins = Math.floor(totsec/60);
		totsec = totsec%60;
		$('div').text(totdays + ' Days ' + tothours + ' Hours ' + totmins + ' Minutes ' + totsec + ' Seconds.');
	} , 1000);
});