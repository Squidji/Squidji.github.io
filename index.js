function toggleTheme() {
	$('body').toggleClass('darktheme');

	if ($('body').hasClass('darktheme')) {
		$('link[rel=icon]').attr('href', './icon_dark.ico');
		localStorage.setItem('darktheme', 'true');
	} else {
		$('link[rel=icon]').attr('href', './icon_light.ico');
		localStorage.setItem('darktheme', 'false');
	};
};

function toggleViewer() {
	$('body').toggleClass('viewcanvas');
};