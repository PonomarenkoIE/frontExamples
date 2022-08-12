$(document).ready(function () {
	var modal = $('#modal');
	var button_close = $('#modal__close');
	var links_open = $('.click');
	var input1 = $('.footer__input1');
	var input2 = $('.footer__input2');
	var inputs = $('.footer__input');
	var imp_input = $('.click-form');
	imp_input.on('click', function() {
if (!(input1.hasClass('invalid') || input2.hasClass('invalid') || inputs.val() == "")) {
		modal.show();
	}
	});
	links_open.on('click', function() {
		modal.show();
	});
	button_close.on('click', function() {
		modal.hide();
	});
});