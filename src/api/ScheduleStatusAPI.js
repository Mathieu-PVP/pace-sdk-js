import { ScheduleStatus } from '../models/ScheduleStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduleStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduleStatus', ScheduleStatus); 
    }
}
