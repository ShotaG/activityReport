$(document).ready(function() {
	$('#firstClick').click(function(event) {
		event.preventDefault();
		$('#workSection').show();
		$('#date').hide();
		$('#start').hide();
		console.log($('#datepicker').val());

	});

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
		$("div.statistics:not(:first)").hide();
		/*$('#statsList attendance').show();
		$('#statsList attendance').not().hide();  <---worked when I had them as ul's
														need to figure that one out
		//$('#attendance').show();*/
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

	//I should definitely be able to make this more dynamic and dry
	$('#nextOne').click(function() {
		$('#prevents').show();
		$('#attendance').hide();
		attendanceStat = $('#attendanceStat').val();
		$('#reviewAttendance').val(attendanceStat);
	});

	$('#nextTwo').click(function() {
		$('#ords').show();
		$('#prevents').hide();
		preventsStat = $('#preventsStat').val();
		$('#reviewPrevs').val(preventsStat);
	});

	$('#nextThree').click(function() {
		$('#meds').show();
		$('#ords').hide();
		ordsStat = $('#ordsStat').val();
		$('#reviewOrds').val(ordsStat);
	});

	$('#nextFour').click(function() {
		$('#missing').show();
		$('#meds').hide();
		medsStat = $('#medsStat').val();
		$('#reviewMeds').val(medsStat);
	});

	$('#nextFive').click(function() {
		$('#evr').show();
		$('#missing').hide();
		missingStat = $('#missingStat').val();
		$('#reviewMissing').val(missingStat);
	});

	$('#nextSix').click(function() {
		$('#aa').show();
		$('#evr').hide();
		evrStat = $('#evrStat').val();
		$('#reviewEvr').val(evrStat);
	});

	$('#nextSeven').click(function() {
		$('#rescues').show();
		$('#aa').hide();
		aaStat = $('#aaStat').val();
		$('#reviewAA').val(aaStat);
	});

	$('#nextEight').click(function() {
		$('#o2').show();
		$('#rescues').hide();
		rescuesStat = $('#rescuesStat').val();
		$('#reviewRescues').val(rescuesStat);
	});

	$('#nextNine').click(function() {
		$('#drownings').show();
		$('#o2').hide();
		o2Stat = $('#o2Stat').val();
		$('#reviewO2').val(o2Stat);
	});

	$('#nextTen').click(function() {
		$('#recovery').show();
		$('#drownings').hide();
		drowningsStat = $('#drowningsStat').val();
		$('#reviewDrownings').val(drowningsStat);
	});

	$('#previousOne').click(function() {
		$('#attendance').show();
		$('#prevents').hide();
	});

	$('#previousTwo').click(function() {
		$('#ords').hide();
		$('#prevents').show();
	});

	$('#previousThree').click(function() {
		$('#meds').hide();
		$('#ords').show();
	});

	$('#previousFour').click(function() {
		$('#missing').hide();
		$('#meds').show();
	});

	$('#previousFive').click(function() {
		$('#evr').hide();
		$('#missing').show();
	});

	$('#previousSix').click(function() {
		$('#aa').hide();
		$('#evr').show();
	});

	$('#previousSeven').click(function() {
		$('#rescues').hide();
		$('#aa').show();
	});

	$('#previousEight').click(function() {
		$('#o2').hide();
		$('#rescues').show();
	});

	$('#previousNine').click(function() {
		$('#drownings').hide();
		$('#o2').show();
	});

	$('#previousTen').click(function() {
		$('#recovery').hide();
		$('#drownings').show();
	});

	$('#allAnswered').click(function() {
		console.log('yoyoyoyoyo!');
		recoveryStat = $('#recoveryStat').val();
		$('#reviewRecovery').val(recoveryStat);
		$('#stats').hide();
		$('#start').hide();
		$('#reviewStats').show();
	});
});

