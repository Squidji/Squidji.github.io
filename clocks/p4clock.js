var p4clock = {
	img_directory: './img/',
	element_parent: document.getElementById('p4clockarea'),
	clock_sprite: 'p4tvw.png',
	weather_icon: 'p4ic1.png',
	time_patterns: {
		0 : 'Midnight',
		1 : 'Early Morning',
		2 : 'Early Morning',
		3 : 'Early Morning',
		4 : 'Early Morning',
		5 : 'Early Morning',
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
fontlink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap';
fontlink.rel = 'stylesheet';document.head.appendChild(fontlink);
var style = document.createElement('style');
style.innerHTML = '#p4clocknode {font-family: "Poppins", sans-serif;}#p4back {position: fixed;\
right: -27px;top: -15px;}#p4date {position: fixed;background-color: #161616;border-radius: 10px;\
font-size: 15px;top: 15px;right: 55px;padding: 0 30px;height: 15px;line-height: 15px;overflow: hidden;\
font-weight: bold;letter-spacing: 1px;}#p4time {color: black;position: fixed;font-size: 22px;top: 30px;\
right: 50px;text-shadow: 1px 1px 0 #fff,-1px 1px 0 #fff,1px -1px 0 #fff,-1px -1px 0 #fff,0px 1px 0 #fff,\
0px -1px 0 #fff,-1px 0px 0 #fff,1px 0px 0 #fff,2px 2px 0 #fff,-2px 2px 0 #fff,2px -2px 0 #fff,\
-2px -2px 0 #fff,0px 2px 0 #fff,0px -2px 0 #fff,-2px 0px 0 #fff,2px 0px 0 #fff,1px 2px 0 #fff,\
-1px 2px 0 #fff,1px -2px 0 #fff,-1px -2px 0 #fff,2px 1px 0 #fff,-2px 1px 0 #fff,2px -1px 0 #fff,\
-2px -1px 0 #fff;}#p4icon {width: 35px;height: 35px;border-radius: 50%;position: fixed;\
background-color: #161616;border: solid 4px #fafd23;top: 70px;right: 20px;background-size: 50px 50px;}'
document.head.appendChild(style);
var parentnode = document.createElement('div'); parentnode.id = 'p4clocknode';
var p4back = document.createElement('img'); p4back.id = 'p4back'; p4back.src=p4clock.img_directory+'p4spr.png';
var p4date = document.createElement('div'); p4date.id = 'p4date'; 
var p4time = document.createElement('div'); p4time.id = 'p4time';
var p4icon = document.createElement('div'); p4icon.id = 'p4icon'; p4icon.onclick = null;
p4icon.style.backgroundImage = 'url("' + p4clock.img_directory + p4clock.weather_icon + '")';
parentnode.appendChild(p4back); parentnode.appendChild(p4date); parentnode.appendChild(p4time);
parentnode.appendChild(p4icon); p4clock.element_parent.appendChild(parentnode);


// Edit Element /s
setInterval( () => {
	let date = new Date();
	let line1 = '' + ( date.getMonth() + 1 ) + '/' + date.getDate() + ' ' + p4clock.day_name[date.getDay()];
	document.getElementById('p4date').innerHTML = line1;
	let line2 = p4clock.time_patterns[date.getHours()];
	document.getElementById('p4time').innerHTML = line2;
}, 1000);