var chptr = 0;
var bkmk = 0;

var savebuffer = {};
var choicebuffer = {};

function newGame() {
	loadingScreen('Preparing Variables');
	// Player Variables - Class B
	savebuffer.B.MaxHealth = 20;
	savebuffer.B.Health = 20;
	savebuffer.B.Speed = 10;
	savebuffer.B.Hunger = 5;
	savebuffer.B.Attack = 10;
	savebuffer.B.MaxMana = 10;
	savebuffer.B.Mana = 10;
	savebuffer.B.Energy = 99;
	savebuffer.B.Defense = 10;
	savebuffer.B.Accuracy = 80;
	savebuffer.B.Thirst = 5;
	// Player Variables - Class C
	savebuffer.C.Charisma = randomNumber(45, 55);
	savebuffer.C.Extrovertedness = randomNumber(45, 55);
	savebuffer.C.Luck = randomNumber(45, 55);
	savebuffer.C.Intelligence = randomNumber(45, 55);
	savebuffer.C.Seriousness = randomNumber(45, 55);
	savebuffer.C.Stealth = randomNumber(45, 55);
	savebuffer.C.Strength = randomNumber(45, 55);
	savebuffer.C.Trustfulness = randomNumber(45, 55);
	savebuffer.C.Dexterity = randomNumber(45, 55);
	openPage('Tabs');
	gamedat.vars.A.Name = 'Kibo';
	console.log(gamedat.vars);
	runChapter(0, 0);
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
				let getvar = gamedat.vars[run[1][i][0]][run[1][i].slice(2)];
				text += getvar;
			} else {
				text += run[1][i];
			};
		};
		console.log(text);
		document.getElementById('DisplayHead').innerText = gamedat[chptr].Name;
		document.getElementById('DisplayBody').innerText += text;
		openPage('Display');

	} else if (run[0] === 'modvar'){
		gamedat.vars[run[1][0]][run[1].slice(2)] += run[2];
		console.log('Mod Var: ' + run[1] + ' ' + run[2]);

	} else if (run[0] === 'setvar') {
		gamedat.vars[run[1][0]][run[1].slice(2)] = run[2];
		console.log('Set Var: ' + run[1] + ' ' + run[2]);

	} else if (run[0] === 'loading') {
		loadingScreen(run[1]);

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
	for (let i=0; i<gamedat[chptr].Script[bkmk].length; i++) {
		let run = gamedat[chptr].Script[bkmk][i];
		console.log(run);
		executeRun(run);
	};
};