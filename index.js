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
	
	var inkworkpages = ['Inkwork', 'SobbleBot_Inkwork', 'Ikagaku_Inkwork', 'Biti_Inkwork'];
	var cascadepages = ['Cascade'];
	var revpages = ['Review', 'RMovie', 'RGame', 'RTele', 'ReviPost'];

	if (inkworkpages.includes(pageName)) {
		document.body.style.backgroundImage = "url('img/backDARK.png')";
	} else if (cascadepages.includes(pageName)) {
		document.body.style.backgroundImage = "url('img/cascadeback.png')";
	} else if (revpages.includes(pageName)) {
		document.body.style.backgroundImage = "url('img/reviewback.png')";
	} else {
		document.body.style.backgroundImage = "url('img/dragonbone_blue.png')";
	}
}

const blogposts = [
	{
		title: 'Welcome!',
		date: 'May 27th, 2019',
		text: 'Hey! Ben Squidji here, and this is the first Blog Post on the new Website v6.0.0 Dragon Roll!\
		I plan to post on the blog every month or two, or whenever I feel like I have something important to say\
		or want to talk about. Anyways, theres a ton of stuff I added to the website I\'d like to discuss. First, Cascade\
		(which can be found in the Archive) is a CSS, HTML, and JS test collection, with random stuff that doesnt fit\
		in the website but I thought looked cool nonetheless. I also included Memes By Me, a collection of memes that were\
		made by me. Pretty straght foward. In general, almost everything has been remodeled to be more user friendly and\
		unique. Some small things include: reviews being ordered from best to worst, being able to see pictures of every\
		site version in Time Machine, Inkwork projects including documentation, and so much more.\nAnyway, that just\
		a brief synopsis of some of the stuff added and changed in this new version.\nThanks for reading,\nBen Squidji'
	}
]

function openPost(post_id) {
	document.getElementById('blogpost_title').innerText = blogposts[post_id].title;
	document.getElementById('blogpost_date').innerText = blogposts[post_id].date;
	document.getElementById('blogpost_desc').innerText = blogposts[post_id].text;
	openPage('BlogPost');
}

