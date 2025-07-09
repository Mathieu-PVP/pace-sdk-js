import { JobCost } from '../models/JobCost.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobCostAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobCost', JobCost); 
    }
}
