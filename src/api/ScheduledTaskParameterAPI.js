import { ScheduledTaskParameter } from '../models/ScheduledTaskParameter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduledTaskParameterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduledTaskParameter', ScheduledTaskParameter); 
    }
}
