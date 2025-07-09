import { SchedulingFlag } from '../models/SchedulingFlag.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SchedulingFlagAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SchedulingFlag', SchedulingFlag); 
    }
}
