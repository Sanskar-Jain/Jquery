$(document).ready(function() {
	$('#button').click(function () {
		var string = $('#string').val();
		$.get('C:\xampp\htdocs\test.php' , { input : string } , function (data){
			$('#feedback').text(data);
		});
	});
});