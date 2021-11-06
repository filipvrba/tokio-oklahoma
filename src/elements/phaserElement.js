import * as levels from '../scenes/levels.js';
import * as cons from '../constants.js';

class PhaserElement extends HTMLElement {

    constructor() {

        super();

        this.innerHTML = `
        <div id="${ cons.ROOT }"></div>
        `;

        this.game = null;
        this.fullHD = new Phaser.Math.Vector2( 1920, 1080 );

        this.destroyListener = () => this.destroyGame();
        this.loadListener = () => this.initGame();

    }

    initGame() {

        const config = {
            type: Phaser.CANVAS,
            // parent: cons.ROOT,
            autoRound: true,
            fps: 60,  // Fixed fps
            antialias: false,
            powerPreference: 'low-power',
            width: this.fullHD.y,
            height: this.fullHD.x,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            physics: {
                default: 'arcade'
            }
        };
        
        this.game = new Phaser.Game( config );
        this.addScenes( this.game );
    
    }

    addScenes( game ) {

        this.game.scene.add( 'root', levels.Root, true );  // Starts first
        this.game.scene.add( "loading", levels.Loading );
        this.game.scene.add( "main", levels.Main );
    
    }

    destroyGame() {

        if ( this.game === null ) return;
    
        this.game.destroy();
        this.remove();  // Remove this element
    
    }

    connectedCallback() {

        window.addEventListener( cons.LOAD, this.loadListener );
        window.addEventListener( cons.RESET, this.destroyListener );
        window.addEventListener( cons.BEFORE, this.destroyListener );
        window.addEventListener( cons.CLOSE, this.destroyListener );

    }

    disconnectedCallback() {

        window.removeEventListener( cons.LOAD, this.loadListener );
        window.removeEventListener( cons.RESET, this.destroyListener );
        window.removeEventListener( cons.BEFORE, this.destroyListener );
        window.removeEventListener( cons.CLOSE, this.destroyListener );

    }
}

export { PhaserElement };