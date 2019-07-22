let defaultUrl = window.location.href;

function openPage(page_id, urladd=true) {
	if (urladd===true) { window.location.replace(defaultUrl + '#' + page_id); }
	if (page_id === 'Start') { window.location.replace(defaultUrl); }
	let tabcontent = document.getElementsByClassName('page');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	document.getElementById('Start').style.display = 'block';
	document.getElementById(page_id).style.display = 'block';
};

// https://aeraki.tk/#7.0TMCHN
// https://aeraki.tk/#5/27/19BLG
// https://aeraki.tk/#infinitywarRVW

function findTag() {
	if (window.location.href.endsWith('#About')) {
		openPage('About', false);
	} else if (window.location.href.endsWith('#Blog')) {
		openPage('Blog', false);
	} else if (window.location.href.endsWith('#Projects')) {
		openPage('Projects', false);
	} else if (window.location.href.endsWith('#Reviews')) {
		openPage('Reviews', false);
	} else if (window.location.href.endsWith('BLG')) {
		openPage('Blog', false);
	} else if (window.location.href.endsWith('RVW')) {
		openPage('Reviews', false);
	}
}