
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