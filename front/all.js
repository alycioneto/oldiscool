

 	  $(document).ready(function() {

	    $(window).scroll(function () {
	        if (window.scrollY > 200) {
	            $('.nav-overlay').addClass('fixed-nav');
	            $('.nav-overlay').addClass('aparece');
	            $('.isHidden').removeClass('isHidden');

	        } else {
	            $('.nav-overlay').removeClass('fixed-nav');
	             $('.nav-overlay').addClass('esconde');
	             $('.nav-overlay').removeClass('aparece');
	              $('.add').addClass('isHidden');
	        }

	        if (window.scrollY > $('nav').outerHeight()) {
	            $('.nav-overlay').css('top', -100);
	        } else {
	            $('.nav-overlay').css('top', 0);
	        }
	    });
	      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })

	});


	   