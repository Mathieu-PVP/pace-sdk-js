import { CustomerCommissionDistribution } from '../models/CustomerCommissionDistribution.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerCommissionDistributionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerCommissionDistribution', CustomerCommissionDistribution); 
    }
}
