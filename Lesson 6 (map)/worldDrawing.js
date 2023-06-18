
var Tree = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = tileSize;
    this.height = tileSize;
    this.update = function(){
        ctx.drawImage(document.getElementById("tree"), x, y, this.width, this.height)
    }
}