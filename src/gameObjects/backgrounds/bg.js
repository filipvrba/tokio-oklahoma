import * as cons from '../../constants.js';
import { Backgrounds } from "./backgrounds.js";

class BG extends Backgrounds {

    constructor( scene, type ) {

        super( scene, type );

        this.bgOrigin = new Phaser.Math.Vector2( 0, 0.66 );
    }

    getVelocity() {

        return this.background.getSpeed();
    }

    createOBJs() {

        super.createOBJs();

        const bgOne = this.createBG( 0, cons.BG_ONE );
        const bgTwo = this.createBG( bgOne.width, cons.BG_TWO );

        this.add( bgOne );
        this.add( bgTwo );

        this.setLastID();
    }

    createBG( positionX = 0, imageType ) {

        const bg = this.scene.add.image(
            positionX, this.scene.scale.height * 0.5, imageType );
        bg.setOrigin( this.bgOrigin.x, this.bgOrigin.y );

        return bg;
    }
}

export { BG };