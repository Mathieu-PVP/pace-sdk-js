import { Activity } from '../models/Activity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Activity', Activity); 
    }
}
