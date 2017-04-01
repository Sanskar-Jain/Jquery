$(document).ready(function() {
var email='Enter your email address...';
$('input[type="email"]').attr('value',email).focus(function() {
	if($(this).val()==email){
		$(this).attr('value','');
	}
}).blur(function() {
	if($(this).val()!=email){
		$(this).attr('value',email);
	}
});


});