import { RateLevel } from '../models/RateLevel.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RateLevelAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RateLevel', RateLevel); 
    }
}
