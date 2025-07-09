import { ScheduledTaskOutputLocation } from '../models/ScheduledTaskOutputLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduledTaskOutputLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduledTaskOutputLocation', ScheduledTaskOutputLocation); 
    }
}