const timelogs = {
	'6.0' : {
		'title' : 'Dragon Roll v6.0',
		'release' : 'May 27th, 2019',
		'image_url' : 'img/v6.0.jpg',
		'link' : 'https://squidji.tk/',
		'logs' : [
			'New Logo',
			'Added Blog',
			'Removed About',
			'Remodeled Inkwork',
			'Remodeled Reviews',
			'Added Review Pages',
			'Remodeled Archive',
			'Remodeled TimeMachine',
			'Added Version Pages',
			'Added Cascade',
			'Remodeled Portfolio',
			'Remodeled Music',
			'Added Memes by Me',
			'Added Tier Lists',
			'Removed Twitter Bios',
			'Various Bug Fixes'
		]
	},
	'5.0' : {
		'title' : 'Unagi Roll v5.0',
		'release' : 'Feb. 17th, 2019',
		'image_url' : 'img/v5.0.jpg',
		'link' : 'http://inkwork.tk/timemachine/v5.0',
		'logs' : [
			'Completely New Design',
			'New Logo',
			'New Backdrop',
			'Added Art',
			'Added Twitter Bios',
			'Added Music I Like'
		]
	},
	'4.1' : {
		'title' : 'California Roll v4.1',
		'release' : 'Jan. 6th, 2019',
		'image_url' : 'img/v4.1.jpg',
		'link' : 'http://inkwork.tk/timemachine/v4.1.html',
		'logs' : [
			'New Animations',
			'Added Biti Homepage'
		]
	},
	'4.0' : {
		'title' : 'California Roll v4.0',
		'release' : 'Jan. 1st, 2019',
		'image_url' : 'img/v4.0.jpg',
		'link' : 'http://inkwork.tk/timemachine/v4.0.html',
		'logs' : [
			'New Design',
			'New Animations',
			'Updated Inkwork',
			'New Tag System',
			'Moved TimeMachine to Inkwork',
			'Added Fighters to SPECIAL: Super Smash Bros.'
		]
	},
	'3.3' : {
		'title' : 'Website v3.3',
		'release' : 'Dec. 29th, 2018',
		'image_url' : 'img/v3.3.jpg',
		'link' : 'http://inkwork.tk/timemachine/v3.3.html',
		'logs' : [
			'Added "Super Smash Bros." Section',
			'Added Biti',
			'Removed Twitter',
			'Removed Videos',
			'Bug Fixes'
		]
	},
	'3.2' : {
		'title' : 'Website v3.2',
		'release' : 'Dec. 2nd, 2018',
		'image_url' : 'img/v3.2.jpg',
		'link' : 'http://inkwork.tk/timemachine/v3.2.html',
		'logs' : [
			'Updated Mobile Website CSS',
			'Changed Domain from squidji.github.io to squidji.tk',
			'Added Music to Reviews'
		]
	},
	'3.1' : {
		'title' : 'Website v3.1',
		'release' : 'Dec. 1st, 2018',
		'image_url' : 'img/v3.1.jpg',
		'link' : 'http://inkwork.tk/timemachine/v3.1.html',
		'logs' : [
			'Added Twitter',
			'Updated Inkwork'
		]
	},
	'3.0' : {
		'title' : 'Website v3.0',
		'release' : 'Nov. 14th, 2018',
		'image_url' : 'img/v3.0.jpg',
		'link' : 'http://inkwork.tk/timemachine/v3.0.html',
		'logs' : [
			'Updated Colors',
			'New Toolbar',
			'New Easy to Use Design',
			'Updated Version History'
		]
	},
	'2.4' : {
		'title' : 'Website v2.4',
		'release' : 'Nov. 10th, 2018',
		'image_url' : 'img/v2.4.jpg',
		'link' : 'http://inkwork.tk/timemachine/v2.4.html',
		'logs' : [
			'Added Videos',
			'Added Youtube'
		]
	},
	'2.3' : {
		'title' : 'Website v2.3',
		'release' : 'Oct. 27th, 2018',
		'image_url' : 'img/v2.3.jpg',
		'link' : 'http://inkwork.tk/timemachine/v2.3.html',
		'logs' : [
			'Added Inkwork',
			'Moved Dungeons and Doggos to Inkwork',
			'Bug Fixes to TimeMachine',
			'Bug Fixes to Social Media'
		]
	},
	'2.2' : {
		'title' : 'Website v2.2',
		'release' : 'Oct. 20th, 2018',
		'image_url' : 'img/v2.2.jpg',
		'link' : 'http://inkwork.tk/timemachine/v2.2.html',
		'logs' : [
			'Added Panels Engine',
			'Added TV Shows to Reviews'
		]
	},
	'2.1' : {
		'title' : 'Website v2.1',
		'release' : 'Oct. 14th, 2018',
		'image_url' : 'img/v2.1.jpg',
		'link' : 'http://inkwork.tk/timemachine/v2.1.html',
		'logs' : [
			'Updated Buttons',
			'Time Machine for Dungeons & Doggos',
			'Made header picture home button',
			'Added Reviews',
			'Updated Headings'
		]
	},
	'2.0' : {
		'title' : 'Website v2.0',
		'release' : 'Oct. 12th, 2018',
		'image_url' : 'img/v2.0.jpg',
		'link' : 'http://inkwork.tk/timemachine/v2.0.html',
		'logs' : [
			'Updated header with picture',
			'Added color-changing bar',
			'Added Time Machine',
			'Changed \'Project Panels\' to Dungeons and Doggos'
		]
	},
	'1.4' : {
		'title' : 'Website v1.4',
		'release' : 'Sep. 29th, 2018',
		'image_url' : 'img/v1.4.jpg',
		'link' : 'http://inkwork.tk/timemachine/v1.4.html',
		'logs' : [
			'Removed \'Movies\'',
			'Updated Header',
			'Added \'Project Panels\''
		]
	},
	'1.3' : {
		'title' : 'Website v1.3',
		'release' : 'Sep. 3rd, 2018',
		'image_url' : 'img/v1.3.jpg',
		'link' : 'http://inkwork.tk/timemachine/v1.3.html',
		'logs' : [
			'Added \'Movies\'',
			'Added Github Link',
			'Added Background Image to Panels',
			'Added \'Version History\'',
			'Changed Instagram Link'
		]
	},
	'1.2' : {
		'title' : 'Website v1.2',
		'release' : 'Sep. 3rd, 2018',
		'image_url' : 'img/v1.2.jpg',
		'link' : 'http://inkwork.tk/timemachine/v1.2.html',
		'logs' : [
			'Changed Header Style',
			'Added Background Image'
		]
	},
	'1.1' : {
		'title' : 'Website v1.1',
		'release' : 'Aug. 14th, 2018',
		'image_url' : 'img/v1.1.jpg',
		'link' : 'http://inkwork.tk/timemachine/v1.1.html',
		'logs' : []
	},
	'1.0' : {
		'title' : 'Website v1.0',
		'release' : 'Aug. 10th, 2018',
		'image_url' : 'img/v1.0.jpg',
		'link' : 'http://inkwork.tk/timemachine/v1.0.html',
		'logs' : []
	}
}

