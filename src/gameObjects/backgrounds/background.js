class Background extends Phaser.GameObjects.GameObject
{
    constructor( scene, type )
    {
        super( scene, type );

        this.createListener = () => this.create();
        this.updateListener = (t, d) => this.update(t, d);

        this.scene.events.on( Phaser.Scenes.Events.CREATE, this.createListener );
        this.scene.events.on( Phaser.Scenes.Events.UPDATE, this.updateListener );

    }

    destroy( fromScene = false ) {

        this.scene.events.off( Phaser.Scenes.Events.CREATE, this.createListener );
        this.scene.events.off( Phaser.Scenes.Events.UPDATE, this.updateListener );

        super.destroy( fromScene );
    }

    create() {

        

    }

    update( time, dt ) {

        

    }

}

export { Background };