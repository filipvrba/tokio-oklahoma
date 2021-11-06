import { BasicObject } from './basicObject.js';

class ObjectMoving extends BasicObject {

    constructor( scene, type ) {

        super( scene, type );

        // I do not want apply private field.
        this._speed = 0;

    }

    getSpeed() {

        return this._speed;

    }

    setSpeed( value ) {

        this._speed = value;

    }

    movement( data ) {

        const { image, width, velocity } = data;

        if ( image.x <= -width ) {

            image.x = width - velocity * 2;

        } else {

            image.x -= velocity;

        }

    }

}

export { ObjectMoving };