$(document).ready(function () {
    $('#slider1').owlCarousel({
        loop: true,
        dotsEach: true,
        smartSpeed: 2000,
        nav: true,
        navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
        dots: false,
        animateIn: 'animate__fadeIn',
        // autoplay:true,   
        autoplayTimeout:4000,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // wow animation in slider

    var owl = $('#slider1');
    owl.owlCarousel();

    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    // slider 2

    $('#slider2').owlCarousel({
        items:5,
        loop: true,
        dotsEach: true,
        smartSpeed: 800,
        nav: false,
        dots: false,
        autoplay:true,   
        autoplayTimeout:3000,

    })

    // slider 3

    $('#slider3').owlCarousel({
        items:5,
        loop: false,
        dotsEach: true,
        smartSpeed: 800,
        nav: false,
        dots: true,  
        autoplayTimeout:3000,
        margin:9,

    })


    // slider 4

    $('#slider4').owlCarousel({
        items: 2,
        loop: false,
        dotsEach: true,
        smartSpeed: 800,
        nav: false,
        dots: false,
        // autoplay:true,   
        autoplayTimeout:3000,
        margin:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }

    })

        // slider 5

        $('#slider5').owlCarousel({
            items:2,
            loop: false,
            dotsEach: true,
            smartSpeed: 800,
            nav: false,
            dots: true,  
            autoplayTimeout:3000,
            margin:5,
    
        })


        
        // fixed header

        $(window).scroll(function () {
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();

            if (scroll >= 130) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
        });

        //  loader
$(document).ready(function(){
    setTimeout(function(){
        $('.pre-loader').fadeOut();
    },1200);
})
});

// top to bottom scroll

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
  
	
})(jQuery); 