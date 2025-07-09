import { EstimateQuantityCommissionDistribution } from '../models/EstimateQuantityCommissionDistribution.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateQuantityCommissionDistributionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateQuantityCommissionDistribution', EstimateQuantityCommissionDistribution); 
    }
}
