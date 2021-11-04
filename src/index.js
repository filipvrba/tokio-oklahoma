import Phaser from 'phaser';
import * as levels from './scenes/levels.js';

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade'
    },
    scene: levels.Main
};

const game = new Phaser.Game(config);

function resize() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    game.canvas.width = width;
    game.canvas.height = height;

    game.renderer.resize( width, height );
    game.scale.resize( width, height );
}

const resizeHandler = () => resize();
window.onresize = resizeHandler;

screen.orientation.onchange = resizeHandler;