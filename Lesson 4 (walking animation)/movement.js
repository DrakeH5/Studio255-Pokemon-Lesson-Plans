document.addEventListener('keydown', function(e) {
    if(e.keyCode == 87 || e.keyCode == 38){
        player.y-=2;
        player.direction = 200;
        player.momentum = -1;
    }
    if(e.keyCode == 83 || e.keyCode == 40){
        player.y+=2;
        player.direction = 10;
        player.momentum = 1;
    }
    if(e.keyCode == 65 || e.keyCode == 37){
        player.x-=2;
        player.direction = 75;
        player.momentum = -2;
    }
    if(e.keyCode == 68 || e.keyCode == 39){
        player.x+=2;
        player.direction = 140;
        player.momentum = 2;
    }
})