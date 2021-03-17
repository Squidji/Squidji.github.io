const canvas = document.getElementById('graphics');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function clear(color) {
	if (color === undefined) {
		ctx.clearRect(0, 0, width, height); 
	} else {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, width, height);
	};
};

var paths = [
	/*{
		velocity: [-2, 0],
		color: [0, 50, 65, 1],
		x: width, y: (height/2)-2,
		width: 6, height: 6,
		shadowlength: 4
	}*/
]


function _update() {
	// Draw Environment
	clear();

	for (let i=0; i<paths.length; i++) {
		// Move Dot
		let p = paths[i];
		p.x += p.velocity[0];
		p.x -= p.velocity[1];
		
		// Draw Shadowpath
		for (let j=1; j<p.shadowlength; j++) {
			let c = 'rgb('+p.color[0]+','+p.color[1]+','+p.color[2]+','+(p.color[3]-(.25*j))+')';
			ctx.fillStyle = c;
			ctx.fillRect(p.x-(p.velocity[0]*(p.width*j)), p.y-(p.velocity[1]*(p.height*j)), p.width, p.height);
		};

		if (p.x > width + p.velocity[0]*(p.width*p.shadowlength)) {
			paths.splice(i,1);
		};

		// Draw Dot
		let c = 'rgb('+p.color[0]+','+p.color[1]+','+p.color[2]+','+p.color[3]+')';
		ctx.fillStyle = c;
		ctx.fillRect(p.x, p.y, p.width, p.height);
	};

	// Continue
	requestAnimationFrame(_update);
};
  
_update();

window.setInterval(function() {
	let randomval = Math.floor(Math.random() * 2);

	let hvs = Math.ceil(height/5);

	let startx = 0 /*document.getElementById('vessel').offsetWidth - 10
	if ($('body').hasClass('viewcanvas')) {
		startx = 0;
	};*/

	for (let i=0; i<randomval; i++) {
		let randomy = Math.floor(Math.random() * hvs)*5;
		paths.push({
			velocity: [5, 0],
			//color: [0, 50, 65, 1],
			color: [114, 221, 254, 1],
			x: startx, y: randomy,
			width: 5, height: 5,
			shadowlength: 4
		});
	};
}, 100);