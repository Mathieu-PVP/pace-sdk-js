import { JobCostSetup } from '../models/JobCostSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobCostSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobCostSetup', JobCostSetup); 
    }
}
