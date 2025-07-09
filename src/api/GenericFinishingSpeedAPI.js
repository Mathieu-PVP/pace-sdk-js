import { GenericFinishingSpeed } from '../models/GenericFinishingSpeed.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GenericFinishingSpeedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GenericFinishingSpeed', GenericFinishingSpeed); 
    }
}
