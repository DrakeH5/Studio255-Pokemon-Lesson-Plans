
var Tree = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = tileSize;
    this.height = tileSize;
    this.update = function(){
        ctx.drawImage(document.getElementById("tree"), x+globalPos[1], y+globalPos[0], this.width, this.height)
    }
}

var Path = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = tileSize;
    this.height = tileSize;
    this.update = function(){
        ctx.drawImage(document.getElementById("path"), x+globalPos[1], y+globalPos[0], this.width, this.height)
    }
}

var Grass = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = tileSize;
    this.height = tileSize;
    this.update = function(){
        ctx.drawImage(document.getElementById("grass"), x+globalPos[1], y+globalPos[0], this.width, this.height)
    }
}


var possiblePokemonSpawn = ["Bulbasaur"]
for(var i=0; i<3; i++){
    possiblePokemonSpawn.push(false)
}
var HighGrass = function(x, y) {
    this.x = x+(tileSize/4.5);
    this.y = y+(tileSize/4.5);
    this.width = tileSize/1.5;
    this.height = tileSize/1.5;
    this.pokemonHiding = possiblePokemonSpawn[Math.floor(Math.random() * possiblePokemonSpawn.length)]
    this.update = function(){
        ctx.drawImage(document.getElementById("highGrass"), this.x+globalPos[1], this.y+globalPos[0], this.width, this.height)
        if(this.pokemonHiding
        && checkCollision(player.x, player.y, 30, 30, this.x+globalPos[1], this.y+globalPos[0], this.width, this.height)){
            console.log("Hidden " + this.pokemonHiding)
        }
    }
}