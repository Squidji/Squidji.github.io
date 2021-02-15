function toggleTheme() {
	$('body').toggleClass('darktheme');

	if ($('body').hasClass('darktheme')) {
		$('link[rel=icon]').attr('href', './icon_dark.ico');
	} else {
		$('link[rel=icon]').attr('href', './icon_light.ico');
	};
};

