$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 70);
});

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	focusOnSelect: true
  });





//   password nascosta

"text/javascript"
	$("#password").password('toggle');


// fine password nascosta


  
  