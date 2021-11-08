import * as cons from '../../constants.js';
import { Backgrounds } from './backgrounds.js';

class Ground extends Backgrounds {

    constructor( scene, type ) {

        super( scene, type );

        // Public
        this.groundOrigin = new Phaser.Math.Vector2( 0, 1 );
    }

    getVelocity() {

        return this.background.getSpeed() * 2;
    }

    createOBJs() {

        super.createOBJs();

        const groundOne = this.createGround();
        const groundTwo = this.createGround( groundOne.width );

        this.add( groundOne );
        this.add( groundTwo );

        this.setLastID();
    }

    createGround( positionX = 0 ) {

        const ground = this.scene.add.image(
            positionX, this.scene.scale.height, cons.GROUND );
        ground.setOrigin( this.groundOrigin.x, this.groundOrigin.y );
        ground.depth = 1;

        return ground;
    }
}

export { Ground };