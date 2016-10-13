$(document).ready(function(){
    $(".item01").slideUp(0).slideDown(600);
    $(".item02").slideUp(0).delay(800).slideDown(600);
    $(".item03").slideUp(0).delay(1400).slideDown(600); 
});

$(function() {

    var width = 660;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();

});

$(document).ready(function(){
	$('.close').on('click', function(){
		var closeExp = $(this).attr('data-close');
		var small = $(this).attr('data-small');
		$(small).show();
		$(closeExp).hide();
	});

	$('.work-list').on('click', function(){
		var exp = $(this).attr('data-exp');
		$(this).hide();
		$(exp).show();

	});
});

$(document).ready(function(){

	$('.menu').on('click', function(){
		var menuExp= $(this).attr('data-bar');
		$(menuExp).animate({left:'0px'});
		$('.overlay').css("display","block");
	});

	$('.overlay').on('click', function(){
		('#sidebar').animate({left:'-300px'});
		$('.overlay').css("display","none");
	});

});