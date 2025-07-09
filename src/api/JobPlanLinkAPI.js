import { JobPlanLink } from '../models/JobPlanLink.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPlanLinkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPlanLink', JobPlanLink); 
    }
}
