import { SpeedFactor } from '../models/SpeedFactor.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SpeedFactorAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SpeedFactor', SpeedFactor); 
    }
}
