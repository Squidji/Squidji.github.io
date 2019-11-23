function openPage(pagename) {
	let allpages = document.getElementsByClassName('page');
	for (let i=0; i<allpages.length; i++) {
		allpages[i].style.display = 'none';
	};
	document.body.scrollTop = 0;
	document.getElementById('Start').style.display = 'block';
	document.getElementById('Tabs').style.display = 'block';
	document.getElementById(pagename).style.display = 'block';
};

function openLog(logid) {
	openPage('Log');
	document.getElementById('logTitle').innerText = logData[logid].title;
	document.getElementById('logDate').innerText = logData[logid].date;
	document.getElementById('logBody').innerText = logData[logid].text;
};