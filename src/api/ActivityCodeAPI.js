import { ActivityCode } from '../models/ActivityCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityCode', ActivityCode); 
    }
}
