import { ActivityCodePLQMapping } from '../models/ActivityCodePLQMapping.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityCodePLQMappingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityCodePLQMapping', ActivityCodePLQMapping); 
    }
}
