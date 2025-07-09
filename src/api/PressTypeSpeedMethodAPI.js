import { PressTypeSpeedMethod } from '../models/PressTypeSpeedMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressTypeSpeedMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressTypeSpeedMethod', PressTypeSpeedMethod); 
    }
}
