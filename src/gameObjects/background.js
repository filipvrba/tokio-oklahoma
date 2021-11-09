import * as cons from '../constants';
import { ObjectMoving } from "./objectMoving.js";

// Backgrounds
import { Ground } from './backgrounds/ground.js';
import { BG } from './backgrounds/bg.js';

class Background extends ObjectMoving
{
    constructor( scene )
    {
        super( scene, cons.BACKGROUND );

        this.scene.cameras.main.setBackgroundColor( '#efefef' );

        this.bg = new BG( scene, cons.BG );
        this.ground = new Ground( scene, cons.GROUND );
    }

    create() {

        this.bg.createOBJs();
        this.ground.createOBJs();

        // this.collision = new Phaser.Physics.Arcade.StaticBody( this.scene.physics.world, this );
        // this.collision.setSize( this.scene.cameras.main.width, 50, true );
        // this.collision.position = new Phaser.Math.Vector2( 0, this.scene.cameras.main.height );
    
        // console.log( this.scene.physics.world.on );
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