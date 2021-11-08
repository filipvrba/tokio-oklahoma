import { ObjectMoving } from "./objectMoving.js";
import { CreateComponent } from '../components/obstacles/createComponent.js';

class Obstacles extends ObjectMoving {

    constructor( scene, type ) {

        super( scene, type );

        this.createdObstacles = new CreateComponent( this );
        this.heightSpace = 400;//px
    }

    getStartPoint() {

        return this.scene.getBackground().getWidthOneBG();
    }

    create() {

        this.createdObstacles.create();

        const camera = this.scene.cameras.main;

        const topObstacles = this.createdObstacles.getTopObstacles();
        const topObstacle = this.getObstacle( topObstacles );
        topObstacle.setPosition( camera.width * 0.5, camera.height * 0.25 );
        topObstacle.setOrigin( 0.5, 1 );
        topObstacle.setScale( 1.5, 1.5 );

        const bottomObstacles = this.createdObstacles.getBottomObstacles();
        const bottomObstacle = this.getObstacle( bottomObstacles );
        bottomObstacle.setPosition( topObstacle.x, topObstacle.y + this.heightSpace );
        bottomObstacle.setOrigin( 0.5, 0 );
        bottomObstacle.setScale( 1.25, 1.25 );
    }

    getObstacle( obstacles ) {

        const length = obstacles.length;
        const id = Math.floor( Math.random() * length );

        return obstacles[ id ];
    }
}

export { Obstacles };