import { ObjectMoving } from "./objectMoving.js";
import { CreateComponent } from '../components/obstacles/createComponent.js';
import { Mathf } from "../mathf.js";
import * as cons from '../constants';

class Obstacles extends ObjectMoving {

    constructor( scene ) {

        super( scene, cons.OBSTACLES );

        this.resetMovementListener = (type) => this.resetMovement(type);

        this.createdObstacles = new CreateComponent( this );
        this.heightSpace = 350;//px
    }

    getStartPoint() {

        return this.scene.getBackground().getWidthOneBG();
    }

    create() {

        this.on( cons.RESET_MOVEMENT, this.resetMovementListener );

        this.createdObstacles.create();

        this.spawnObstacle();
    }

    destroy( fromScene = false ) {

        super.destroy( fromScene );
        this.off( cons.RESET_MOVEMENT, this.resetMovementListener );
    }

    update( _, dt ) {

        this.obstacleMovement( this.topObstacle, dt );
        this.obstacleMovement( this.bottomObstacle, dt );
    }

    obstacleMovement( obstacle, dt ) {

        const data = {
            image: obstacle,
            width: this.getStartPoint() * 0.25,
            velocity: this.getVelocity() * dt,
            positionX: this.getStartPoint(),
            type: this.type
        };
        this.movement( data );
    }

    spawnObstacle() {

        const camera = this.scene.cameras.main;

        const randomHeigth = Mathf.random( 0.1, 0.4 );
        const topObstacles = this.createdObstacles.getTopObstacles();
        this.topObstacle = this.getObstacle( topObstacles );
        this.topObstacle.setPosition( this.topObstacle.x, camera.height * randomHeigth );
        this.topObstacle.setOrigin( 0.5, 1 );
        this.topObstacle.setScale( 1.5, 1.5 );

        const bottomObstacles = this.createdObstacles.getBottomObstacles();
        this.bottomObstacle = this.getObstacle( bottomObstacles );
        this.bottomObstacle.setPosition( this.topObstacle.x, this.topObstacle.y + this.heightSpace );
        this.bottomObstacle.setOrigin( 0.5, 0 );
        this.bottomObstacle.setScale( 1.25, 1.25 );
    }

    getObstacle( obstacles ) {

        const length = obstacles.length;
        const id = Math.floor( Math.random() * length );

        return obstacles[ id ];
    }

    resetMovement( type ) {

        this.spawnObstacle();
    }

    getVelocity() {

        return this.getSpeed();
    }
}

export { Obstacles };