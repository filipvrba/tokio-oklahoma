import { Character } from "./character.js";
import { TOMIO } from '../../constants.js';

class Tomio extends Character {

    constructor( scene ) {

        super( scene, TOMIO );
        this.gravity = 200;
    }

    create() {

        const camera = this.scene.cameras.main;
        this.tomio = this.scene.physics.add.sprite( camera.width / 2,
            camera.height / 2, TOMIO );
        this.tomio.body.setSize( this.tomio.width, this.tomio.height * 0.5, true);

        this.tomio.setGravityY( this.gravity  );

        this.scene.physics.collide( this.tomio, this.scene.getBackground().collision, () => {

            console.log( 'collide' );
        } )
    }

    jump() {

        this.tomio.setVelocityY( -this.gravity  );
    }
}

export { Tomio };