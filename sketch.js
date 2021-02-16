
var database
var gameState = 0
var playerCount = 0
var form
var player
var game 
var allPlayers
var car1, car2, car3, car4
var cars
var car1Image, car2Image, car3Image, car4Image
var trackImage
var groundImage
var rank = 0


function preload(){
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    car3Image = loadImage("images/car3.png")
    car4Image = loadImage("images/car4.png")
    trackImage = loadImage("images/track.jpg")
    groundImage = loadImage("images/ground.png")
}

function setup(){
    createCanvas(displayWidth - 50,displayHeight - 50);
    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
}

function draw() {
   
    if(playerCount==4){
        gameState = 1;
    }

    if(gameState===1) {
        clear()
        game.play()
    }

    if(gameState===2) {
        game.end()
    }


 }






