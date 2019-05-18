$(document).ready(function() {

// Hide Header on on scroll down

	var didScroll;
	var lastScrollTop = 0;
	var delta = 10;
	var navbarHeight = $('header').outerHeight();
	
	$(window).scroll(function(event){
	    didScroll = true;
	});
	
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);
	
	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	        $('header').removeClass('trans-header');        
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	        }
	      
	    }    
	    lastScrollTop = st;
	}

	// Home page text swapping
	
//	$(function(){
//	    $(".element").typed({
//	      strings: ["fiction", "novels", "shorts", "poetry", "stories"],
//	      typeSpeed: 80,
//	      backSpeed: 50,
//	      backDelay: 2000,
//	      loop: true,
//	    });
//	});
	
	// Sign in modal
	
	$('#sign-in-btn').click(function() {
		$('#sign-in-overlay').show();
		$('body').addClass('no-scroll')
	});
	$('#sign-up-btn').click(function() {
		$('#sign-in-overlay').show();
		$('body').addClass('no-scroll')
	});
	$('.close-link').click(function() {
		$(this).parent().parent().parent().hide();
		$('body').removeClass('no-scroll')	
	});
	
	// Overlay functions
	
	$('#new-series-btn').click(function() {
		$('#new-series-overlay').show();
		$('.overlay-wrap').addClass('show');
		$('body').addClass('no-scroll')
	});
	$('#browse-btn').click(function() {
		$('#browse-overlay').show();
		$('body').addClass('no-scroll')				
	});
	$('#profile-btn').click(function() {
		$('#profile-overlay').show();
		$('body').addClass('no-scroll')		
	});
	$('#episode-settings-btn').click(function() {
		$('#episode-settings-overlay').show();
		$('body').addClass('no-scroll')		
	});
	$('#preview-overlay-btn').click(function() {
		$('#preview-overlay').show();
		$('body').addClass('no-scroll')		
	});
	$('#preview-overlay-2-btn').click(function() {
		$('#preview-overlay-2').show();
		$('body').addClass('no-scroll')		
	});
	$('.dd-btn > a > i').click(function() {
		$(this).parent().parent().find('.dd-wrapper').toggle();
	});

	$('.dd-close').click(function() {
		$(this).parent().hide();
	});
	$('.close-btn').click(function() {
		$(this).parent().hide();
		$('body').removeClass('no-scroll')	
		$('.overlay-wrap').removeClass('show');
		
	});
	
	// Setting fields / forms
	
	$('#settings-btn').click(function() {
		$('#profile-body').hide();
		$('#profile-overlay .close-btn').hide();
		$('.settings-body').show();
	});
	$('.settings-body .button').click(function() {
		$('#profile-body').show();
		$('#profile-overlay .close-btn').show();
		$('.settings-body').hide();
	});
	$("#user-email").val("joshiwata@gmail.com");
	$("#username").val("Joshua Iwata");
	$("#user-url").val("joshua-iwata");
	$(document).foundation('dropdown', 'reflow');
	$(document).foundation('slider', 'reflow');
	
	
	// Editor script
	
//	$('.editor').notebook({
//		autoFocus: false,
//		placeholder: 'Your text here...',
//		mode: 'multiline', // // multiline or inline
//		modifiers: ['bold', 'italic', 'underline', 'h1', 'h2', 'ol', 'ul', 'anchor']
//	});
	
});
