import * as cons from '../../constants.js';

class Backgrounds extends Phaser.GameObjects.Group {

    constructor( scene, type ) {

        super( scene );

        this.resetMovementListener = (type) => this.resetMovement(type);
        
        // Public
        this.type = type;

        // Private
        this._lastID = 0;
    }

    get background() {

        return this.scene.background;
    }

    setLastID() {

        return this._lastID = this.getLength() - 1;
    }

    createOBJs() {

        this.background.on( cons.RESET_MOVEMENT, this.resetMovementListener );
    }

    destroy( destrouChildren = false , removeFromScene = false ) {

        super.destroy( destrouChildren, removeFromScene );

        this.background.off( cons.RESET_MOVEMENT, this.resetMovementListener );
    }

    update( dt ) {

        const children = this.getChildren();
        if ( children.length > 0 ) {
            
            for ( let i = 0; i < children.length; i++ ) {

                this.movement( i, dt );
            }
        }
    }

    movement( id, dt ) {

        const children = this.getChildren();
        const data = {
            image: children[ id ],
            width: children[ id ].width,
            velocity: this.getVelocity() * dt,
            positionX: children[ this._lastID ].x,
            type: this.type
        };
        this.background.movement( data );
    }

    resetMovement( type ) {

        if ( type !== this.type ) return;

        this._lastID += 1;
        this._lastID = this._lastID % this.getLength();
    }

    // Virtual function
    getVelocity() { return 0; }
}

export { Backgrounds };