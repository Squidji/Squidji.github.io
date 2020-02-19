function daimei() {
	let res = '';
	var consonants = [
		'k', 'r', 'l', 'n', 'f', 'd', 'h', 't', 'v', 's', ''
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
}

function multidaimei() {
	let res = '';
	for (let i=0; i<10; i++) {
		res += daimei() + '\n';
	};
	document.getElementById('DaimeiResults').innerText=res;
}

function tamashi() {}