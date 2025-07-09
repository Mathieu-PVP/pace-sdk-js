import { ActivityRate } from '../models/ActivityRate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityRateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityRate', ActivityRate); 
    }
}
