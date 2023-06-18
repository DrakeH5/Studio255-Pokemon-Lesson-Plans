function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2){
    return !(x1+w1 < x2 || x2+w2 < x1 
    || y1+h1 < y2 || y2+h2 < y1)
}


document.addEventListener('keydown', function(e) {
    if(e.keyCode == 87 || e.keyCode == 38){
        for(var i=0; i<worldObject.length; i++){
            if(checkCollision(player.x, player.y-2, 30, 30, worldObject[i].x, worldObject[i].y, worldObject[i].width, worldObject[i].height)){
                return 
            }
        }
        player.y-=2;
        player.direction = 200;
        player.momentum = -1;
    }
    if(e.keyCode == 83 || e.keyCode == 40){
        for(var i=0; i<worldObject.length; i++){
            if(checkCollision(player.x, player.y+2, 30, 30, worldObject[i].x, worldObject[i].y, worldObject[i].width, worldObject[i].height)){
                return
            }
        }
        player.y+=2;
        player.direction = 10;
        player.momentum = 1;
    }
    if(e.keyCode == 65 || e.keyCode == 37){
        for(var i=0; i<worldObject.length; i++){
            if(checkCollision(player.x-2, player.y, 30, 30, worldObject[i].x, worldObject[i].y, worldObject[i].width, worldObject[i].height)){
                return
            }
        }
        player.x-=2;
        player.direction = 75;
        player.momentum = -2;
    }
    if(e.keyCode == 68 || e.keyCode == 39){
        for(var i=0; i<worldObject.length; i++){
            if(checkCollision(player.x+2, player.y, 30, 30, worldObject[i].x, worldObject[i].y, worldObject[i].width, worldObject[i].height)){
                return
            }
        }
        player.x+=2;
        player.direction = 140;
        player.momentum = 2;
    }
})