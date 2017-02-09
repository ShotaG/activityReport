/*use the following for a resource when writing rules for form:  */

	-/*http://semantic-ui.com/behaviors/form.html#/examples*/

	-/*$('#apply-form input').blur(function() //whenever you click off an input element
{                   
    if( !$(this).val() ) {                      //if it is blank. 
         alert('empty');    
    }
});
This works because an empty string in JavaScript is a 'falsy value', 
which basically means if you try to use it as a boolean value it will always 
evaluate to false. If you want, you can change the conditional to 
$(this).val() === '' for added clarity. 
*/

	-/*http://stackoverflow.com/questions/6801483/jquery-simple-input-validation-empty-and-not-empty
*/

