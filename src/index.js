import Phaser from 'phaser';
import * as cons from './constants.js';
import { PhaserElement } from './elements/phaserElement.js';

window.customElements.define( cons.PHASER, PhaserElement );