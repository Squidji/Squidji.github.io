var troops = {
	red: [
		{type: 't', x: 0, y: wh[1]-1},
		{type: 't', x: 9, y: 4}
	],
	blue: [
		{type: 't', x: 18, y: 1}
	]
};
var turn = 'red';

function troopmenu(x, y) { if (getTroop(x, y).side === turn) {

	let allpoints = document.getElementsByClassName('pointimg');
	for (let i=0; i<allpoints.length; i++) {
		allpoints[i].src = '';
		allpoints[i].onclick = null;
		allpoints[i].style.display = 'none';
	};

	document.getElementById('pt_' + x + ':' + y).src = './x.png';
	document.getElementById('pt_' + x + ':' + y).onclick = clrPoints;
	document.getElementById('pt_' + x + ':' + y).style.display = 'block';

	let trooptype = getTroop(x, y).type;

	if (troopinit[trooptype].movement === '4d') { // FOUR DIRECTION MOVEMENT TYPE

		if ((y-1) !== -1) { // UP
			let tile = document.getElementById('bx_' + x + ':' + (y-1)).classList[1];
			if (tileinit[tile].solid && troopinit[trooptype].position === 'lower') {} else {
				document.getElementById('pt_' + x + ':' + (y-1)).src = './point.png';			
				document.getElementById('pt_' + x + ':' + (y-1)).style.display = 'block';			
			};
		};
		if ((y+1) !== wh[1]) { // DOWN
			let tile = document.getElementById('bx_' + x + ':' + (y+1)).classList[1];
			if (tileinit[tile].solid && troopinit[trooptype].position === 'lower') {} else {
				document.getElementById('pt_' + x + ':' + (y+1)).src = './point.png';			
				document.getElementById('pt_' + x + ':' + (y+1)).style.display = 'block';			
			};
		};
		if ((x-1) !== -1) { // LEFT
			let tile = document.getElementById('bx_' + (x-1) + ':' + y).classList[1];
			if (tileinit[tile].solid && troopinit[trooptype].position === 'lower') {} else {
				document.getElementById('pt_' + (x-1) + ':' + y).src = './point.png';			
				document.getElementById('pt_' + (x-1) + ':' + y).style.display = 'block';			
			};
		};
		if ((x+1) !== wh[0]) { // RIGHT
			let tile = document.getElementById('bx_' + (x+1) + ':' + y).classList[1];
			if (tileinit[tile].solid && troopinit[trooptype].position === 'lower') {} else {
				document.getElementById('pt_' + (x+1) + ':' + y).src = './point.png';			
				document.getElementById('pt_' + (x+1) + ':' + y).style.display = 'block';			
			};
		};

	};

};};