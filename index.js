function openPage(pageName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("page");
	
	document.getElementById("myLinks").style.display = 'none';
	
	//Set all of the pages to invisible
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	// Scroll to the top of the page
	document.body.scrollTop = document.documentElement.scrollTop = 0;

	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
	
	if (pageName == 'Inkwork') {
		document.body.style.backgroundImage = "url('img/backDARK.png')";
	} else {
		document.body.style.backgroundImage = "url('img/back.png')";
	}
}

function toggleBar() {
	var ml = document.getElementById("myLinks");
	if (ml.style.display === "block") {
		ml.style.display = "none";
	} else {
		ml.style.display = "block";
	}
}