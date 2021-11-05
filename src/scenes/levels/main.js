import { Background } from "../../gameObjects.js";

class Main extends Phaser.Scene
{
    constructor ()
    {
        super( 'main' );
    
    }

    init() {

        this.background = new Background( this, 'bg' );

    }
      
    create ()
    {
        
        // this.background.create();

    }

    update( time, dt ) {

        // this.background.preUpdate( time, dt );

    }
}

export { Main };