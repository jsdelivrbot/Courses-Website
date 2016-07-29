/*Loading section*/
$(window).load(function() {
  $('body').css("overflow","auto");
  $(".loading-overlay .container-fluid img").fadeOut(1000,function () {
	  $(this).parent().fadeOut(2000);
  	});
  });


		  /* navbar scroll effect */
		  function Scroll(){
				  var bottom = document.getElementById('bottom-nav');
				  var top = document.getElementsByClassName('sign-modal');
				  var ypos = window.pageYOffset;
				  if(ypos > 300) {
					  bottom.style.padding = "0px";
					  top.style.padding = "5px 10px 5px 10px";
				  }
				  else{
					  bottom.style.padding = "15px";
					  top.style.padding = "10px";
					  }
			  }
			  window.addEventListener("scroll",Scroll);

$(document).ready(function() {


	// slick carousel
  var gadgetCarousel = $(".single-item, .multiple-items, .responsive");

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
	else if($(this).is(".responsive")) {
		$(this).slick({
			  dots: false,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
			});
	}
	else {
	  $(this).slick();
	}
  })

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  // add article
  var max_fields      = 10;
  var wrapper         = $(".input");
  var add             = $(".add_field");
  var x				  = 1;

  $(add).click(function(e){
	  e.preventDefault();
	  if(x < max_fields){
		  x++;
		  $(wrapper).append("<div class='input col-xs-12 float-left'>Course Url<input type='url' placeholder='URL' name='myname[] class='col-xs-9 float-right'/></div><br />");
	  }
  });


 });
