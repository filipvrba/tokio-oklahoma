import * as gameObjects from "../../gameObjects.js";

class Main extends Phaser.Scene
{
    constructor ()
    {
        super( 'main' );
    
    }

    init() {

        this.background = new gameObjects.Background( this, 'background' );
        this.background.setSpeed( 20 );
        
        const obstacles = new gameObjects.Obstacles( this, 'obstacles' );

    }

    getBackground() {

        return this.background;

    }

    create() {

       

    }
}

export { Main };