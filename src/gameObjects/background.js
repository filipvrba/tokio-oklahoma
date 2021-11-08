import * as cons from '../constants';
import { ObjectMoving } from "./objectMoving.js";

// Backgrounds
import { Ground } from './backgrounds/ground.js';
import { BG } from './backgrounds/bg.js';

class Background extends ObjectMoving
{
    constructor( scene, type )
    {
        super( scene, type );

        this.scene.cameras.main.setBackgroundColor( '#efefef' );

        this.bg = new BG( scene, cons.BG );
        this.ground = new Ground( scene, cons.GROUND );
    }

    create() {

        this.bg.createOBJs();
        this.ground.createOBJs();
    }

    update( _, dt ) {

        this.bg.update( dt );
        this.ground.update( dt );
    }

    getWidthOneBG() {

        return this.bg.getChildren()[ 0 ].width;
    }
}

export { Background };