import { JobTypePlan } from '../models/JobTypePlan.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobTypePlanAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobTypePlan', JobTypePlan); 
    }
}
