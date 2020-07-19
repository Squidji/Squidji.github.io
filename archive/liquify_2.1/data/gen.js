function saveFavorite(click) {
	let mach = click.target.mach;
	if (window.localStorage.getItem(mach) === null) {
		window.localStorage.setItem(mach, '[]')};

	let all = JSON.parse(window.localStorage.getItem(mach));

	if (click.target.classList.contains('saved')) {
		click.target.classList.remove('saved');
		all = all.filter(e => e !== click.target.innerText);
		all = JSON.stringify(all);
		window.localStorage.setItem(mach, all);
	} else {
		click.target.classList.add('saved');
		all.push(click.target.innerText);
		all = JSON.stringify(all);
		window.localStorage.setItem(mach, all);
	};

	let fav = document.getElementById('favorites');
	if (window.getComputedStyle(fav).display === 'block' && fav.classList.contains(mach)) {
		updateFavlist();
	};
};

function updateFavlist() {
	let mach = document.getElementById('favorites').getAttribute('class');
	let all = JSON.parse(window.localStorage.getItem(mach));
	document.getElementById('favlist').innerHTML = '';
	for (let i=0; i<all.length; i++) {
		let temp = document.createElement('p');
		temp.innerText = all[i];
		temp.mach = mach;
		temp.classList.add('saved');
		temp.onclick = saveFavorite;
		document.getElementById('favlist').appendChild(temp);
	};
	if (all.length === 0) {
		document.getElementById('favlist').innerHTML = 'You have no favorites.';
	};
};

function displayFav(mach) {
	document.getElementById('favorites').style.display = 'block';
	document.getElementById('favorites').classList = [mach];
	updateFavlist();
};



function daimei() {
	let res = '';
	var consonants = [
		'k', 'r', 'l', 'n', 'f', 'd', 'h', 't', 't', 'v', 's', '', ''
	];
	var vowels = [
		'a', 'e', 'i', 'o', 'u'
	];
	let startvow = Math.floor(Math.random() * 2);
	if (startvow == 1) {
		res+=vowels[Math.floor(Math.random() * vowels.length)];
	};
	let pairs = Math.floor(Math.random() * 2) + 2; // 2-4 pairs
	for (let i=0; i<pairs; i++) {
		let rancon = Math.floor(Math.random() * consonants.length);
		let ranvow = Math.floor(Math.random() * vowels.length);
		res += consonants[rancon] + vowels[ranvow];
	};
	let endcon = Math.floor(Math.random() * 2);
	if (endcon == 1) {
		res+=consonants[Math.floor(Math.random() * (consonants.length - 1))];
	};
	res=res.charAt(0).toUpperCase() + res.slice(1);
	return res;
};

function multidaimei() {
	let res = {};
	document.getElementById('DaimeiResults').innerHTML = '';
	for (let i=0; i<7; i++) {
		let temp = document.createElement('p');
		temp.classList.add('genres');
		temp.innerText = daimei();
		temp.onclick = saveFavorite;
		temp.mach = 'favDaimei'
		document.getElementById('DaimeiResults').appendChild(temp);
	};
};


