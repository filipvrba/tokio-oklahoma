import Phaser from 'phaser';
import * as levels from './scenes/levels.js';

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
        },
        scene: levels.Main
    };
    
    const game = new Phaser.Game(config);

}

window.onload = () => {

    initGame();

}