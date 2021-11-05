class Root extends Phaser.Scene
{
    constructor ()
    {
        super( 'root' );
    
    }

    init() {

        this.load.on( Phaser.Loader.Events.COMPLETE, () => this.complete() );

    }

    preload () {

        this.load.image( 'tomio', 'assets/textures/tom.png' );
        
    }

    complete() {

        this.scene.start( 'loading' );

    }

}

export { Root };