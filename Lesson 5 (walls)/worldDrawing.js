
var Tree = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.update = function(){
        ctx.drawImage(document.getElementById("tree"), x, y, this.width, this.height)
    }
}

trees = [
    new Tree(200, 10)
]
for(var i=0; i<5; i++){
    trees.push(new Tree(i*50, 100))
}