var ball, database, ballPos, Fosition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    ballPos=database.ref("ball/position");
    ballPos.on("value",readPos,Eerror);
}

function draw(){
    background("white");
    if(Fosition !== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-3,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(3,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-3);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+3);
        }
        drawSprites();
    }
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x: Fosition.x + x,
        y: Fosition.y + y
    });
}

function readPos(data){
    Fosition = data.val();
    ball.x = Fosition.x;
    ball.y = Fosition.y;
}

function Eerror(){
    console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
}