import { BasicObject } from "../basicObject.js";

class Character extends BasicObject {

    constructor( scene, type ) {

        super( scene, type );
    }

    connect() {

        super.connect();
        this.scene.input.on( 'pointerdown', () => this.jump() );
    }

    disconnect() {

        super.disconnect();
        this.scene.input.off( 'pointerdown', () => this.jump() );
    }

    // Virtual function
    jump(event) { }
}

export { Character };