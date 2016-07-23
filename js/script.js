$(document).ready(function() {


	// slick carousel
  var gadgetCarousel = $(".single-item, .multiple-items");

  gadgetCarousel.each(function() {
	if ($(this).is(".single-item")) {
		$(this).slick({
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 5000
	  });
	}
	else if($(this).is(".multiple-items")) {
		$(this).slick({
		    infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
		    slidesToShow: 3,
		    slidesToScroll: 2
		});
	}
	else {
	  $(this).slick();
	}
  })

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

 });
