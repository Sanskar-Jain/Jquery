$(':text').focusin(function() {
$(this).css('background-color','yellow');
});

$(':text').focusout(function() {
$(this).css('background-color','white');
});