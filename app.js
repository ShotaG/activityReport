



$('#firstClick').click(function(event) {
	event.preventDefault();
	$('#workSection').show();
	$('#date').hide();
	$('#start').hide();
	console.log($('#datepicker').val());

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
			console.log($(this).attr("value"));
			//var southSelected=$(this).attr("value")
			//storing the above as a variable, but how do i access this 
			//variable in the next button click?  might have to rewrite 
			//this as a callback, so that I can call the function, store 
			//the result, and reuse it elsewhere.  
		} else if($(this).attr("value")=="LS200") {
			$("#southern").hide();
			$("#northern").hide();
			$("#central").show();
			console.log($(this).attr("value"));
		} else {
			$("#southern").hide();
			$("#central").hide();
			$("#northern").show();
			console.log($(this).attr("value"));
		}
	})
});


$('#thirdClick').click(function(event) {
	event.preventDefault();
	$('#stats').show();
	$('#area').hide();
	$('#intro').hide();
	$('#workSection').hide();
	$('#selectedDate').append($('#datepicker').val());

	//if s/c/n then this
	$('#section').find("option:selected").each(function() {
		if($(this).attr("value")=="LS100") {
			console.log(south.options[south.selectedIndex].value);
			$('#selectedArea').append(south.options[south.selectedIndex].value);
		} else if($(this).attr("value")=="LS200") {
			console.log(cent.options[cent.selectedIndex].value);
			$('#selectedArea').append(cent.options[cent.selectedIndex].value);
		} else {
			console.log(north.options[north.selectedIndex].value);
			$('#selectedArea').append(north.options[north.selectedIndex].value);
		}
	});
	
});

