$(document).ready(function() {
	let	img_first = $('.slider__img1');
	let	img_mobile;
	let	sliderItem = $('.slider-item');
	let img_check = false;
		if ($(window).width() < 321) {
			if (img_check) {return};
			img_check = true;
			img_first.attr('src','img/hero/text1Mobile.jpg').attr('alt','Человек');
		}
		else
			$(window).scroll(function() {

			});
	});
