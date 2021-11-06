import * as constants from '../constants.js';
import { ObjectMoving } from "./objectMoving.js";

class Obstacles extends ObjectMoving {

    constructor( scene, type ) {

        super( scene, type );

        this.topObstacles = [
            // constants.CLOUD,
            constants.PROBE
        ];
        this.bottomObstacles = [
            constants.BLOCK,
            constants.CAR,
            constants.EUFLAG,
            constants.PESMG
        ];

    }

    create() {

        this.topObstaclesCreated = [ ];
        for ( const topObstacle of this.topObstacles  ) {

            const obstacle = this.scene.add.image( 0, 0, topObstacle );
            this.topObstaclesCreated.push( obstacle );

        }

    }

}

export { Obstacles };