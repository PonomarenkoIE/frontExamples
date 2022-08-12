$(document).ready(function() {
	let item_after = $('.slider__item');
	let append_block = $('.slider__item__second');
	let slide_append1 = $('#slide_append1');
	let slide_append2 = $('#slide_append2');
	let slide_append3 = $('#slide_append3');
 let item1 = $('#item1');
 let item2 = $('#item2');
 let item3 = $('#item3');
	var parent = $('.slick-track');
	if ($(window).width() < 769) {
		slide_append1.clone().addClass('slider__item').insertAfter(item1).css('display','flex');
		slide_append2.clone().addClass('slider__item').insertAfter(item2).css('display','flex');
		slide_append3.clone().addClass('slider__item').insertAfter(item3).css('display','flex');
		append_block.remove();
		append_block.css('display','none');
	}
});