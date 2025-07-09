import { JobCostType } from '../models/JobCostType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobCostTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobCostType', JobCostType); 
    }
}
