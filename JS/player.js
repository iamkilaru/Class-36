class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
    }

    //reads the value of playerCount from the database
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=>{
            PC = data.val();
        });
    }

    //update or write the value of player count into the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    //To update all the info of the player in the database
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }
    
    static getPlayerInfo(){
        var PIRef = database.ref("players");
        PIRef.on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}

/*
STATIC functions
    - common functions
    - not attached to a particular object
    - called by the class themselves rather than by the objects

players
    - player1
        -name
        -distance
    - player2


    player1/name
    players/player1/name
*/