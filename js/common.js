$(function (){
	//burger
	$(function (burger){
		$('.burger').click(function(){
			$('.burger,.header__nav').toggleClass('active');
		});
		$(document).mouseup(function (e){
        if (!$(".header__nav,.burger").is(e.target) &&
        	$(".header__nav,.burger").has(e.target).length === 0) {
            $(".header__nav,.burger").removeClass("active");}
   	});
	});
	//burger end
	//slick slider
	$('.slider__wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="slider__arrow-prev" arial-label="prev"></button>',
		nextArrow: '<button class="slider__arrow-next" arial-label="Next"></button>',
		dots: true,
	});
	$(function (scroll){
		var $page = $('html, body');
		$('a[href*="#"]').click(function() {
		    $page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 400);
		    return false;
		});
	});
});