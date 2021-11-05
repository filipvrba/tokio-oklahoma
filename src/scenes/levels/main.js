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
      
    create () {
        
        

    }

    update( time, dt ) {

        

    }
}

export { Main };