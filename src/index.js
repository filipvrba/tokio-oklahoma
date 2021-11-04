import Phaser from 'phaser';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', './assets/logo.png');
    }
      
    create ()
    {
        
        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade'
    },
    scene: MyGame
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