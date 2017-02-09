/*$(document).ready(function() {
	$('Area Info').validate();
});*/

$().ready(function() {
		//run form validation on $('#datepicker')
		$('#Area Info').validate({
		//specify the validation rules
			rules: {
			todaysDate: "required"
			},

		//specify validation error messages
			messages: {
			'todaysDate': "Please enter today's date."
			/*},
		
		submitHandler: function(form) {
			console.log('fill out stuff');
			return false;*/
		}

	});
		
		$('#datepicker').valid();
		/*if($('#datepicker').val() === "") {
			$('#firstClick').prop('disabled', false);
		}*/


	 /*$('#stats').validate({
	 	rules: {
	 		attendanceStats: {
	 			required: true
	 		}
	 		
	 	},

	 	messages: {
	 		required: "Please enter a valid number"
	 	}
	
	});
	 	$('#attendanceStat').valid();
	 	$('#preventsStat').valid();
	 	$('#ordsStat').valid();
	 	$('#medsStat').valid();
	 	$('#missingStat').valid();
	 	$('#evrStat').valid();
	 	$('#aaStat').valid();
	 	$('#rescuesStat').valid();
	 	$('#o2Stat').valid();
	 	$('#drowningsStat').valid();
	 	$('#recoveryStat').valid();



*/
});