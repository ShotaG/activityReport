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

	}      //<------how do i enter this?  
  });
});
  
  $('#section').change(function() {
	
	$(this).find("option:selected").each(function() {
		console.log($(this).attr("value"));
		function writeUserData(section) {
				firebase.database().ref('section').set({
					section: $(this).attr("value")
				});
		}
	});
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
			


		
});









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

