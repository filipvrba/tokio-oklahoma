import { ObjectMoving } from "./objectMoving.js";

class Background extends ObjectMoving
{
    constructor( scene, type )
    {
        super( scene, type );

        this.scene.cameras.main.setBackgroundColor( '#efefef' );

        this.widthOneBG = 0;  // Inicialize in during creating process.
        this.widthOneGround = 0;  // Inicialize in during creating process.

    }

    create() {

        this.createBG();
        this.createGround();

    }

    createBG() {

        const halfHeight = this.scene.scale.height * 0.5;
        const bgOrigin = new Phaser.Math.Vector2( 0, 0.66 );

        this.bgOne = this.scene.add.image(
            0, halfHeight, 'bgOne' );
        this.bgOne.setOrigin( bgOrigin.x, bgOrigin.y );

        this.widthOneBG = this.bgOne.width;

        this.bgTwo = this.scene.add.image(
            this.widthOneBG, halfHeight, 'bgTwo' );
        this.bgTwo.setOrigin( bgOrigin.x, bgOrigin.y );

    }

    createGround() {

        const groundOrigin = new Phaser.Math.Vector2( 0, 1 );

        this.groundOne = this.scene.add.image(
            0, this.scene.scale.height, 'ground' );
        this.groundOne.setOrigin( groundOrigin.x, groundOrigin.y );

        this.widthOneGround = this.groundOne.width;

        this.groundTwo = this.scene.add.image(
            this.widthOneGround, this.scene.scale.height, 'ground' );
        this.groundTwo.setOrigin( groundOrigin.x, groundOrigin.y );

    }

    update( time, dt ) {

        // Backgrounds
        if ( this.bgOne && this.bgTwo ) {
            this.bgMovement( this.bgOne, dt );
            this.bgMovement( this.bgTwo, dt );
        }

        // Grounds
        if ( this.groundOne && this.groundTwo ) {
            this.groundMovement( this.groundOne, dt );
            this.groundMovement( this.groundTwo, dt );
        }

    }

    bgMovement( image, dt ) {

        const data = {
            image, width: this.widthOneBG,
            velocity: this.getSpeed() * dt
        };
        this.movement( data );

    }

    groundMovement( image, dt ) {

        const data = {
            image, width: this.widthOneGround,
            velocity: ( this.getSpeed() * 2 ) * dt
        };
        this.movement( data );

    }

}

export { Background };