$(document).ready(function () {
    var placeholder = 'Enter Name Of The Label....';
    $('#ptbox').click(function () {
        var label = $('#label').val();
        $('#pre').append("<div style='padding : 10px ;' id=" + label + ">" + label + " : <input type='text' title=" + label + " ><img src='images/cross.jpg' alt='Del' class='cross' ><br></div>");
        $('#label').val("").attr('placeholder', placeholder);
    });
	
	$('div').on('click','.cross',function () {
		var a = $(this).parent().attr('id');
		alert(a);
		$(this).parent().remove();
	});

    $('#mtbox').click(function () {
        var lb = $('#label').val();
        $('#' + lb).remove();
        $('#label').val("").attr('placeholder', placeholder);
    });
    var count=1;
    $('#pcbox').click(function () {
        var a = count - 1;
        $('#l' + a).blur();
        $('#cboxd').append("<div id=" + 'd'  + count + "> Label for Checkbox " + count + " : <input style=' margin-bottom : 20px; ' type='text' id=" + 'l' + count + " /><br></div>");
        $('#l' + count).focus();
        count++;
    });
    $('#mcbox').click(function () {
        var a = count - 1;
        $('#d' + a).remove();
        count = a;
    }); 
	var fcbox=1;
    $('#Confirm').click(function () {
        var label = $('#clabel').val();
        $('#pre').append("<div style='padding : 10px ;' 
		id=" + 'fcbox' + fcbox+" style='padding : 10px;'>"+label+ ':   ');
        for (var i = 1; i < count; i++) {
            var checkval = $('#l' + i).val();
            console.log(checkval);
            $('#fcbox' + fcbox ).append('   <input type="checkbox">' + checkval);
        }
        $('#fcbox' + fcbox ).append("<img src='images/cross.jpg' alt='Del' class='cross' ><br></div>");
		
		for(var i=0;i<count;i++){
			$('#d' + count ).remove();
		}
		count=1;
		fcbox++;
    });
    var count1=1;
    $('#prbox').click(function () {
        var a = count1 - 1;
        $('#r' + a).blur();
        $('#cboxd2').append("<div id=" + 'rad'  + count1 + "> Label for Radio Button " + count1 + " : <input style=' margin-bottom : 20px; ' type='text' id=" + 'r' + count1 + " /><br></div>");
        $('#r' + count1).focus();
        count1++;
    });
    $('#mrbox').click(function () {
        var a = count1 - 1;
        $('#d' + a).remove();
        count1 = a;
    });
    $('#Confirm2').click(function () {
        var label = $('#rlabel').val();
        $('#pre').append("<div id='' style='padding : 10px;'>"+label+ ':   ');
        for (var i = 1; i < count1; i++) {
            var checkval = $('#r' + i).val();
            $('#pre').append('   <input type="radio" name='+label+' >' + checkval);
		}
        $('#pre').append("<img src='images/cross.jpg' alt='Del' class='cross' ><br></div>");
		 
		for(var i=0;i<count1;i++){
			$('#r' + count1 ).remove();
		}
		count1=1;
    });
});