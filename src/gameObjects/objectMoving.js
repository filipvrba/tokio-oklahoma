import { BasicObject } from './basicObject.js';
import * as cons from '../constants';

class ObjectMoving extends BasicObject {

    constructor( scene, type ) {

        super( scene, type );

        this.devMode = false;

        // I do not want apply private field.
        this._speed = 0;
    }

    getSpeed() {

        return this._speed;

    }

    setSpeed( value ) {

        this._speed = value;

    }

    movement( data, isChangePosition = true ) {

        if ( this.devMode ) return;

        const { image, width, velocity, positionX, type } = data;

        if ( image.x <= -width ) {

            if (isChangePosition) {
                
                image.x = ( positionX + width ) - velocity;
            }
            this.emit( cons.RESET_MOVEMENT, type );

        } else {

            image.x -= velocity;

        }

    }

}

export { ObjectMoving };