function username() {
	var nou = [
		'control', 'piano', 'salad', 'lady', 'pizza', 'depression', 'coffee', 'tea', 'teatime', 'dinner', 'disk',
		'sausage', 'tiger', 'puppy', 'trickster', 'whale', 'racoon', 'box', 'sword', 'dugong', 'frog', 'wolf',
		'fish', 'tape', 'camera', 'cracker', 'rubberband', 'candle', 'soap', 'dictionary', 'spatula', 'eraser',
		'cowboy', 'domino', 'glue', 'man', 'maplesyrup', 'tree', 'leaf', 'weed', 'mop', 'cement', 'radio', 'key',
		'pocket', 'needle', 'banana', 'hammer', 'book', 'sofa', 'bullet', 'gun', 'jam', 'jar', 'chocolates', 'light',
		'pants', 'bed', 'baloon', 'robot', 'brick', 'gamer', 'dragon', 'raptor', 'cookie', 'king', 'payback', 'toe',
		'hamster', 'bowl', 'mouse', 'pillow', 'scallop', 'rabbit', 'thief', 'ring', 'flag', 'car', 'soda', 'sailboat',
		'boat', 'wagon', 'money', 'beef', 'thermostat', 'sponge', 'sex', 'condom', 'oppai', 'regret', 'sunlight', 
		'stripper', 'weather', 'lobster', 'queen', 'emperor', 'mother', 'father', 'butler', 'wood', 'tsundere',
		'catgirl', 'nyandere', 'bakadere', 'troll', 'monster', 'ghost', 'diner', 'floyd', 'miracle', 'dream',
		'machine', 'dust', 'polygon', 'ocean', 'snow', 'sky', 'water', 'cave', 'oxygen', 'hyrdogen', 'icecream',
		'river', 'jalepeno', 'café', 'baguette', 'ocean', 'loop', 'wish', 'ice', 'dance', 'nostalgia', 'weeb',
		'goose', 'taco', 'burrito', 'cannoli', 'pastry', 'calzone', 'sandwich', 'peanut', 'cheese', 'ramen',
		'steak', 'noodle', 'soup', 'mushroom', 'rice', 'cake', 'chicken', 'dumpling', 'pork', 'sushi', 'quesadilla',
		'lime', 'chips', 'tomato', 'dough', 'pussy', 'dick', 'ass', 'tiddies', 'heat', 'donut', 'umbrella', 'insanity',
		'poet', 'program', 'cola', 'boob', 'boobs', 'prison', 'sodium', 'tin', 'sulfur'
	];
	var ers = [
		'fucker', 'eater', 'thrower', 'holder', 'king', 'lord', 'can', 'jar', 'murderer', 'theif', 'kidnapper',
		'crafter', 'god', 'conqueror', 'boat', 'wagon', 'photographer', 'visualizer', 'developer', 'caretaker',
		'engineer', 'gardener', 'sorcerer', 'market', 'seller', 'bus', 'pizza', 'ender', 'cleaner', 'queen',
		'emperor', 'mother', 'father', 'farmer', 'gaming', 'racer', 'diner', 'dream', 'dust', 'ocean', 'connector',
		'flow', 'noises', 'feet', 'hands', 'nose', 'master', 'circulation', 'river', 'store', 'shop', 'jungle', 
		'song', 'duet', 'vision', 'watcher', 'dance', 'nostalgia', 'weeb', 'calzone', 'sandwich', 'president',
		'priest', 'bishop', 'ramen', 'soup', 'cake', 'kebab', 'porn', 'sex', 'sushi', 'scientist', 'science',
		'chef', 'painter', 'pussy', 'dick', 'ass', 'tiddies', 'humper', 'impregnation', 'hole', 'party', 'ceremony',
		'frustration', 'insanity', 'poet', 'discovery', 'explorer', 'loser', 'breasts', 'fondler', 'groper', 'prison',
		'evangelion', 'reaction'
	];
	var adj = [
		'red', 'blue', 'green', 'purple', 'orange', 'yellow', 'aqua', 'royal', 'grassy', 'gross', 'posionous', 'delicious',
		'teal', 'sunlight', 'mint', 'coral', 'future', 'sore', 'terrible', 'uneasy', 'fruity', 'nutty', 'horny',
		'angry', 'happy', 'sad', 'shy', 'quiet', 'loud', 'fast', 'slow', 'thin', 'fat', 'neat', 'untidy', 'lazy', 'social',
		'fresh', 'lucky', 'short', 'tall', 'smooth', 'rushed', 'rough', 'cool', 'hot', 'scalding', 'burning', 'freezing',
		'honest', 'dishonest', 'rotten', 'flat', 'shiny', 'flashy', 'jealous', 'annoying', 'bitter', 'hollow', 'new', 'old',
		'odd', 'normal', 'strange', 'tiny', 'huge', 'chocoloate', 'endless', 'afterschool', 'morning', 'nightime', 'easy',
		'hard', 'tight', 'loose', 'strong', 'weak', 'clueless', 'smart', 'cyber', 'holy', 'unholy', 'anti', 'iron', 'gold',
		'silver', 'metal', 'stone', 'diamond', 'wooden', 'chill', 'ghost', 'hyper', 'pink', 'white', 'black', 'solid',
		'open', 'closed', 'surged', 'flickering', 'static', 'baby', 'sudden', 'lone', 'far', 'distant', 'future', 'vivid',
		'wondering', 'wandering', 'thinking', 'live', 'master', 'new', 'seaside', 'floating', 'rainy', 'sunny', 'bright', 
		'dark', 'minty', 'walking', 'early', 'late', 'innocent', 'guilty', 'stylish', 'ugly', 'afternoon', 'midnight',
		'summer', 'spring', 'winter', 'autumn', 'icy', 'groovy', 'dancing', 'french', 'american', 'british', 'english',
		'german', 'japanese', 'indian', 'chinese', 'italian', 'canadian', 'mexican', 'spanish', 'brazilian', 'polish',
		'irish', 'portuguese', 'korean', 'cuban', 'chewy', 'russian', 'norwegian', 'greek', 'sexy', 'horrible', 'awful',
		'lime', 'fried', 'cooked', 'doughy', 'pintsized', 'pornographic', 'saturated', 'humping', 'caged', 'canned',
		'simple', 'complex', 'overcomplicated', 'virtual', 'ruinous', 'drunk', 'alcoholic', 'neon', 'titanium', 'nitrogen',
		'tin', 'sulfur', 'chemical', 'toxic', 'gaming', 'swine', 'wet', 'dry', 'soaking', 'flooded', 'crusty', 'moist'
	];

	let n = nou[Math.floor(Math.random() * nou.length)];
	let e = ers[Math.floor(Math.random() * ers.length)];
	let a = adj[Math.floor(Math.random() * adj.length)];
	let i = '';

	// Is there an "er" in the username?
	let erin = Math.floor(Math.random() * 4);
	if (erin !== 0) {
		e = '';
	};

	// Capitalizations?
	let capi = Math.floor(Math.random() * 3);
	if (capi === 1) {
		n = n.charAt(0).toUpperCase() + n.slice(1);
		if (e !== '') {e = e.charAt(0).toUpperCase() + e.slice(1);}
	} else if (capi === 2) {
		n = n.charAt(0).toUpperCase() + n.slice(1);
		a = a.charAt(0).toUpperCase() + a.slice(1);
		if (e !== '') {e = e.charAt(0).toUpperCase() + e.slice(1);}
	};

	// No adj?
	let adji = Math.floor(Math.random() * 4);
	if (adji === 0) {
		adj = '';
	};

	// Number at end?
	let numi = Math.floor(Math.random() * 7);
	if (numi === 2) {
		i = Math.floor(Math.random() * 100);
	};
	if (numi === 3 || numi === 4) {
		i = Math.floor(Math.random() * 1000);
	};
	if (numi === 5) {i = 69};
	if (numi === 6) {i = 420};

	let res = a + n + e + i;

	let specials = Math.floor(Math.random() * 10000000);
	if (specials === 0) {res = 'irothecookielord'};
	if (specials === 1) {res = 'Merel'};
	if (specials === 2) {res = 'Chris64'};
	if (specials === 3) {res = 'Aeraki'}

	return res;

};

function multiusername() {
	let res = {};
	document.getElementById('UsernameResults').innerHTML = '';
	for (let i=0; i<7; i++) {
		let temp = document.createElement('p');
		temp.classList.add('genres');
		temp.innerText = username();
		temp.onclick = saveFavorite;
		temp.mach = 'favUsername'
		document.getElementById('UsernameResults').appendChild(temp);
	};
};