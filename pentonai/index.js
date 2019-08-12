const gamedata = {

}

function startEngine() {
    let mass = ''
    for (let y=0; y<10; y++) {
        for (let x=0; x<18; x++) {
            mass += '<img id="' + y  + ',' + x +  '" src="tile.png">';
        }
        mass += '<br>';
    }
    document.getElementById('ImagePlane').innerHTML = mass;
}