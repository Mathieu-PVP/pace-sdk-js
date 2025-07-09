import { EstimateRequestPrepressOp } from '../models/EstimateRequestPrepressOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestPrepressOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestPrepressOp', EstimateRequestPrepressOp); 
    }
}
