var turn = 0;

var map = {
	
}

var player = {
	units: [
		{
			class: 'Brawler',
			health: 10,
			level: 1,
			pos: [0, 0]
		}
	]
}

function gridgen() {
	let pack = '';
	for (let y=0; y<8; y++) {
		for (let x=0; x<12; x++) {
			pack += '<img class="box" id="'+x+':'+y+'"/>';
		}
		pack += '<br>';
	}
	document.getElementById('grid').innerHTML = pack;
};

function writeUnits(unitlist) {
	for (let i=0; i<unitlist.length; i++) {
		let img = './img/' + unitdata[unitlist[i].class].img;
		document.getElementById(''+unitlist[i].pos[0]+':'+unitlist[i].pos[1]).src = img;
	}
}