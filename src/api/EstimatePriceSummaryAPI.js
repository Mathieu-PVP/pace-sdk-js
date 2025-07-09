import { EstimatePriceSummary } from '../models/EstimatePriceSummary.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePriceSummaryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePriceSummary', EstimatePriceSummary); 
    }
}
