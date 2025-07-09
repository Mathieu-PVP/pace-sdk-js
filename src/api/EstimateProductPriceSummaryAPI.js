import { EstimateProductPriceSummary } from '../models/EstimateProductPriceSummary.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateProductPriceSummaryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateProductPriceSummary', EstimateProductPriceSummary); 
    }
}
