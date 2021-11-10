class BasicObject extends Phaser.GameObjects.GameObject {

    constructor( scene, type ) {

        super( scene, type );

        this.createListener = () => this.create();
        this.updateListener = (t, d) => this.update(t, d / 100);

        this.connect();
    }

    connect() {

        this.scene.events.on( Phaser.Scenes.Events.CREATE, this.createListener );
        this.scene.events.on( Phaser.Scenes.Events.UPDATE, this.updateListener );

    }

    disconnect() {

        this.scene.events.off( Phaser.Scenes.Events.CREATE, this.createListener );
        this.scene.events.off( Phaser.Scenes.Events.UPDATE, this.updateListener );

    }

    // Overwritten
    destroy( fromScene = false ) {

        this.disconnect();
        super.destroy( fromScene );
    }

    get camera() {

        return this.scene.cameras.main;
    }

    // Virtual functions
    create() { }
    update( time, dt ) { }

}

export { BasicObject };