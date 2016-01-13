// JavaScript for Conceito

$(document).ready(function() {

		// Header Scroll
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 50) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		});


		// Waypoints
		$('.work').waypoint(function() {
			$('.work').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});
		$('.download').waypoint(function() {
			$('.download .btn').addClass('animated tada');
		}, {
			offset: '75%'
		});

		// Fancybox
		$('.work-box').fancybox();

		// Flexslider
		$('.flexslider').flexslider({
			animation: "fade",
			directionNav: false,
		});

		// Page Scroll
		var sections = $('section')
			nav = $('nav[role="navigation"]');

		$(window).on('scroll', function () {
		  	var cur_pos = $(this).scrollTop();
		  	sections.each(function() {
		    	var top = $(this).offset().top - 76
		        	bottom = top + $(this).outerHeight();
		    	if (cur_pos >= top && cur_pos <= bottom) {
		      		nav.find('a').removeClass('active');
		      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		    	}
		  	});
		});
		nav.find('a').on('click', function () {
		  	var $el = $(this)
		    	id = $el.attr('href');
			$('html, body').animate({
				scrollTop: $(id).offset().top - 75
			}, 500);
		  return false;
		});

		// Mobile Navigation
		$('.nav-toggle').on('click', function() {
			$(this).toggleClass('close-nav');
			nav.toggleClass('open');
			return false;
		});
		nav.find('a').on('click', function() {
			$('.nav-toggle').toggleClass('close-nav');
			nav.toggleClass('open');
		});

	// Scroll down opacity
	jQuery('.lead-text').vopacity(0.20, true);

	// Parallax effect
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40,
		responsive:true
		});

	// Header particles effect
	$('#particles').particleground({
		dotColor: '#666',
		lineColor: '#666'
	  });

	 // Header fixed
	$('#nav').affix({
    	offset: {
       	top: 580
      }
	});

	// Header menu smooth scroll
	$('nav a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
			}, 1000);
			return false;
			}
			}
		});



	// Header text typewriter effect
	$("#typed").typed({
    	strings: ["digital", "creative", "team", "awesome"],
       	typeSpeed: 100,
       	backDelay: 4000,
       loop: true,
       loopCount: false,
       callback: function(){ foo(); },
       resetCallback: function() { newTyped(); }
	});
	$(".reset").click(function(){
	$("#typed").typed('reset');
    });

	function newTyped(){ /* A new typed object */ }
	function foo(){ console.log("Callback"); }



	//Counter effect
	var lastWasLower = false;
	$(document).scroll(function(){

	var p = $( "#process" );
	var position = p.position();
	var position2 = position.top;

	if ($(document).scrollTop() > position2-500){
	if (!lastWasLower)
		$('#1').html('330');
	  	$('#2').html('139');
	  	$('#3').html('247');
	  	$('#4').html('324');

	lastWasLower = true;
  		} else {
    lastWasLower = false;
  	}
	});



	// OWL Carousels
	$('.posts-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:false,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:1,
            nav:false
        	},
        	600:{
            items:1,
            nav:false
        	},
        	960:{
            items:2,
            nav:false
        	},
			1281:{
            items:2,
            nav:false
        	}
    	}
	});



	$('.testimonials-list').owlCarousel({
		loop:true,
    	margin:0,
		autoplay:true,
		controls:true,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:1,
            nav:false
        	},
        	600:{
            items:1,
            nav:false
        	},
        	960:{
            items:1,
            nav:false
        	},
			1281:{
            items:1,
            nav:false
        }
    }
	});

	$('.logos-list').owlCarousel({
    	loop:true,
		margin:0,
		autoplay:true,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:2,
            nav:false
        	},
        	600:{
            items:3,
            nav:false
        	},
        	960:{
            items:4,
            nav:false
        },
			1281:{
            items:4,
            nav:false
       		}
    	}
	});

});
