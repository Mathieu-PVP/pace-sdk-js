import { EstimateRequest } from '../models/EstimateRequest.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequest', EstimateRequest); 
    }
}
