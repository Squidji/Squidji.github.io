var factors = {
	'A': { // Class A - For Main Character Information
		'Name': '', // Max of 12 characters
		'Gender': 0 // 0=male 1=female
	},
	'B': { // Class B - For Main Character Physical Stats
		'MaxHealth': 0, // Can be up to 999
		'Health': 0,
		'Speed': 0, // From 0 to 99
		'Hunger': 0, // From 0 to 9
		'Attack': 0, // Can be up to 999
		'MaxMana': 0, // Can be up to 999
		'Mana': 0,
		'Energy': 0, // From 0 to 99
		'Defense': 0, // Can be up to 999
		'Accuracy': 0, // From 0 to 99
		'Thirst': 0 // From 0 to 9
	},
	'C': { // Class C - For Main Character Personality
		'Charisma': 0, // 0 to 99
		'Extrovertedness': 0, // 0 to 99
		'Luck': 0, // 0 to 99
		'Intelligence': 0, // 0 to 99
		'Seriousness': 0, // 0 to 99
		'Stealth': 0, // 0 to 99
		'Strength': 0, // 0 to 99
		'Trustfulness': 0, // 0 to 99
		'Dexterity': 0, // 0 to 99
	},
	'D': { // Class D - Misc. Information
		
	}
};
var chptr = 0;
var bkmk = 0;

var choicebuffer = {};

function newGame() {
	loadingScreen('Preparing Variables');
	// Player Factors - Class B
	factors.B.MaxHealth = 20;
	factors.B.Health = 20;
	factors.B.Speed = 10;
	factors.B.Hunger = 5;
	factors.B.Attack = 10;
	factors.B.MaxMana = 10;
	factors.B.Mana = 10;
	factors.B.Energy = 99;
	factors.B.Defense = 10;
	factors.B.Accuracy = 80;
	factors.B.Thirst = 5;
	// Player Factors - Class C
	factors.C.Charisma = randomNumber(45, 55);
	factors.C.Extrovertedness = randomNumber(45, 55);
	factors.C.Luck = randomNumber(45, 55);
	factors.C.Intelligence = randomNumber(45, 55);
	factors.C.Seriousness = randomNumber(45, 55);
	factors.C.Stealth = randomNumber(45, 55);
	factors.C.Strength = randomNumber(45, 55);
	factors.C.Trustfulness = randomNumber(45, 55);
	factors.C.Dexterity = randomNumber(45, 55);
	openPage('Tabs');
	factors.A.Name = 'Kibo';
	console.log(factors);
	runChapter(1, 0);
};

function loadingScreen(text) {
	openPage('Loading');
	document.getElementById('LoadingText').innerHTML = 
	'<i class="fas fa-circle-notch fa-spin"></i> ' + text;
};

function compressData() {

};

function randomNumber(min, max) {
	let range = max - min;
	let random = Math.floor(Math.random() * Math.floor(range));
	return min + random;
};

function executeBuffer(buffer) {
	for (let i=0; i<buffer.length; i++) {
		executeRun(buffer[i]);
	};
};

function executeRun(run) {
	if (run[0] === 'background') {
		document.body.style.backgroundImage = 'url(' + run[1] + ')';
		console.log('Set BG Image');

	} else if (run[0] === 'cleardisplay') {
		document.getElementById('DisplayHead').innerText = '';
		document.getElementById('DisplayBody').innerText = '';
		console.log('Cleared the Display.');

	} else if (run[0] === 'write') {
		let text = '';
		for (let i=0; i<run[1].length; i++) {
			if (run[1][i][1] === '!') {
				let getvar = factors[run[1][i][0]][run[1][i].slice(2)];
				text += getvar;
			} else {
				text += run[1][i];
			};
		};
		console.log(text);
		document.getElementById('DisplayHead').innerText = alldat[chptr].Name;
		document.getElementById('DisplayBody').innerText += text;
		openPage('Display');

	} else if (run[0] === 'modvar'){
		factors[run[1][0]][run[1].slice(2)] += run[2];
		console.log('Mod Var: ' + run[1] + ' ' + run[2]);

	} else if (run[0] === 'setvar') {
		factors[run[1][0]][run[1].slice(2)] = run[2];
		console.log('Set Var: ' + run[1] + ' ' + run[2]);

	} else if (run[0] === 'choices') {
		let html = '';
		//For all of the choice objects in the command.
		for (let i=0; i<run[1].length; i++) {
			choicebuffer[i] = run[1][i][1]
			html += '<div onclick="' +
			'executeBuffer(choicebuffer['+i+'])' +
			'">' + run[1][i][0] + '</div>';
		};
		document.getElementById('DisplayChoices').innerHTML = html;
	};

};

function runChapter(X, Y) {
	chptr = X; bkmk = Y;
	for (let i=0; i<alldat[chptr].Script[bkmk].length; i++) {
		let run = alldat[chptr].Script[bkmk][i];
		console.log(run);
		executeRun(run);
	};
};