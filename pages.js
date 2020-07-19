const imglift = {
	'redspectre': ['./img/redsp_1.gif', './img/redsp_2.png', './img/redsp_3.png', './img/redsp_4.png'],
	'island1': ['./img/isl1.png', './img/isl2.png', './img/isl3.png', './img/isl4.png', './img/isl5.png'],
	'nitroid': ['./img/nit1.png', './img/nit2.gif']
}

function openPage(id) {
	$('.page').css('display', 'none');
	$('#' + id).css('display', 'block');
};

function openTab(i) {
	$('#tabs h2').attr('sel', 'false');
	$('#'+i+'tab').attr('sel', 'true');
	openPage(i+'list');
	closeNav();
};

function slidenext(id,i) {
	let current = parseInt($('#'+id+'img').attr('index'));
	let list = imglift[id];
	current+=i;
	if (current === list.length) {current = 0};
	if (current === -1) {current = list.length - 1};
	$('#'+id+'img').attr('src', list[current]);
	$('#'+id+'img').attr('index', current);
};

function hashpage() {
	let hash = window.location.hash;
	$('#tabs h2').attr('sel', 'false');
	$('.page').css('display', 'none');
	if ($(hash).length) {
		$(hash).css('display', 'block');
	} else {
		openTab('game');
	}
};

function openNav() {
	if (screen.width < 1081) {
		document.getElementById('tabs').style.width = '100%';
		document.getElementById('tabs').style.opacity = '1';
		document.getElementById('x').style.display = 'block';
		document.getElementById('socials').style.display = 'block';
		document.getElementById('socials').style.opacity = '1';
	};
};

function closeNav() {
	if (screen.width < 1081) {
		document.getElementById('tabs').style.width = '0%';
		document.getElementById('tabs').style.opacity = '0';
		document.getElementById('x').style.display = 'none';
		document.getElementById('socials').style.opacity = '0';
		document.getElementById('socials').style.display = 'none';
	};
};