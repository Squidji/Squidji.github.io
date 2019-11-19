function openPage(pagename, start=true, tabs=true) {
	let allpages = document.getElementsByClassName('page');
	for (let i=0; i<allpages.length; i++) {
		allpages[i].style.display = 'none';
	};
	document.body.scrollTop = 0;
	if (start) {
		document.getElementById('Start').style.display = 'block';
	};
	if (tabs) {
		document.getElementById('Tabs').style.display = 'block';
	};
	document.getElementById(pagename).style.display = 'block';
};