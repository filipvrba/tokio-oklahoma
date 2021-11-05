class Background extends Phaser.GameObjects.GameObject
{
    constructor( scene, type )
    {
        super( scene, type );

        this.createListener = () => this.create();
        this.updateListener = (t, d) => this.update(t, d / 100);

        this.scene.events.on( Phaser.Scenes.Events.CREATE, this.createListener );
        this.scene.events.on( Phaser.Scenes.Events.UPDATE, this.updateListener );

        this.speed = 20;
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
        this.bgMovement( this.bgOne, dt );
        this.bgMovement( this.bgTwo, dt );

        // Grounds
        this.groundMovement( this.groundOne, dt );
        this.groundMovement( this.groundTwo, dt );

    }

    bgMovement( image, dt ) {

        const data = {
            image, width: this.widthOneBG,
            velocity: this.speed * dt
        };
        this.movement( data );

    }

    groundMovement( image, dt ) {

        const data = {
            image, width: this.widthOneGround,
            velocity: ( this.speed * 2 ) * dt
        };
        this.movement( data );

    }

    movement( data ) {

        const { image, width, velocity } = data;

        if ( image.x <= -width ) {

            image.x = width - velocity * 2;

        } else {

            image.x -= velocity;

        }

    }

    destroy( fromScene = false ) {

        this.scene.events.off( Phaser.Scenes.Events.CREATE, this.createListener );
        this.scene.events.off( Phaser.Scenes.Events.UPDATE, this.updateListener );

        super.destroy( fromScene );
    }

}

export { Background };