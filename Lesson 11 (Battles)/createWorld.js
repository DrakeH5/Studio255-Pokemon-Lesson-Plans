var worldObject = []
var worldSprite = []

var globalPos = [0, 0]

var results;
ImageParser("./map.png") 
var check4results = setInterval(function(){
    if(results != undefined){
        clearInterval(check4results);
        for(var i = 0; i<results.length; i++){
            for(var j = 0; j<results.length; j++){
                if(results[i][j][0] == 0 && results[i][j][1] == 255 && results[i][j][2] == 255) {
                    worldObject.push(new Tree(i*tileSize, j*tileSize))
                } else if(results[i][j][0] == 165 && results[i][j][1] == 121 && results[i][j][2] == 255) {
                    worldSprite.push(new Path(i*tileSize, j*tileSize))
                } else if(results[i][j][0] == 6 && results[i][j][1] == 109 && results[i][j][2] == 255) {
                    worldSprite.push(new Grass(i*tileSize, j*tileSize))
                } else if(results[i][j][0] == 164 && results[i][j][1] == 246 && results[i][j][2] == 255) {
                    worldSprite.push(new HighGrass(i*tileSize, j*tileSize, worldSprite.length))
                }
            }
        }
    }
}, 100)