function openTime(ver_id) {
	document.getElementById('TVersion').innerText = timelogs[ver_id].title;
	document.getElementById('TDate').innerText = timelogs[ver_id].release;
	document.getElementById('TImage').src = timelogs[ver_id].image_url;
	document.getElementById('TGo').setAttribute( 'onClick', 'window.open("' + timelogs[ver_id].link + '","_blank");' );
	let logi = '';
	for (let i=0; i<timelogs[ver_id].logs.length; i++) {
		logi += '<li>' + timelogs[ver_id].logs[i] + '</li>'
	}
	document.getElementById('TLogs').innerHTML = logi;
	openPage('TimeMachine-Version');
}

const reviews = {
	'CHRISPRATT2' : {
		'title' : 'THE LEGO MOVIE 2',
		'date' : 'May 25th, 2019',
		'img_url' : 'img/posters/secondpart.jpg',
		'post': 'Honestly an underated movie: hilarious, well made, good pacing, and a story that tries to be something\
		new instead of just trying to be the first movie again',
		'rati' : ' 9/10',
		'backpage' : 'RMovie'
	},
	'STARKDED' : {
		'title' : 'AVENGERS ENDGAME',
		'date' : 'May 25th, 2019',
		'img_url' : 'img/posters/endgame.jpg',
		'post': 'A thrilling movie that can keep you on the edge of your seat for the whole three hours.',
		'rati' : ' 10/10',
		'backpage' : 'RMovie'
	},
	'YOUONLYZINGONCE' : {
		'title' : 'HOTEL TRANSYLVANIA 3',
		'date' : 'May 25th, 2019',
		'img_url' : 'img/posters/tr3.jpg',
		'post': 'Horrible pacing, sometimes contrasting character design, and a message that completely\
		goes against the first movie.',
		'rati' : ' 4/10',
		'backpage' : 'RMovie'
	},
	'PLANTGANG' : {
		'title' : 'SUPER SMASH BROS. ULTIMATE',
		'date' : 'May 25th, 2019',
		'img_url' : 'img/posters/ultimate.jpg',
		'post': 'Truly the best Smash Bros. game ever: a breathtaking roster, fun single player, and\
		enough options in how you play to never get bored.',
		'rati' : ' 10/10',
		'backpage' : 'RGame'
	},
	'ITWASMEDIO' : {
		'title' : 'JOJO\'S BIZZARE ADVENTURE PHANTOM BLOOD',
		'date' : 'May 25th, 2019',
		'img_url' : 'img/posters/phantomblood.jpg',
		'post': 'Very good once you get halfway in. Has a bit of a rocky start.',
		'rati' : ' 7/10',
		'backpage' : 'RTele'
	}
}

function openRev(rev_id) {
	document.getElementById('RevTitle').innerText = reviews[rev_id].title;
	document.getElementById('RevDate').innerText = reviews[rev_id].date;
	document.getElementById('RevImage').src = reviews[rev_id].img_url;
	document.getElementById('RevPost').innerText = reviews[rev_id].post;
	document.getElementById('RevBackCusti').setAttribute( 'onClick', 'openPage("' + reviews[rev_id].backpage + '");' );
	document.getElementById('RevTitle').setAttribute( 'rati', reviews[rev_id].rati);
	openPage('ReviPost');
}

function toggleBar() {
	var ml = document.getElementById("myLinks");
	if (ml.style.display === "block") {
		ml.style.display = "none";
	} else {
		ml.style.display = "block";
	}
}