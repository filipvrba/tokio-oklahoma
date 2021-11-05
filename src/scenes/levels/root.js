class Root extends Phaser.Scene
{
    constructor ()
    {
        super( 'root' );
    
    }

    preload () {

        this.load.image( 'tomio', 'assets/textures/tom.png' );
        this.load.on( Phaser.Loader.Events.COMPLETE, () => this.complete() );
        
    }

    complete() {

        this.scene.start( 'loading' );

    }

}

export { Root };