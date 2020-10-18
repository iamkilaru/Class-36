var  database;
var PC, player, allPlayers, form;
var GS=0, game;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
}

function draw(){

   if(PC===4){
        game.update(1);  
   }
   if(GS===1){
        clear();
        game.play();
   }
}


/*
OOP ==> Real world objects:
        1. Properties
        2. Functions
    Design/Blueprint --> CLASS


1. Form
        - Input box (name)
        - Play button --> new Player object will be created

2. Player
        - Player Info (name, distance, rank, etc.)
        - Read the player count from database
        - Update the player count into the database

3. Game
        - Game states
                (Wait - 0, Play - 1, End - 2)
        - Wait --> Form on the screen & will be taking input
        - Read the game state from database
        - Update the game state into the database

*/