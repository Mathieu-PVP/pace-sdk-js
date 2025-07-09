import { ScheduledTask } from '../models/ScheduledTask.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduledTaskAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduledTask', ScheduledTask); 
    }
}
