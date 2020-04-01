var turn = 'blue';
// Units 1-10, S - Spy, B - Bomb, F - Flag
var unitmap = [
	{
		'unit': 10,
		'type': 'number',
		'color': 'blue',
		'x': 5,
		'y': 5
	},
	{
		'unit': 5,
		'type': 'number',
		'color': 'red',
		'x': 5,
		'y': 4
	},
	{
		'unit': 'S',
		'type': 'special',
		'color': 'red',
		'x': 6,
		'y': 4
	}
];
var waterlist = [
	[2, 4], [3, 4], [2, 5], [3, 5],
	[7, 4], [8, 4], [7, 5], [8, 5]
];

function createmap() {
	for (let y=0; y<11; y++) {
		for (let x=0; x<11; x++) {

			let a = document.createElement('div');
			a.className = 'grid';
			a.id = 'grid_' + x + ':' + y;

			/**/
			let b = document.createElement('p');
			b.id = 'txt_' + x + ':' + y;
			b.innerText = '' + x + '-' + y;
			a.appendChild(b);
			/**/

			document.getElementById('MAP').appendChild(a);

		};
		document.getElementById('MAP').appendChild(document.createElement('br'));
	};
	for (let i=0; i<waterlist.length; i++) {
		let x = waterlist[i];
		document.getElementById('grid_' + x[0] + ':' + x[1]).classList.add('water');
	};
};

function writemap() {
	for (let y=0; y<11; y++) {
		for (let x=0; x<11; x++) {
			let u = document.getElementById('txt_' + x + ':' + y);
			u.innerText = '' + x + '-' + y;
			u.style.color = 'black';
		};
	};
	for (let i=0; i<unitmap.length; i++) {
		let u = document.getElementById('txt_' + unitmap[i].x + ':' + unitmap[i].y);
		u.style.color = unitmap[i].color;
		if (unitmap[i].color === turn) {
			u.innerText = unitmap[i].unit;
		} else {
			u.innerText = 'X';
		};
	};
};

function moveunit(from, to) { // "from" is a list [x, y] and "to" is "left", "right", "up", or "down"; 

	var u;
	// need to know unit #, because bombs and flag can NOT move
	unitmap.forEach( (unit) => {
		if (from[0] === unit.x && from[1] === unit.y) {u = unit;}
	});
	if (u === undefined) {
		alert('[MU-0] Invalid Unit');
	} else if (u.color !== turn) {
		alert('[MU-1] Wrong Turn');
	} else {

		var x; var y;

		if (to === 'up') {
			x = from[0];
			y = from[1] - 1;
		} else if (to === 'down') {
			x = from[0];
			y = from[1] + 1;
		} else if (to === 'left') {
			x = from[0] - 1;
			y = from[1];
		} else if (to === 'right') {
			x = from[0] + 1;
			y = from[1];	
		};

		if (x >= 0 && x <= 10 && y >= 0 && y <= 10) {
			
			let flag = false;
			for (let i=0; i<waterlist.length; i++) {
				if (x === waterlist[i][0] && y === waterlist[i][1]) {
					flag = true;
				};
			};

			if (flag === false) {

				let flag = false;
				for (let i=0; i<unitmap.length; i++) {
					if (unitmap[i].x === x && unitmap[i].y === y) {

						flag = true;

						if (unitmap[i].color === u.color) {
							alert('[MU-4] Invalid Move On Own Unit');
						} else {

							let e = unitmap[i];
							// remember u is the current unit, e is the enemy unit

							if (u.type === 'number' && e.type === 'number') {
								if (u.unit > e.unit) {
									removeunit(e.x, e.y);
									alert('Defeated Enemy Unit - ' + e.unit);
								} else if (u.unit === e.unit) {
									removeunit(u.x, u,y);
									removeunit(e.x, e.y);
									alert('Collision With Unit - ' + e.unit);
								} else if (u.unit < e.unit) {
									removeunit(u.x, u.y);
									alert('Defeated By Enemy Unit - ' + e.unit);
								};
							} else if (u.type === 'number' && e.type === 'special') {

							};

						};

					};
				};

				for (let i=0; i<unitmap.length; i++) {
					if (u.x === unitmap[i].x && u.y === unitmap[i].y) {
						unitmap[i].x = x;
						unitmap[i].y = y;
					};
				};

				writemap();

			} else {
				alert('[MU-3] Location On Water');
			};

		} else {
			alert('[MU-2] Location Out Of Bounds');
		};

	};
};

function removeunit(x, y) {

};