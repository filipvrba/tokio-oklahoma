import * as gameObjects from "../../gameObjects.js";

class Main extends Phaser.Scene
{
    constructor ()
    {
        super( 'main' );
    }

    init() {

        this.background = new gameObjects.Background( this );
        this.background.setSpeed( 20 );
        
        const obstacles = new gameObjects.Obstacles( this );
        obstacles.setSpeed( this.background.ground.getVelocity() );

        // TODO - create tomio player
        // const tomio = new gameObjects.Tomio( this );
    }

    getBackground() {

        return this.background;
    }

    create() {

       

    }
}

export { Main };