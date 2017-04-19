$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEHG5nWcGtasxJGMplhPfoDwe_8D5-F4s",
    authDomain: "activityreport-9d0cd.firebaseapp.com",
    databaseURL: "https://activityreport-9d0cd.firebaseio.com",
    storageBucket: "activityreport-9d0cd.appspot.com",
    messagingSenderId: "671110352389"
  };
  firebase.initializeApp(config);

  //Get elements
  var selectedDate = $('#datepicker').val();

  //Create dbReferences
  var dbRefObject = firebase.database().ref().child('dailyActivity');

  //Sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));

  //basic write operations
  $('#firstClick').click(function writeUserData(date) {
  firebase.database().ref('dailyActivity').set({
    date: $('#datepicker').val(),
    section: "",//$('#section').attr('value'),  <-----undefined at this point, will define later
    area: "",     //as I enter the values, I will need to update the blank key-value pairs in database
	stats: {
		attendance: "",
		prevents: "",
		ords: "", 
		meds: "",
		missingPersons: "",
		evr: "",
		aa: "",
		rescues: "",
		oxygen: "",
		drownings: "",
		bodyRecoveries: ""
	}
		

	});      //<------how do i enter this?  
  });
});
  //update section in db according to user selection
  $('#section').change(function() {
	
	$(this).find("option:selected").each(function() {
		if($(this).attr("value")=="LS100") {
			firebase.database().ref('dailyActivity').update({
				section: $(this).attr("value")
			});
			// console.log($(this).attr("value"));
			//var southSelected=$(this).attr("value")
			//storing the above as a variable, but how do i access this 
			//variable in the next button click?  might have to rewrite 
			//this as a callback, so that I can call the function, store 
			//the result, and reuse it elsewhere.  
		} else if($(this).attr("value")=="LS200") {
			firebase.database().ref('dailyActivity').update({
				section: $(this).attr("value")
			});
		} else {
			firebase.database().ref('dailyActivity').update({
				section: $(this).attr("value")
			});
		}

		});
	});

  $('#thirdClick').click(function(event) {
  	$('#section').find("option:selected").each(function() {
		if($(this).attr("value")=="LS100") {
			firebase.database().ref('dailyActivity').update({
				area: south.options[south.selectedIndex].value
			});			
		} else if($(this).attr("value")=="LS200") {
			firebase.database().ref('dailyActivity').update({
				area: cent.options[cent.selectedIndex].value
			});	
		} else {
			firebase.database().ref('dailyActivity').update({
				area: north.options[north.selectedIndex].value
			});	
		}
	
	});
   });

//I should definitely be able to make this more dynamic and dry
$('#nextOne').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/attendance": $('#attendanceStat').val()
			
			});
});

$('#nextTwo').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/prevents": $('#preventsStat').val()
			});
});

$('#nextThree').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/ords": $('#ordsStat').val()
			});
});

$('#nextFour').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/meds": $('#medsStat').val()
			});
});

$('#nextFive').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/missingPersons": $('#missingStat').val()
			});
});

$('#nextSix').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/evr": $('#evrStat').val()
			});
});

$('#nextSeven').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/aa": $('#aaStat').val()

			});
});

$('#nextEight').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/rescues": $('#rescuesStat').val()
			});
});

$('#nextNine').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/oxygen": $('#o2Stat').val()
			});
});

$('#nextTen').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/drownings": $('#drowningsStat').val()
			});
});

$('#allAnswered').click(function() {
	firebase.database().ref('dailyActivity').update({
		"stats/bodyRecoveries": $('#recoveryStat').val()
			});
	// var firebaseAnswerReview = firebase.database().ref().child('dailyActivity');

	// firebaseAnswerReview.on('value', function(answeredSnapshot) {
	// 	firebaseAnswerReview.innerText = answeredSnapshot.val();
	// 	});

		
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

 


/*		if($(this).attr("value")=="LS100") {
			function writeUserData(section) {
				firebase.database().ref('section').set({
					section: $(this).attr("value")
				});
			}

		} else if($(this).attr("value")=="LS200") {
				function writeUserData(section) {
				firebase.database().ref('section').set({
					section: $(this).attr("value")
				});
			} 
		} else {
				function writeUserData(section) {
				firebase.database().ref('section').set({
					section: $(this).attr("value")
				});
			}
			
		}*/ 
			


		










	/*var database = firebase.database();
	console.log(database);

	$('#firstClick').click(function(event) {
		event.preventDefault();

		function writeUserData(selectedDate) {
  firebase.database().ref('users/' + userId).set({
    date: $('#datepicker').val*/
/*  });
}


		var selectedDate = new Object();
			todaysDate = $('#datepicker').val();
			console.log($('#datepicker').val());
	})
*/

