import { GLSchedule } from '../models/GLSchedule.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLScheduleAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLSchedule', GLSchedule); 
    }
}
