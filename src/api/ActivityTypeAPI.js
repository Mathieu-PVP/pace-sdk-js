import { ActivityType } from '../models/ActivityType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityType', ActivityType); 
    }
}
