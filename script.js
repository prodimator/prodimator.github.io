function init(){

	$("#about").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".aboutMe").offset().top},
	        'fast');
	});

	$("#work").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".myWork").offset().top},
	        'fast');
	});
}

onload=init;