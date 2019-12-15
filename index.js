let pagehistory = {
	'Current': undefined,
	'Previous': undefined,
	'Log': undefined
}

function openPage(pagename) {
	pagehistory.Previous = pagehistory.Current;
	pagehistory.Current = pagename;
	let allpages = document.getElementsByClassName('page');
	for (let i=0; i<allpages.length; i++) {
		allpages[i].style.display = 'none';
	};
	window.scrollTo(0,0);
	document.getElementById('Start').style.display = 'block';
	document.getElementById('Tabs').style.display = 'block';
	document.getElementById(pagename).style.display = 'block';
};

function openLog(logid) {
	openPage('Log');
	pagehistory.Log = logid;
	document.getElementById('logTitle').innerText = logData[logid].title;
	document.getElementById('logDate').innerText = 'Log ' + 
	logid + ' - ' + logData[logid].date;
	document.getElementById('logBody').innerText = logData[logid].text;
	if (logid > 0) {
		document.getElementById('logPrev').innerHTML = '<i class="fas fa-angle-double-left"></i>'
		 + 'Log ' + (logid - 1) + ' - ' + logData[logid - 1].title;
		 document.getElementById('logPrev').onclick = prevlog;
	} else {
		document.getElementById('logPrev').innerHTML = 'No Previous Logs';
		document.getElementById('logPrev').onclick = null;
	}
	if (logid !== Math.max(...Object.keys(logData)) ) {
		document.getElementById('logNext').innerHTML = 'Log ' + (logid + 1) + ' - ' + logData[logid + 1].title +
		'<i class="fas fa-angle-double-right"></i>';
		document.getElementById('logNext').onclick = nextlog;
	} else {
		document.getElementById('logNext').innerHTML = 'No Next Logs';
		document.getElementById('logNext').onclick = null;
	}
};

function nextlog() {
	let buffer = pagehistory.Previous;
	openLog(pagehistory.Log + 1);
	pagehistory.Previous = buffer;
};
function prevlog() {
	let buffer = pagehistory.Previous;
	openLog(pagehistory.Log - 1);
	pagehistory.Previous = buffer;
};