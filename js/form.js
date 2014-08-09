$(document).ready( function() {
	$('.form-chimp').formchimp({
		'appendElement' : '.three-col span',
		'buttonText' : 'Right on.',
		'errorMessage' : "We dropped the ball. Try again?",
		'responseClass' : "mc-response",
		'successMessage' : "Almost finished...check your email!",
	});
});