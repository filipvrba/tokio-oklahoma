import * as gameObjects from "../../gameObjects.js";

class Main extends Phaser.Scene
{
    constructor ()
    {
        super( 'main' );
    
    }

    init() {

        const background = new gameObjects.Background( this, 'background' );
        background.setSpeed( 20 );
        
        const obstacles = new gameObjects.Obstacles( this, 'obstacles' );

    }

    create() {

       

    }
}

export { Main };