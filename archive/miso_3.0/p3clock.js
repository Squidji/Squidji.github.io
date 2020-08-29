var p3clock = {
	img_directory: './img/',
	element_parent: document.getElementById('p3clockarea'),
	time_patterns: {
		0 : 'Dark Hour',
		1 : 'Before Dawn',
		2 : 'Before Dawn',
		3 : 'Before Dawn',
		4 : 'Before Dawn',
		5 : 'Before Dawn',
		6 : 'Morning',
		7 : 'Morning',
		8 : 'Morning',
		9 : 'Morning',
		10: 'Morning',
		11: 'Lunchtime',
		12: 'Afternoon',
		13: 'Afternoon',
		14: 'Afternoon',
		15: 'After School',
		16: 'After School',
		17: 'After School',
		18: 'Evening',
		19: 'Evening',
		20: 'Evening',
		21: 'Evening',
		22: 'Late Night',
		23: 'Late Night'
	},
	day_name: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
};

// Create Element
var fontlink = document.createElement('link');
fontlink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap';
fontlink.rel = 'stylesheet';document.head.appendChild(fontlink);
var style = document.createElement('style');
style.innerHTML = ' #p3clocknode {font-family: "Montserrat", sans-serif;}#p3clocknode img {\
position: fixed;right: -3px;top: -3px;}#p3clocknode div {position: fixed;}#p3clocknode #p3date {\
right: 20px;top: 6px;color: #0d2e47;font-size: 20px;}#p3clocknode #p3time {right: 14px;top: 30px;\
color: white;text-shadow: #237e7e 3px 3px;font-size: 25px;}#p3clocknode.darkhour #p3date {\
color: #113305;}#p3clocknode.darkhour #p3time {color: #e1ffef;text-shadow: #295151 3px 3px;}';
document.head.appendChild(style);
var parentnode = document.createElement('div'); parentnode.id = 'p3clocknode';
var p3back = document.createElement('img'); p3back.id = 'p3back';
var p3date = document.createElement('div'); p3date.id = 'p3date';
var p3time = document.createElement('div'); p3time.id = 'p3time';
parentnode.appendChild(p3back);parentnode.appendChild(p3date);
parentnode.appendChild(p3time);p3clock.element_parent.appendChild(parentnode);


// Edit Element /s
setInterval( () => {
	let date = new Date();
	let line1 = '' + ( date.getMonth() + 1 ) + ' / ' + date.getDate() + ' • ' + p3clock.day_name[date.getDay()];
	document.getElementById('p3date').innerHTML = line1;
	let line2 = p3clock.time_patterns[date.getHours()];
	document.getElementById('p3time').innerHTML = line2;
	if (line2 === 'Dark Hour') {document.getElementById('p3back').src = p3clock.img_directory + 'p3dhr.png';
	document.getElementById('p3clocknode').classList = ['darkhour'];}
	else {document.getElementById('p3back').src = p3clock.img_directory + 'p3spr.png'
	document.getElementById('p3clocknode').classList = [];};
}, 1000);