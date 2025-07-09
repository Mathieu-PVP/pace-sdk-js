import { PressSpeed } from '../models/PressSpeed.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressSpeedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressSpeed', PressSpeed); 
    }
}
