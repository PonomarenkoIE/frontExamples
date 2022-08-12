$(document).ready(function(){
var link1 = $('#btn1');
var link2 = $('#btn2');
var link3 = $('#btn3');
var link4 = $('#btn4');
var link5 = $('#btn5');
var link6 = $('#btn6');
var link_t1 = $('#link_t1');
var link_t2 = $('#link_t2');
var link_t3 = $('#link_t3');
var link_t4 = $('#link_t4');
var link_t5 = $('#link_t5');
var link_t6 = $('#link_t6');
link1.on('mouseover', function() {
	link1.html('от 500 р.');
	link_t1.html('<h3 class="service-block__title" style="color:#000;">Здесь будет короткое описание о данной услуге</h3>');
}).on('mouseout', function() {
	link1.html('<button class="button service__button" id="btn1">Узнать цену</button>');
	link_t1.html('Монтаж систем <br>отопления');
});
link2.on('mouseover', function() {
	link2.html('от 500 р.');
	link_t2.html('<h3 class="service-block__title" style="color:#000;">Здесь будет короткое описание о данной услуге</h3>');
}).on('mouseout', function() {
	link2.html('<button class="button service__button" id="btn2">Узнать цену</button>');
	link_t2.html('Монтаж сантехнического оборудования');
});
link3.on('mouseover', function() {
	link3.html('от 500 р.');
	link_t3.html('<h3 class="service-block__title" style="color:#000;">Здесь будет короткое описание о данной услуге</h3>');
}).on('mouseout', function() {
	link3.html('<button class="button service__button" id="btn3">Узнать цену</button>');
	link_t3.html('Монтаж канализационного оборудования');
});
link4.on('mouseover', function() {
	link4.html('от 500 р.');
	link_t4.html('<h3 class="service-block__title" style="color:#000;">Здесь будет короткое описание о данной услуге</h3>');
}).on('mouseout', function() {
	link4.html('<button class="button service__button" id="btn4">Узнать цену</button>');
	link_t4.html('Монтаж систем <br>отопления');
});
link5.on('mouseover', function() {
	link5.html('от 500 р.');
	link_t5.html('<h3 class="service-block__title" style="color:#000;">Здесь будет короткое описание о данной услуге</h3>');
}).on('mouseout', function() {
	link5.html('<button class="button service__button" id="btn5">Узнать цену</button>');
	link_t5.html('Монтаж сантехнического оборудования');
});
link6.on('mouseover', function() {
	link6.html('от 500 р.');
	link_t6.html('<h3 class="service-block__title" style="color:#000;">Здесь будет короткое описание о данной услуге</h3>');
}).on('mouseout', function() {
	link6.html('<button class="button service__button" id="btn6">Узнать цену</button>');
	link_t6.html('Монтаж канализационного оборудования');
});
});