import { EstimateRequestStatus } from '../models/EstimateRequestStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestStatus', EstimateRequestStatus); 
    }
}
