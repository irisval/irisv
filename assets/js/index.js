$(document).ready(function(){
   $(window).bind('scroll', function() {
   		var navHeight = $('nav').offset().top - 5;
		 if ($(window).scrollTop() >= navHeight) {
			 $('nav').addClass('is-fixed-top');
		 }
		 if ($(window).scrollTop() < $('#about').offset().top) {
		 	$('nav').removeClass('is-fixed-top');
		 }
	});
});

