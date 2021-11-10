import * as constants from '../../constants.js';

class Loading extends Phaser.Scene
{
    constructor ()
    {
        super( 'loading' );
    
    }

    init() {

        this.load.on( Phaser.Loader.Events.COMPLETE, () => this.complete() );

    }

    preloadFiles() {

        this.preloadTextures();
        this.preloadSounds();

    }

    preloadTextures() {

        // tomio - is loaded
        this.load.image( constants.PIXEL, 'assets/textures/pixel.png' )

        // Background
        this.load.image( constants.BG_ONE, 'assets/textures/bg/bg_v1.png' );
        this.load.image( constants.BG_TWO, 'assets/textures/bg/bg_v2.png' );

        // Credits
        this.load.image( 'btg', 'assets/textures/credits/btg.png' );
        this.load.image( 'credits', 'assets/textures/credits/credits.png' );

        // Ground paper
        this.load.image( constants.GROUND, 'assets/textures/ground_paper/ground_v1.png' );

        // Obstacles
        this.load.image( constants.BLOCK, 'assets/textures/obstacles/block.png' );
        this.load.image( constants.CAR, 'assets/textures/obstacles/CAR.png' );
        this.load.image( constants.CLOUD, 'assets/textures/obstacles/CLOUD.png' );
        this.load.image( constants.EUFLAG, 'assets/textures/obstacles/euflag.png' );
        this.load.image( constants.PESMG, 'assets/textures/obstacles/pesmg.png' );
        this.load.image( constants.PROBE, 'assets/textures/obstacles/probe.png' );

        // Scoreboard
        this.load.image( 'butt', 'assets/textures/scoreboard/butt.png' );
        this.load.image( 'okbutton', 'assets/textures/scoreboard/okbutton.png' );
        this.load.image( 'scoreboardfui', 'assets/textures/scoreboard/scoreboardfui.png' );

        // Start screen
        this.load.image( 'tap2fly', 'assets/textures/startscreen/tap2fly.png' );
        this.load.image( 'to', 'assets/textures/startscreen/to.png' );

    }

    preloadSounds() {

        // Ambient
        this.load.audio( 'ambiend_01', 'assets/sounds/ambiend/ambiend_01.mp3' );

        // Click
        this.load.audio( 'click_01', 'assets/sounds/click/click_01.mp3' );
        this.load.audio( 'click_02', 'assets/sounds/click/click_02.mp3' );
        this.load.audio( 'click_03', 'assets/sounds/click/click_03.mp3' );

        // Click
        this.load.audio( 'die_01', 'assets/sounds/die/die_01.wav' );

        // Music
        this.load.audio( 'music_01', 'assets/sounds/music/music_01.mp3' );
        this.load.audio( 'music_02', 'assets/sounds/music/music_02.mp3' );
        this.load.audio( 'music_03', 'assets/sounds/music/music_03.mp3' );

    }

    preload () {

        this.createLoader();
        this.preloadFiles();
        
    }

    createLoader() {

        const centerPosition = new Phaser.Math.Vector2(
            this.scale.width * 0.5, this.scale.height * 0.5 );

        const tomio = this.add.image( centerPosition.x, centerPosition.y,
            'tomio' );
        
        // Move
        this.tweens.add({
            targets: tomio,
            y: this.scale.height * 0.35,
            duration: 300,
            ease: "Power1",
            yoyo: true,
            loop: -1
        });

        // Rotatate
        this.tweens.add({
            targets: tomio,
            angle: 30,
            duration: 600,
            ease: "Power",
            yoyo: false,
            loop: -1
        });

        // Text
        const styleText = {
            fontFamily: 'selima',
            fontSize: '160px'
        };
        const text = this.add.text( centerPosition.x, centerPosition.y + 300,
            'Loading...', styleText);
        text.setOrigin( 0.5, 0.5 )

    }

    complete() {

        this.scene.start( 'main' );

    }
}

export { Loading };