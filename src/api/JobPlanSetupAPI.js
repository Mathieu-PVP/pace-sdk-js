import { JobPlanSetup } from '../models/JobPlanSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPlanSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPlanSetup', JobPlanSetup); 
    }
}
