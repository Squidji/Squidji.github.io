function openTab(tabname) {
	let alltabs
	alltabs = document.getElementById('Tabs').children;
	for (let i=0; i<alltabs.length; i++) {
		alltabs[i].setAttribute('f', 'n');
	};
	alltabs = document.getElementById('NavTabs').children;
	for (let i=0; i<alltabs.length; i++) {
		alltabs[i].setAttribute('f', 'n');
	};
	document.getElementById('Tab_' + tabname).setAttribute('f', 'y');
	document.getElementById('Nav_' + tabname).setAttribute('f', 'y');
	alltabs = document.getElementsByClassName('tabpage');
	for (let i=0; i<alltabs.length; i++) {
		alltabs[i].style.display = 'none';
	};
	document.getElementById('Page_' + tabname).style.display = 'block';
	closeNav();
}

function openWork(workname) {
	if (document.getElementById(workname).style.display == 'block') {
		document.getElementById(workname).style.display = 'none';
	} else {
		let allworks = document.getElementsByClassName('workp');
		for (let i=0; i<allworks.length; i++) {
			allworks[i].style.display = 'none';
		}
		document.getElementById(workname).style.display = 'block';
	}
}

function openLog(i) {
	document.getElementById('ShortLogs_H1').innerHTML = logData[i].title;
	document.getElementById('ShortLogs_H2').innerHTML = 'Log ' + i + ' - ' + logData[i].date;
	document.getElementById('ShortLogs_P').innerText = logData[i].text;

	let alltabs = document.getElementsByClassName('tabpage');
	for (let i=0; i<alltabs.length; i++) {
		alltabs[i].style.display = 'none';
	};
	document.getElementById('Page_ShortLogs').style.display = 'block';
}

function openNav() {
	document.getElementById('Nav').style.width = '100%';
}
function closeNav() {
	document.getElementById('Nav').style.width = '0';
}