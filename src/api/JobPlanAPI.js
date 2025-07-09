import { JobPlan } from '../models/JobPlan.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPlanAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPlan', JobPlan); 
    }
}
