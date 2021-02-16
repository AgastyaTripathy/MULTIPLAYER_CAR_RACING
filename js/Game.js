class Game {
    constructor() {}

     getState() {
         var gameStateRef = database.ref("gameState")
         gameStateRef.on("value", function(data){
             gameState = data.val()
         })
     }
    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    async start() {
        if(gameState===0) {
            player = new Player()
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
            player.getCount()}
            form = new Form()
            form.display()
        }   
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        car1.addImage(car1Image)
        car2.addImage(car2Image)
        car3.addImage(car3Image)
        car4.addImage(car4Image)
        cars =  [car1, car2, car3, car4]
    }

    play() {
        form.hide();
        text("Game Start", 150, 100);
        Player.getPlayerInfo()
        //player.getRank()
        if(allPlayers!==undefined){
            background(groundImage);
            image(trackImage, 0, -displayHeight*4, displayWidth - 50, displayHeight*5);
            var index = 0;
            var x = 200
            var y;
            var displayPosition = 150
            for(var plr in allPlayers){
                index = index + 1;
                x += 200;
                y = displayHeight - 50 - allPlayers[plr].distance;
                cars[index - 1].x = x
                cars[index - 1].y = y
                if(plr==="player" + player.index){
                    cars[index - 1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index - 1].y
                    stroke("Red")
                    ellipse(x, y, 60, 60)
                }
            //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 125, displayPosition);
            //displayPosition = displayPosition + 20
            }
        }
        if(keyDown(UP_ARROW)&& player.index!==null){
            player.distance += 30
            player.update()
        }
        if(player.distance > 4290) {
            gameState = 2
            rank+= 1
            player.rank = rank
            player.updateRank(rank)
}
          drawSprites()
    }
    
    end(){
        console.log("Game Ended")
        console.log(player.rank)
    }
    reset(){
        
    }
}



