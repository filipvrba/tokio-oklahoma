import * as constants from '../../constants';

class CreateComponent {

    constructor( gameObject ) {

        // Public
        this.gameObject = gameObject;

        this.topObstaclesName = [
            constants.CLOUD,
            constants.PROBE
        ];
        this.bottomObstaclesName = [
            constants.BLOCK,
            constants.CAR,
            constants.EUFLAG,
            constants.PESMG
        ];

        //Private
        this._topObstacles = [ ];
        this._bottomObstacles = [ ];
    }

    create() {

        const positionX = this.gameObject.getStartPoint();
        const infinityPosition = new Phaser.Math.Vector2(
            positionX, 0 );

        this.createTop( infinityPosition );
        this.createBottom( infinityPosition );
    }

    createTop( position ) {

        this._topObstacles = this.obstacles(
            this.topObstaclesName,
            position
        );
    }

    createBottom( position ) {

        this._bottomObstacles = this.obstacles(
            this.bottomObstaclesName,
            position
        );
    }

    obstacles( list, position ) {

        const obstacles = [ ];
        for ( const obstacleName of list  ) {

            const obstacle = this.gameObject.scene.add.image(
                position.x, position.y,
                obstacleName );
            obstacles.push( obstacle );
        }

        return obstacles;
    }

    getTopObstacles() {

        return this._topObstacles;
    }

    getBottomObstacles() {

        return this._bottomObstacles;
    }

}

export { CreateComponent };