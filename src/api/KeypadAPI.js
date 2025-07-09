import { Keypad } from '../models/Keypad.js';
import { AbstractAPI } from './AbstractAPI.js';

export class KeypadAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Keypad', Keypad); 
    }
}
