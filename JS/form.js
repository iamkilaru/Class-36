class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);
        
        this.input.position(130,160);
        this.button.position(250,200);
        
        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                PC++;
                player.index = PC;
                player.update();
                player.updateCount(PC);
                this.greeting.html("Hello " + player.name);
                this.greeting.position(130,160);
            }
        );
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

}

/*

ARROW Function - binds the function to the original object which calls
()=>{

}


HTML :
    1. head --> sources/scripts/libraries
    2. body --> visible content (sketch.js)

BODY:

1. Headings of different sizes - h1, h2, .... h6
2. Input
3. this.button: play this.button

Document Object Model(DOM) --> p5 Dom Library

1. Creatimng element
2. Deciding the html content for it
3. Positioning it
*/