class Form {
    constructor() {
        this.input = createInput("Enter Name") 
        this.button = createButton("Play!")
        this.greeting = createElement('h3')
        this.title = createElement('h1');
        this.reset = createButton("RESET")
    }

    display() {
        this.title.html("MULTIPLAYER CAR RACING GAME")
        this.title.position(displayWidth/2 - 100,20)
        this.input.position(250, 250)
        this.button.position(250, 300)
        this.reset.position(0, 10)
        this.button.mousePressed(()=> {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            this.greeting.html("HELLO " + player.name)
            this.greeting.position(150, 150);
            playerCount = playerCount + 1;
            player.index = playerCount;
            console.log("name");
            player.update();
            player.updateCount(playerCount)

        });
        this.reset.mousePressed(()=> {
            game.update(0)
            player.updateCount(0)

        });

         
    }

    hide() {
      this.input.hide()
      this.button.hide()
      this.greeting.hide()
      this.title.hide()
    }



}
