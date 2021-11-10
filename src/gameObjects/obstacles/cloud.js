import * as cons from '../../constants.js';

class Cloud extends Phaser.Physics.Arcade.StaticGroup {

    constructor( scene ) {

        super( scene.physics.world, scene );

        this.type = cons.CLOUD;
        // this.ready();

        // Private
        this._position = new Phaser.Math.Vector2( 0, 0 );
        this._sprite = new Phaser.GameObjects.Sprite();
    }

    ready() {

        this.createCloud();
    }

    createCloud() {

        this._sprite = this.scene.add.sprite( this._position.x,
            this._position.y, this.type );
    }

    setPosition( position ) {

        this._position = position;
    }
}

export { Cloud };