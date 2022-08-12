$(document).ready(function() {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');
	var a_link = $('a.card__link');
	close.hover(function() { 
		$(this).css('background-color', '#e3e3e3');
		$(this).css('cursor', 'pointer');
	},
	 function() {
   $(this).attr('style', '')	 	
	 });
	button.on('click', function() {
		modal.addClass('modal_active');
	});
	a_link.on('click', function() {
		modal.addClass('modal_active');
		return false;
	});
	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});