import { EstimateStatus } from '../models/EstimateStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateStatus', EstimateStatus); 
    }
}
