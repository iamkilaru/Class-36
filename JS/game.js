class Game{
    constructor(){}

    //reads the value of gameState from the database
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            GS = data.val();
        });
    }

    //update or write the value of gameState
    update(state){
        database.ref("/").update({
            gameState: state
        });
    }
    
    
    //Wait state - 0
    async start(){
        if(GS===0){
            player = new Player();
            var PCRef = await database.ref("playerCount").once("value");
            if(PCRef.exists()){
                PC = PCRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
    
    }

    //PLAY STATE - 1
    play(){
        form.hide();

        textSize(30);
        text("Game Start",120,100);

        Player.getPlayerInfo(); //called by the class - static function

        if(allPlayers !== undefined){
            var textPOS = 130;
            for(var i in allPlayers){
                if(i === "player" +  player.index){
                    fill("red");
                }
                else{
                    fill(0);
                }
                textPOS += 20;
                textSize(15);
                text(allPlayers[i].name + ": " + allPlayers[i].distance, 120,textPOS);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}


/*

PlayerName: PlayerDistance

function name(){}

name();

"/" --> refers to the main database inside which the values are created/contained
.set() ==> .update()



for(var i = 0; i<length; i++){}

for/in loop statement

for(var in array){}

*/