
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
				
				/*$(window).scroll(function() {
					if($(window).scrollTop() == $(document).height() - $(window).height()) {
						var current =  $(this).prop("hash");
						$(current).delay(500).slideDown(300,'linear');
						console.log(current);
						return false;
					}
				});*/
    });
});

/*$(function() {
    $('a.page-scroll').on("click", function() {
        alert($(document).scrollTop());
    });
});*/


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
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
		var itemContent = $('.carousel-inner div.active div').html();
		$('.modal-footer').html(itemContent);
	});
	
	$('#myCarousel').on('slid.bs.carousel', function () {
		var current = $('.carousel-inner div.active').attr('title');
		var itemContent = $('.carousel-inner div.active div').html();
			$('#myModalLabel').text(current);
			$('.modal-footer').html(itemContent);
	});
	
	$('header h1').delay(500).slideDown(300,'linear');
	$('header p').delay(800).slideDown(300,'linear');	
});

/*$('nav a').each(function() {
	$(this).click(function() {
		var current =  $(this).prop("hash");
		$(current).slideDown(300,'linear');  
		console.log(current);
		return false;
	});
});*/