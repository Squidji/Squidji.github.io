var chptr = 0;
var bkmk = 0;

var savebuffer = {};
var choicebuffer = {};

function newGame() {
	savebuffer = gamedat.defaultvars;
	runChapter(0, 0);
};

function loadingScreen(text) {
	openPage('Loading');
	document.getElementById('LoadingText').innerHTML = 
	'<i class="fas fa-circle-notch fa-spin"></i> ' + text;
};

function randomNumber(min, max) {
	let range = (max + 1) - min;
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
		document.getElementById('DisplayChoices').innerHTML = '';
		console.clear();

	} else if (run[0] === 'write') {
		let text = '';
		for (let i=0; i<run[1].length; i++) {
			if (run[1][i][1] === '!') {
				let getvar = savebuffer[run[1][i][0]][run[1][i].slice(2)];
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
		savebuffer[run[1][0]][run[1].slice(2)] += run[2];
		console.log('Mod Var: ' + run[1] + ' ' + run[2]);

	} else if (run[0] === 'setvar') {
		savebuffer[run[1][0]][run[1].slice(2)] = run[2];
		console.log('Set Var: ' + run[1] + ' ' + run[2]);

	} else if (run[0] === 'loading') {
		loadingScreen(run[1]);

	} else if (run[0] === 'setrand') {
		let decis = undefined;
		if (run[2][0] === 'nm') { // Random Number
			decis = randomNumber(run[2][1], run[2][2]);
		} else if (run[2][0] === 'ch') {
			decis = run[2][1][randomNumber(0, run[2][1].length)];
		};
		savebuffer[run[1][0]][run[1].slice(2)] = decis;
		console.log('Set Var: ' + run[1] + ' ' + decis);

	} else if (run[0] === 'goto') {
		console.log('GOTO Chapter ' + run[1] + ' Bookmark ' + run[2]);
		runChapter(run[1], run[2]);

	} else if (run[0] === 'if') {
		let vari = savebuffer[run[1][0][0]][run[1][0].slice(2)];
		console.log(vari + ' ' + run[1][1] + ' ' + run[1][2]);
		if (run[1][1] === 'is') { // true
			if (vari === run[1][2]) {
				executeBuffer(run[2]);
			};

		} else if (run[1][1] === 'isnt') { // false
			if (vari !== run[1][2]) {
				executeBuffer(run[2]);
			};

		} else if (run[1][1] === 'gt') { // >
			if (vari > run[1][2]) {
				executeBuffer(run[2]);
			};

		} else if (run[1][1] === 'lt') { // <
			if (vari < run[1][2]) {
				executeBuffer(run[2]);
			};

		} else if (run[1][1] === 'gte') { // >=
			if (vari >= run[1][2]) {
				executeBuffer(run[2]);
			};

		} else if (run[1][1] === 'lte') { // <=
			if (vari <= run[1][2]) {
				executeBuffer(run[2]);
			};

		};

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
	for (let i=0; i<gamedat[chptr][bkmk].length; i++) {
		let run = gamedat[chptr][bkmk][i];
		executeRun(run);
	};
};