import Phaser from 'phaser';
import * as levels from './scenes/levels.js';

const destroyListener = () => destroyGame();
let game = null;

function initGame() {

    const fullHD = new Phaser.Math.Vector2( 1920, 1080 );

    const config = {
        type: Phaser.AUTO,
        width: fullHD.y,
        height: fullHD.x,
        scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
        physics: {
            default: 'arcade'
        }
    };
    
    game = new Phaser.Game(config);
    addScenes( game );

}

function destroyGame() {

    if ( game === null ) return;
    game.destroy( true, true );

}

function addScenes( game ) {

    game.scene.add( 'root', levels.Root, true );  // Starts first
    game.scene.add( "loading", levels.Loading );
    game.scene.add( "main", levels.Main );

}

window.onload = () => initGame();
window.onreset = destroyListener;
window.onbeforeunload = destroyListener;