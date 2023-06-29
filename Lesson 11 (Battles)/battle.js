battleCanvas = document.getElementById("battleCanvas")
bCtx = battleCanvas.getContext("2d")

function drawBattle(pokemon){
    battleCanvas.width = battleCanvas.width
    bCtx.drawImage(player.pokemon.img, 30, canvas.height-50, 50, 50)
    bCtx.drawImage(pokemon.img, canvas.width-60, 0, 50, 50)
    bCtx.font = "20px Arial";
    bCtx.fillText(player.pokemon.name, canvas.width/2-20, canvas.height-20);
    bCtx.fillText(pokemon.name, 5, 30);
    bCtx.fillText(player.pokemon.health, canvas.width-40, canvas.height-20);
    bCtx.fillText(pokemon.health, canvas.width-100, 30);
}

function AiAttack(poke1, poke2){
    attack = Math.floor(Math.random() * poke2.attacks.length)
    poke1.health-= poke2.attacks[attack][1]
    alert(poke2.attacks[attack][0])
    drawBattle(poke2)
    if(poke1.health > 0){
        setTimeout(function(){playerAttack(poke1, poke2)},500)
    }  else {
        setTimeout(function(){
            battleCanvas.style.zIndex = -1
        }, 2000)
    }
}

function playerAttack(player, enemy){
    options = "Which attack: \n";
    for(var i=0; i<player.attacks.length; i++){
        options += player.attacks[i][0] + "  \n"
    }
    attack = prompt(options)
    for(var i=0; i<player.attacks.length; i++){
        if(attack == player.attacks[i][0]){
            enemy.health -= player.attacks[i][1]
            drawBattle(enemy)
            if(enemy.health > 0){
                setTimeout(function(){AiAttack(player, enemy)},500)
            }else {
                setTimeout(function(){
                    battleCanvas.style.zIndex = -1
                }, 2000)
            }
            return
        }
    }
    alert("invalid")
    playerAttack(player, enemy)
}

function startBattle(pokemon){
    drawBattle(pokemon)
    battleCanvas.style.zIndex = 1
    setTimeout(function(){playerAttack(player.pokemon, pokemon)},500)
}
