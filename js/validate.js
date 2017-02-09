$('.ui.form')
  .form({
    fields: {
      todaysDate: {
        identifier: 'Please enter date',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter the date!'
          }
        ]
      }
    }
  })
;

console.log('hey');


/*// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#date").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      todaysDate: "required",
      },
    // Specify validation error messages
    messages: {
      todaysDate: "Please enter today's date",
  
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});*/

