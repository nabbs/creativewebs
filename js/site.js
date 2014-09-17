
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
		//console.log('responisive clicked');
});


$(document).ready(function(){
	/*$(".service-icon a").tooltip({
		placement : 'bottom'
	});*/
	
	$('.portfolio_icon a').click(function(q){
    q.preventDefault();
    targetSlide = parseInt($(this).attr('data-to'));
    $('#myCarousel').carousel(targetSlide);
		$('#myModalLabel').text($(this).attr('title'));
	});
	
	$('#myCarousel').on('slid.bs.carousel', function () {
		var current = $('.carousel-inner div.active').attr('title');
			$('#myModalLabel').text(current);
	});
});
