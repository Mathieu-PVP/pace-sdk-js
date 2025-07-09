import { EstimateFinishingOp } from '../models/EstimateFinishingOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateFinishingOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateFinishingOp', EstimateFinishingOp); 
    }
}
