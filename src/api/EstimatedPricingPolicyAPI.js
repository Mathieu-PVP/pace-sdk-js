import { EstimatedPricingPolicy } from '../models/EstimatedPricingPolicy.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatedPricingPolicyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatedPricingPolicy', EstimatedPricingPolicy); 
    }
}
