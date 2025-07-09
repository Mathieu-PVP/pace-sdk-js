import { JobPartCommissionDistribution } from '../models/JobPartCommissionDistribution.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartCommissionDistributionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartCommissionDistribution', JobPartCommissionDistribution); 
    }
}
