import { ScheduledTaskResult } from '../models/ScheduledTaskResult.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduledTaskResultAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduledTaskResult', ScheduledTaskResult); 
    }
}
