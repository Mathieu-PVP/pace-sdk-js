import { DefaultEstimateFinishingOp } from '../models/DefaultEstimateFinishingOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DefaultEstimateFinishingOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DefaultEstimateFinishingOp', DefaultEstimateFinishingOp); 
    }
}
