var worldObject = []

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
                }
            }
        }
    }
}, 100)
