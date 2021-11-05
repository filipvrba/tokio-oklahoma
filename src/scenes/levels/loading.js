class Loading extends Phaser.Scene
{
    constructor ()
    {
        super( 'loading' );
    
    }

    preloadFiles() {

        /**
         * Textures
         */
        // Background
        this.load.image( 'bgOne', 'assets/textures/bg/bg_v1.png' );
        this.load.image( 'bgTwo', 'assets/textures/bg/bg_v2.png' );

        // Credits
        this.load.image( 'btg', 'assets/textures/credits/btg.png' );
        this.load.image( 'credits', 'assets/textures/credits/credits.png' );

    }

    preload ()
    {

        this.createLoader();
        this.preloadFiles();
        
        this.load.on( Phaser.Loader.Events.COMPLETE, () => this.complete() );
        
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