

$('#firstClick').click(function(event) {
	event.preventDefault();
	$('#workSection').show();
	$('#date').hide();
	$('#start').hide();
});

/*function selectSection() {
	if($('#section option:selected').text('Southern')) {
		console.log('ya did it');
	} else if($('#section option:selected').text('Central')) {
		console.log('once again');
	}
}*/

$('#section').change(function() {
	$("#area").show();
	$(this).find("option:selected").each(function() {
		if($(this).attr("value")=="LS100") {
			$("#central").hide();
			$("#northern").hide();
			$("#southern").show();
		} else if($(this).attr("value")=="LS200") {
			$("#southern").hide();
			$("#northern").hide();
			$("#central").show();
		} else {
			$("#southern").hide();
			$("#central").hide();
			$("#northern").show();
		}
	})
});


$('#thirdClick').click(function(event) {
	event.preventDefault();
	$('#stats').show();
	$('#area').hide();
})

