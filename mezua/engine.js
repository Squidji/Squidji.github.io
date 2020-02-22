function createmap() {
	for (let y=0; y<wh[1]; y++) {
		for (let x=0; x<wh[0]; x++) {

			let bx = document.createElement('div');
			bx.className = 'box g';
			bx.id = 'bx_' + x + ':' + y;

			let im = document.createElement('img');
			im.className = 't';
			im.id = 'in_' + x + ':' + y;
			let c = document.createAttribute('onclick');
			c.value = 'troopmenu(' + x + ',' + y + ');';
			im.setAttributeNode(c);
			bx.appendChild(im);

			let pt = document.createElement('img');
			pt.id = 'pt_' + x + ':' + y;
			pt.className = 'pointimg';
			bx.appendChild(pt);
			
			document.getElementById('MAP').appendChild(bx);

		};
		document.getElementById('MAP').appendChild(document.createElement('br'));
	};
};

function generatemap() {

	//xy = [x, y] // Where the generation starts
	//wh = [w, h] //How big the generation is

	for (let y=0; y<wh[1]; y++) {
		for (let x=0; x<wh[0]; x++) {
			document.getElementById('bx_' + x + ':' + y).className = 'box g';
		};
	};

	for (let y=0; y<wh[1]; y++) {
		for (let x=0; x<wh[0]; x++) {

			let ran = Math.floor(Math.random() * 5);
			if (ran === 0) {
				document.getElementById('bx_' + x + ':' + y).className = 'box w';
			};

		};
	};

	setBX(0, wh[1]-3, 'g');     setBX(1, wh[1]-3, 'g'); setBX(2, wh[1]-3, 'g');
	setBX(0, wh[1]-2, 'b');     setBX(1, wh[1]-2, 'b'); setBX(2, wh[1]-2, 'g');
	setBX(0, wh[1]-1, 'f_red'); setBX(1, wh[1]-1, 'b'); setBX(2, wh[1]-1, 'g');

	setBX(wh[0]-3, 0, 'g'); setBX(wh[0]-2, 0, 'b'); setBX(wh[0]-1, 0, 'f_blue');
	setBX(wh[0]-3, 1, 'g'); setBX(wh[0]-2, 1, 'b'); setBX(wh[0]-1, 1, 'b');
	setBX(wh[0]-3, 2, 'g'); setBX(wh[0]-2, 2, 'g'); setBX(wh[0]-1, 2, 'g');

};

function drawtroops() {
	for (let y=0; y<wh[1]; y++) {
		for (let x=0; x<wh[0]; x++) {
			clrIN(x, y);
		};
	};
	for (let i=0; i<troops.red.length; i++) {
		setIN(troops.red[i].x, troops.red[i].y, troopinit[troops.red[i].type].img);
	};
	for (let i=0; i<troops.blue.length; i++) {
		setIN(troops.blue[i].x, troops.blue[i].y, troopinit[troops.blue[i].type].img);
	};
};

function setBX(x, y, i) {document.getElementById('bx_' + x + ':' + y).className = 'box ' + i}; // Set the bg image for a tile
function setIN(x, y, i) { // Set the image for a troop image
	document.getElementById('in_' + x + ':' + y).src = i;
	document.getElementById('in_' + x + ':' + y).classList.add('v');
};
function clrIN(x, y) { // Make all troop images invisible
	document.getElementById('in_' + x + ':' + y).src = '';
	document.getElementById('in_' + x + ':' + y).classList.remove('v');
};
function clrPoints() { // Make all points invisible
	let allpoints = document.getElementsByClassName('pointimg');
	for (let i=0; i<allpoints.length; i++) {
		allpoints[i].style.display = 'none';
	};
};
function getTroop(x, y) { // Get troop by location

	for (let i=0; i<troops.red.length; i++) {
		if (troops.red[i].x === x && troops.red[i].y === y) {
			let get = troops.red[i]
			get.side = 'red';
			return get;
		};
	};

	for (let i=0; i<troops.blue.length; i++) {
		if (troops.blue[i].x === x && troops.blue[i].y === y) {
			let get = troops.blue[i]
			get.side = 'blue';
			return get;
		};
	};

	return undefined;

};