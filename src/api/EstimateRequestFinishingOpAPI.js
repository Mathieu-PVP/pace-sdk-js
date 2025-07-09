import { EstimateRequestFinishingOp } from '../models/EstimateRequestFinishingOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestFinishingOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestFinishingOp', EstimateRequestFinishingOp); 
    }
}
